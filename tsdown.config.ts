import { defineConfig } from "tsdown";
import copy from "rollup-plugin-copy";
import injectFlagsPlugin from "./plugins/inject-flags-plugin";

const languages = [
  "zh-CN", //  简体中文
  "en-US", //  美国英语
  "ja-JP", //  日语
  "ko-KR", //  韩语
  "ru-RU", // 俄语
  "es-ES", // 西班牙语
  "fr-FR", // 法语
  "de-DE", // 德语
  "it-IT", // 意大利语
  "ar-EG", // 阿拉伯语
  "pt-PT", // 葡萄牙语
  "nl-NL", // 荷兰语
  "cs-CZ", // 捷克语
  "da-DK", // 丹麦语
  "fi-FI", // 芬兰语
  "hi-IN", // 印地语
  "pl-PL", // 波兰语
  "sv-SE", // 瑞典语
  "th-TH", // 泰语
  "tr-TR", // 土耳其语
  "vi-VN", // 越南语
  "el-GR", // 希腊语
];

const mapTo = ["baidu", "tencent", "xunfei", "youdao", "iso639-1", "iso639-2", "iso639-3"];

export default defineConfig([
  {
    entry: [`src/index.ts`],
    outDir: `dist`,
    minify: true,
    dts: { cjsReexport: true },
    format: ["cjs", "esm"],
    clean: true,
    plugins: [
      copy({
        targets: [{ src: "src/flags", dest: "dist/" }],
      }),
    ],
  },
  {
    entry: [`src/flags.ts`],
    outDir: `dist`,
    minify: true,
    dts: { cjsReexport: true },
    format: ["cjs", "esm"],
  },
  ...mapTo.map((to) => {
    return {
      entry: [`src/mapper/${to}.ts`],
      outDir: "dist/mapper",
      minify: true,
      dts: { cjsReexport: true },
      format: ["cjs", "esm"],
      cjsDefault: true,
    } as any;
  }),
  ...languages.map((lng) => {
    return {
      entry: [`src/tags/${lng}/*.ts`],
      outDir: `dist/with-flags/${lng}`,
      minify: true,
      dts: { cjsReexport: true },
      splitting: false,
      format: ["cjs", "esm"],
      clean: false,
      plugins: [injectFlagsPlugin() as any],
    } as any;
  }),
  ...languages.map((lng) => {
    return {
      entry: [`src/tags/${lng}/*.ts`],
      outDir: `dist/no-flags/${lng}`,
      minify: true,
      dts: { cjsReexport: true },
      format: ["cjs", "esm"],
      splitting: false,
      clean: false,
    } as any;
  }),
]);
