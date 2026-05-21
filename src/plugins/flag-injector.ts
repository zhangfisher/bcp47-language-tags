import * as fs from "fs";
import * as path from "path";
import type { Plugin, Loader } from "esbuild";

interface FlagInjectorOptions {
  flagsDir?: string;
}

/**
 * tsup/esbuild 插件，用于在构建 tags 文件时自动注入 flag SVG 内容
 *
 * 功能：
 * 1. 检测正在构建的文件是否在 tags 目录下
 * 2. 解析文件中的 code 值
 * 3. 读取对应的 flags/<code>.svg 文件内容
 * 4. 将 SVG 内容作为字符串注入到导出对象的 flag 字段中
 * 5. 自动修复源文件中缺少分号的 import type 语句
 * 6. 跳过 index.ts 文件（仅作为导入入口）
 */
export function flagInjectorPlugin(options: FlagInjectorOptions = {}): Plugin {
  const flagsDir = options.flagsDir || path.join(process.cwd(), "src", "flags");

  // 统计变量
  let injectedCount = 0;
  let skippedCount = 0;
  let totalProcessed = 0;

  return {
    name: "flag-injector",

    setup(build) {
      build.onEnd(() => {
        if (injectedCount > 0) {
          console.log(`\n[flag-injector] 📊 统计: 总共处理 ${totalProcessed} 个文件，注入 ${injectedCount} 个 flag，跳过 ${skippedCount} 个（包括 index.ts）`);
        }
      });

      build.onLoad({ filter: /\.ts$/ }, (args) => {
        const filePath = args.path;

        // 只处理 tags 目录下的文件
        if (!filePath.includes(`${path.sep}tags${path.sep}`)) {
          return undefined;
        }

        // 跳过 index.ts 文件（仅作为导入入口，不注入 flag）
        if (filePath.endsWith(`${path.sep}index.ts`) || filePath.endsWith(`${path.sep}index.mts`)) {
          return undefined;
        }

        totalProcessed++;

        let sourceCode = fs.readFileSync(filePath, "utf-8");

        // 修复缺少分号的 import type 语句
        sourceCode = sourceCode.replace(
          /^(import type \{[^}]+\} from "[^"]+")(;?\s*)$/m,
          "$1;$2"
        );

        // 提取 code 值
        const codeMatch = sourceCode.match(/"code"\s*:\s*"([^"]+)"/);
        if (!codeMatch) {
          skippedCount++;
          return undefined;
        }

        const codeValue = codeMatch[1];

        // 检查 flag 文件
        const flagFilePath = path.join(flagsDir, `${codeValue}.svg`);
        if (!fs.existsSync(flagFilePath)) {
          skippedCount++;
          return undefined;
        }

        // 读取并注入 SVG
        const svgContent = fs.readFileSync(flagFilePath, "utf-8");
        const svgStringLiteral = JSON.stringify(svgContent);

        // 在 nativeName 后添加 flag 字段
        const modifiedCode = sourceCode.replace(
          /("nativeName"\s*:\s*"[^"]+")(\};?)/,
          `$1,flag:${svgStringLiteral}$2`
        );

        injectedCount++;

        // 返回修改后的内容
        return {
          contents: modifiedCode,
          loader: "ts" as Loader,
        };
      });
    },
  };
}

export default flagInjectorPlugin;
