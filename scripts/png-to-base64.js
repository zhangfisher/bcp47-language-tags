import { glob } from "glob";
import { writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";

const SOURCE_DIR = "src/flags/png/32x24";

async function convertPngToDataUrl() {
  const pngFiles = await glob(`${SOURCE_DIR}/*.png`);

  console.log(`找到 ${pngFiles.length} 个 PNG 文件`);

  for (const pngPath of pngFiles) {
    try {
      const dataUrl = await new Bun.Image(pngPath).dataurl();

      const dataFilePath = pngPath.replace(/\.png$/, ".data");
      await writeFile(dataFilePath, dataUrl);

      console.log(`✓ ${pngPath} -> ${dataFilePath}`);
    } catch (err) {
      console.error(`✗ 处理 ${pngPath} 失败:`, err.message);
    }
  }

  console.log("完成!");
}

convertPngToDataUrl();
