import { defineConfig, Options } from "tsup";
import { raw } from "esbuild-raw-plugin";
// @ts-ignore
import copy from "esbuild-copy-static-files";
 
const languages = [
"ar",
"cs",
"da",
"de",
"el",
"en",
"es",
"fi",
"fr",
"hi",
"it",
"jp",
"ko",
"nl",
"pl",
"pt",
"ru",
"sv",
"th",
"tr",
"vi",
"zh",
]

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
    format: ["cjs", "esm"]
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
