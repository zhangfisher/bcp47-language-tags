import { execSync } from "child_process";
import { rmSync } from "fs";
import { join } from "path";

const languages = [
  "zh-CN",
  "en-US",
  "ja-JP",
  "ko-KR",
  "ru-RU",
  "es-ES",
  "fr-FR",
  "de-DE",
  "it-IT",
  "ar-EG",
  "pt-PT",
  "nl-NL",
  "cs-CZ",
  "da-DK",
  "fi-FI",
  "hi-IN",
  "pl-PL",
  "sv-SE",
  "th-TH",
  "tr-TR",
  "vi-VN",
  "el-GR",
];

// 清理旧的构建产物
console.log("🧹 清理旧的构建产物...");
try {
  rmSync(join(process.cwd(), "dist"), { recursive: true, force: true });
} catch (e) {
  // 目录可能不存在，忽略错误
}

let successCount = 0;
let failCount = 0;

// 按顺序构建每种语言
for (const lng of languages) {
  console.log(`\n🚀 正在构建 ${lng}...`);

  try {
    // 构建 withFlags 版本
    console.log(`  - ${lng} (with flags)`);
    execSync(
      `npx tsup src/tags/${lng}/*.ts --outDir dist/withFlags/${lng} --minify --format cjs,esm --splitting false --dts false`,
      {
        stdio: "inherit",
        cwd: process.cwd(),
      }
    );

    // 构建 noFlags 版本
    console.log(`  - ${lng} (no flags)`);
    execSync(
      `npx tsup src/tags/${lng}/*.ts --outDir dist/noFlags/${lng} --minify --format cjs,esm --splitting false --dts false`,
      {
        stdio: "inherit",
        cwd: process.cwd(),
      }
    );

    successCount++;
    console.log(`✅ ${lng} 构建成功`);
  } catch (error) {
    failCount++;
    console.error(`❌ ${lng} 构建失败:`, error);
    // 继续构建其他语言
  }
}

console.log(`\n📊 构建完成:`);
console.log(`   成功: ${successCount}/${languages.length}`);
console.log(`   失败: ${failCount}/${languages.length}`);

if (failCount > 0) {
  process.exit(1);
}
