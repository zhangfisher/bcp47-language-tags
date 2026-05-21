import { defineConfig, Options } from "tsup";
import { raw } from "esbuild-raw-plugin";
// @ts-ignore
import copy from "esbuild-copy-static-files";
import { flagInjectorPlugin } from "./src/plugins/flag-injector";

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
  ...languages.flatMap((lng) => {
    return [
      // 构建 tag 文件（注入 flag），排除 index.ts
      {
        entry: [`src/tags/${lng}/*.ts`],
        outDir: `dist/withFlags/${lng}`,
        minify: true,
        dts: false,
        format: ["cjs", "esm"],
        splitting: false,
        esbuildPlugins: [flagInjectorPlugin()]
      } as Options,
      // 单独构建 index.ts（外部依赖，不打包 tag 文件）
      {
        entry: [`src/tags/${lng}/index.ts`],
        outDir: `dist/withFlags/${lng}`,
        minify: true,
        dts: false,
        format: ["cjs", "esm"],
        // 将所有相对导入标记为外部
        external: ['./*.js', './*.mjs'],
      } as Options,
    ];
  }),
]);
