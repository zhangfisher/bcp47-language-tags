import { defineConfig, Options } from "tsup";
import { raw } from "esbuild-raw-plugin";
import copy from "esbuild-copy-static-files";

import fs from "fs";
import path from "path";

const languages = [
  "en",
  "zh",
  "de",
  "fr",
  "es",
  "jp",
  "ru",
  "it",
  "ko",
  "ar",
  "pt",
  "nl",
];

const mapTo = [
  "baidu",
  "tencent",
  "xunfei",
  "youdao",
  "iso639-1",
  "iso639-2",
  "iso639-3",
];

// 复制 flags.d.ts 到 dist 并修复 SVG 文件路径
function copyFlags() {
  // 复制 flags.d.ts 到 dist
  const dtsSource = path.join(process.cwd(), "src", "flags.d.ts");
  const dtsTarget = path.join(process.cwd(), "dist", "flags.d.ts");
  if (fs.existsSync(dtsSource)) {
    fs.copyFileSync(dtsSource, dtsTarget);
    console.log(`✅ Copied flags.d.ts to dist`);
  }

  // 修复 flags.js 和 flags.mjs 中的哈希文件名
  const flagsJs = path.join(process.cwd(), "dist", "flags.js");
  const flagsMjs = path.join(process.cwd(), "dist", "flags.mjs");

  // 移除 SVG 文件路径中的哈希值和 ?url 后缀
  const fixHashedPaths = (filePath: string): void => {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, "utf-8");
      // 匹配类似 "./zh-CN-LQMROSRN.svg?url" 的模式，替换为 "./zh-CN.svg"
      content = content.replace(
        /"\.\/([a-z]{2}-[A-Z]{2})-[A-Z0-9]+\.svg\?url"/g,
        '"./$1.svg"'
      );
      content = content.replace(
        /"\.\/([a-z]{2})-[A-Z0-9]+\.svg\?url"/g,
        '"./$1.svg"'
      );
      fs.writeFileSync(filePath, content);
    }
  };

  fixHashedPaths(flagsJs);
  fixHashedPaths(flagsMjs);
  console.log(`✅ Fixed SVG paths in flags.js and flags.mjs`);
}

export default defineConfig([
  {
    entry: ["src/index.ts"],
    outDir: "dist",
    minify: true,
    dts: true,
    clean: true,
    cjsInterop: true,
    format: ["cjs", "esm"],
    onSuccess: async () => {
      copyFlags();
    },
  },
  {
    entry: ["src/flags.ts"],
    outDir: "dist",
    minify: true,
    dts: false,
    cjsInterop: true,
    format: ["cjs", "esm"],
    esbuildPlugins: [
      raw(),
      copy({
        src: "./src/flags",
        dest: "./dist/flags",
        recursive: true,
        preserveTimestamps: true,
        dereference: true,
        errorOnExist: false,
        force: true,
      }),
    ],
  },
  {
    entry: ["src/utils/index.ts"],
    outDir: "dist/utils",
    minify: true,
    dts: true,
    cjsInterop: true,
    format: ["cjs", "esm"],
  },
  ...languages.map((lng) => {
    return {
      entry: [`src/${lng}.ts`],
      outDir: "dist",
      minify: true,
      dts: true,
      cjsInterop: true,
      format: ["cjs", "esm"],
    } as Options;
  }),
  ...mapTo.map((to) => {
    return {
      entry: [`src/mapper/${to}.ts`],
      outDir: "dist/mapper",
      minify: true,
      dts: true,
      cjsInterop: true,
      format: ["cjs", "esm"],
    } as Options;
  }),
]);
