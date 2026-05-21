#!/usr/bin/env node
// Flag injector script - inject flag SVG content into dist/withFlags files
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 配置
const CONFIG = {
  distDir: path.join(__dirname, '..', 'dist', 'withFlags'),
  flagsDir: path.join(__dirname, '..', 'src', 'flags', 'base64'),
  dryRun: false,
};

// 统计变量
const stats = {
  totalProcessed: 0,
  injectedCount: 0,
  replacedCount: 0,
  skippedCount: 0,
  errorCount: 0,
};

/**
 * 获取所有 flag 文件列表
 */
function getFlagFiles() {
  const files = fs.readdirSync(CONFIG.flagsDir);
  return files.filter(f => f.endsWith('.data')).map(f => f.replace('.data', ''));
}

/**
 * 获取所有语言目录
 */
function getLanguageDirs() {
  const entries = fs.readdirSync(CONFIG.distDir, { withFileTypes: true });
  return entries.filter(e => e.isDirectory()).map(e => e.name);
}

/**
 * 注入 flag 内容到文件
 */
function injectFlag(filePath, flagContent) {
  if (!fs.existsSync(filePath)) {
    return false;
  }

  let content = fs.readFileSync(filePath, 'utf-8');
  const svgStringLiteral = JSON.stringify(flagContent);
  let modifiedContent = content;

  // 检查是否已存在 flag 字段
  const flagMatch = content.match(/flag\s*:\s*"([^"]*)"/);

  if (flagMatch) {
    // flag 字段已存在
    if (flagMatch[1] === '') {
      // flag 为空字符串，替换为 SVG
      modifiedContent = content.replace(/flag\s*:\s*""/, `flag:${svgStringLiteral}`);
      stats.replacedCount++;
    } else {
      // flag 已有内容，跳过
      stats.skippedCount++;
      return true;
    }
  } else {
    // flag 字段不存在，在 nativeName 后添加
    modifiedContent = content.replace(
      /("nativeName"\s*:\s*"[^"]+")([,}])/,
      (match, p1, p2) => {
        if (p2 === '}') {
          return `${p1},flag:${svgStringLiteral}}`;
        }
        return `${p1},flag:${svgStringLiteral}${p2}`;
      }
    );
    stats.injectedCount++;
  }

  if (modifiedContent === content) {
    stats.skippedCount++;
    return true;
  }

  // 写入文件
  if (!CONFIG.dryRun) {
    fs.writeFileSync(filePath, modifiedContent, 'utf-8');
  }

  stats.totalProcessed++;
  return true;
}

/**
 * 主函数
 */
function main() {
  // 解析命令行参数
  const args = process.argv.slice(2);
  if (args.includes('--dry-run') || args.includes('-n')) {
    CONFIG.dryRun = true;
    console.log('Dry run mode: no files will be modified\n');
  }
  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
Usage: node scripts/inject-flags.js [options]

Options:
  -n, --dry-run    Preview mode, do not modify files
  -h, --help       Show help information

Examples:
  node scripts/inject-flags.js         # Execute injection
  node scripts/inject-flags.js -n      # Preview files to be processed
    `);
    process.exit(0);
  }

  if (!fs.existsSync(CONFIG.distDir)) {
    console.error(`Error: Directory does not exist: ${CONFIG.distDir}`);
    process.exit(1);
  }

  if (!fs.existsSync(CONFIG.flagsDir)) {
    console.error(`Error: Flag directory does not exist: ${CONFIG.flagsDir}`);
    process.exit(1);
  }

  console.log('Starting flag injection...\n');
  console.log(`Source: ${CONFIG.flagsDir}`);
  console.log(`Target: ${CONFIG.distDir}\n`);

  // 获取所有 flag 文件
  const flagFiles = getFlagFiles();
  console.log(`Found ${flagFiles.length} flag files`);

  // 获取所有语言目录
  const langDirs = getLanguageDirs();
  console.log(`Found ${langDirs.length} language directories\n`);

  // 遍历每个 flag 文件
  for (const lng of flagFiles) {
    const flagPath = path.join(CONFIG.flagsDir, `${lng}.data`);
    const flagContent = fs.readFileSync(flagPath, 'utf-8').trim();

    // 检查语言目录是否存在
    const langDir = path.join(CONFIG.distDir, lng);
    if (!fs.existsSync(langDir)) {
      continue;
    }

    // 处理 .mjs 文件
    const mjsPath = path.join(langDir, `${lng}.mjs`);
    injectFlag(mjsPath, flagContent);

    // 处理 .js 文件
    const jsPath = path.join(langDir, `${lng}.js`);
    injectFlag(jsPath, flagContent);
  }

  // 输出统计结果
  console.log('\nDone! Statistics:');
  console.log(`  Total processed: ${stats.totalProcessed} files`);
  console.log(`  New flags: ${stats.injectedCount}`);
  console.log(`  Replaced empty flags: ${stats.replacedCount}`);
  console.log(`  Skipped: ${stats.skippedCount}`);
  if (stats.errorCount > 0) {
    console.log(`  Errors: ${stats.errorCount}`);
  }

  if (CONFIG.dryRun) {
    console.log('\nThis was a dry run, no files were modified');
  }
}

main();
