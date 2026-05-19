import { defineConfig, Options } from "tsup";
import { raw } from "esbuild-raw-plugin";
// @ts-ignore
import copy from "esbuild-copy-static-files";

const languages = [
  "zh-CN", //  简体中文
  "en-US", //  美国英语
  "ja-JP", //  日语
  "ko-KR", //  韩语
  "ru-RU", //  俄语
  "es-ES", //  西班牙语
  "fr-FR", //  法语
  "de-DE", //  德语
  "it-IT", //  意大利语
  "ar-EG", //  阿拉伯语
  "pt-PT", //  葡萄牙语
  "nl-NL", //  荷兰语
  "cs-CZ", //  捷克语
  "da-DK", //  丹麦语
  "fi-FI", //  芬兰语
  "hi-IN", //  印地语
  "pl-PL", //  波兰语
  "sv-SE", //  瑞典语
  "th-TH", //  泰语
  "tr-TR", //  土耳其语
  "vi-VN", //  越南语
  "el-GR", //  希腊语
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

export default defineConfig([
  {
    entry: ["src/index.ts"],
    outDir: "dist",
    minify: true,
    dts: true,
    clean: true,
    cjsInterop: true,
    format: ["cjs", "esm"],
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
      entry: [`src/tags/${lng}/*.ts`],
      outDir: `dist/${lng}`,
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
