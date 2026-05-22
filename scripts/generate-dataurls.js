#!/usr/bin/env node
// Generate .js, .mjs, .d.ts, and .d.mts files from .data files
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SOURCE_DIR = join(__dirname, "..", "src", "flags", "dataurl");

const stats = {
  total: 0,
  success: 0,
  failed: 0,
};

async function generateDataUrls() {
  const allFiles = await readdir(SOURCE_DIR);
  const dataFiles = allFiles.filter(f => f.endsWith('.data'));

  console.log(`找到 ${dataFiles.length} 个 .data 文件\n`);

  for (const fileName of dataFiles) {
    try {
      const dataPath = join(SOURCE_DIR, fileName);
      const content = await readFile(dataPath, "utf-8");
      const baseName = fileName.replace(/\.data$/, "");

      const jsContent = `module.exports="${content}";`;
      const dtsContent = `declare const content: string;\nexport = content;`;
      const mjsContent = `export default "${content}";`;
      const dmtsContent = `declare const _default: string;\nexport default _default;`;

      await Promise.all([
        writeFile(join(SOURCE_DIR, `${baseName}.js`), jsContent),
        writeFile(join(SOURCE_DIR, `${baseName}.d.ts`), dtsContent),
        writeFile(join(SOURCE_DIR, `${baseName}.mjs`), mjsContent),
        writeFile(join(SOURCE_DIR, `${baseName}.d.mts`), dmtsContent),
      ]);

      console.log(`✓ ${fileName} -> ${baseName}.js, ${baseName}.d.ts, ${baseName}.mjs, ${baseName}.d.mts`);
      stats.success++;
    } catch (err) {
      console.error(`✗ 处理 ${fileName} 失败:`, err.message);
      stats.failed++;
    }
    stats.total++;
  }

  console.log(`\n完成! 生成了 ${stats.success} 个 .js 文件、${stats.success} 个 .d.ts 文件、${stats.success} 个 .mjs 文件和 ${stats.success} 个 .d.mts 文件`);
  if (stats.failed > 0) {
    console.log(`失败: ${stats.failed} 个文件`);
  }
}

generateDataUrls();
