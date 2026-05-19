import { readdirSync, readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const TAGS_DIR = join(__dirname, "../src/tags");

// 主要语言列表 - 与 types.ts 中的 PrimaryLanguage 保持一致
const PRIMARY_LANGUAGES = [
  "zh-CN",
  "zh-TW",
  "en-US",
  "ru-RU",
  "es-ES",
  "fr-FR",
  "de-DE",
  "it-IT",
  "ar-EG",
  "ja-JP",
  "ko-KR",
] as const;

// 获取所有标签目录
function getTagDirs(): string[] {
  const dirs = readdirSync(TAGS_DIR, { withFileTypes: true });
  return dirs
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
}

// 获取目录下所有 .ts 文件（排除 index.ts）
function getTagFiles(dir: string): string[] {
  const files = readdirSync(join(TAGS_DIR, dir));
  return files.filter((file) => file.endsWith(".ts") && file !== "index.ts");
}

// 将文件名转换为变量名
function fileToVarName(filename: string): string {
  return filename.replace(/-/g, "").replace(".ts", "");
}

// 生成单个语言的 index.ts
function generateLanguageIndex(langDir: string): string {
  const allFiles = getTagFiles(langDir);

  // 只保留 PRIMARY_LANGUAGES 中定义的标签
  const primaryTags = allFiles.filter((file) => {
    const tag = file.replace(".ts", "");
    return PRIMARY_LANGUAGES.includes(tag as any);
  });
  primaryTags.sort();

  const imports = primaryTags
    .map(
      (file) => `import { ${fileToVarName(file)} } from "./${file.replace(".ts", "")}";`
    )
    .join("\n");

  const varNames = primaryTags
    .map((file) => fileToVarName(file))
    .join(", ");

  return `import { createTagUtils } from "../../utils/createTagUtils";

${imports}

const tags = [${varNames}];

const { getTag, getTags } = createTagUtils(tags);

export { getTag, getTags };
export { tags };
export * from "../../types";
`;
}

// 主函数
function main() {
  const dirs = getTagDirs();
  console.log(`Found ${dirs.length} language directories\n`);

  for (const dir of dirs) {
    const content = generateLanguageIndex(dir);
    const outputPath = join(TAGS_DIR, dir, "index.ts");
    writeFileSync(outputPath, content, "utf-8");

    // 计算实际生成的标签数量
    const allFiles = getTagFiles(dir);
    const primaryCount = allFiles.filter((file) => {
      const tag = file.replace(".ts", "");
      return PRIMARY_LANGUAGES.includes(tag as any);
    }).length;

    console.log(`Generated ${dir}/index.ts with ${primaryCount} primary tags`);
  }

  console.log("\nDone!");
}

main();
