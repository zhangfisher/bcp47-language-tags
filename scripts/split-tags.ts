import { readdirSync, readFileSync, mkdirSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC_DIR = join(__dirname, "../src");

// 获取所有两个字符的 .ts 文件
function getTwoCharFiles(): string[] {
  const files = readdirSync(SRC_DIR);
  return files.filter((file) => /^[a-z]{2}\.ts$/.test(file));
}

// 将 tag key 中的连字符移除
function toCamelCase(tag: string): string {
  return tag.replace(/-/g, "");
}

// 处理单个语言文件
async function processLanguageFile(filename: string) {
  const langCode = filename.slice(0, -3); // 去掉 .ts
  const filePath = join(SRC_DIR, filename);

  console.log(`Processing ${filename}...`);

  // 动态导入获取 tags
  const module = await import(filePath);
  const tags = module.tags;

  if (!tags || typeof tags !== "object") {
    console.error(`  Error: No tags found in ${filename}`);
    return;
  }

  // 创建输出目录
  const outputDir = join(SRC_DIR, "tags", langCode);
  mkdirSync(outputDir, { recursive: true });

  // 为每个 tag 生成文件
  for (const [key, value] of Object.entries(tags)) {
    if (typeof value !== "object" || !value) continue;

    const { tag, name, nativeName } = value as { tag: string; name: string; nativeName: string; primary?: boolean };
    const camelCaseKey = toCamelCase(key);
    const outputPath = join(outputDir, `${key}.ts`);

    const content = `import type { BCP47LanguageTag } from "../../types"\n` +
      `export const ${camelCaseKey}: BCP47LanguageTag = ${JSON.stringify({ tag, name, nativeName })};\n`;

    writeFileSync(outputPath, content, "utf-8");
  }

  const count = Object.keys(tags).length;
  console.log(`  Generated ${count} files in tags/${langCode}/`);
}

// 主函数
async function main() {
  const files = getTwoCharFiles();
  console.log(`Found ${files.length} language files to process\n`);

  for (const file of files) {
    await processLanguageFile(file);
  }

  console.log("\nDone!");
}

main().catch(console.error);
