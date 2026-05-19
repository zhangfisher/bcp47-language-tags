import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const TAGS_DIR = join(__dirname, "../src/tags");

// 各语言下 ru-UA 和 ru-KZ 的本地化名称
const localizations: Record<string, { ua: string; kz: string }> = {
  "zh-CN": { ua: "俄语(乌克兰)", kz: "俄语(哈萨克斯坦)" },
  "en-US": { ua: "Russian (Ukraine)", kz: "Russian (Kazakhstan)" },
  "ja-JP": { ua: "ロシア語（ウクライナ）", kz: "ロシア語（カザフスタン）" },
  "ko-KR": { ua: "러시아어(우크라이나)", kz: "러시아어(카자흐스탄)" },
  "ar-EG": { ua: "الروسية (أوكرانيا)", kz: "الروسية (كازاخستان)" },
  "es-ES": { ua: "Ruso (Ucrania)", kz: "Ruso (Kazajistán)" },
  "fr-FR": { ua: "Russe (Ukraine)", kz: "Russe (Kazakhstan)" },
  "de-DE": { ua: "Russisch (Ukraine)", kz: "Russisch (Kasachstan)" },
  "it-IT": { ua: "Russo (Ucraina)", kz: "Russo (Kazakistan)" },
  "pt-PT": { ua: "Russo (Ucrânia)", kz: "Russo (Cazaquistão)" },
  "ru-RU": { ua: "Русский (Украина)", kz: "Русский (Казахстан)" },
  "nl-NL": { ua: "Russisch (Oekraïne)", kz: "Russisch (Kazachstan)" },
  "pl-PL": { ua: "Rosyjski (Ukraina)", kz: "Rosyjski (Kazachstan)" },
  "cs-CZ": { ua: "Ruština (Ukrajina)", kz: "Ruština (Kazachstán)" },
  "da-DK": { ua: "Russisk (Ukraine)", kz: "Russisk (Kazakhstan)" },
  "fi-FI": { ua: "Venäjä (Ukraina)", kz: "Venäjä (Kazakstan)" },
  "sv-SE": { ua: "Ryska (Ukraina)", kz: "Ryska (Kazakstan)" },
  "tr-TR": { ua: "Rusça (Ukrayna)", kz: "Rusça (Kazakistan)" },
  "vi-VN": { ua: "Tiếng Nga (Ukraina)", kz: "Tiếng Nga (Kazakhstan)" },
  "el-GR": { ua: "Ρωσικά (Ουκρανία)", kz: "Ρωσικά (Καζακστάν)" },
  "hi-IN": { ua: "रूसी (यूक्रेन)", kz: "रूसी (कजाकस्तान)" },
  "th-TH": { ua: "รัสเซีย (ยูเครน)", kz: "รัสเซีย (คาซัคสถาน)" },
};

const nativeNames = {
  ua: "Русский (Украина)",
  kz: "Русский (Казахстан)",
};

function generateTagFile(tag: string, name: string, nativeName: string): string {
  const varName = tag.replace(/-/g, "");
  return `import type { BCP47LanguageTag } from "../../types"
export const ${varName}: BCP47LanguageTag = ${JSON.stringify({ tag, name, nativeName })};
`;
}

function main() {
  const dirs = Object.keys(localizations);
  console.log(`Adding ru-UA and ru-KZ to ${dirs.length} language directories\n`);

  for (const dir of dirs) {
    const { ua, kz } = localizations[dir];

    const uaPath = join(TAGS_DIR, dir, "ru-UA.ts");
    const kzPath = join(TAGS_DIR, dir, "ru-KZ.ts");

    writeFileSync(uaPath, generateTagFile("ru-UA", ua, nativeNames.ua), "utf-8");
    writeFileSync(kzPath, generateTagFile("ru-KZ", kz, nativeNames.kz), "utf-8");

    console.log(`✓ ${dir}`);
  }

  console.log("\nDone! Please run 'bun run scripts/generate-index.ts' to update indexes.");
}

main();
