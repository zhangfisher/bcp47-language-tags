# bcp47-language-tags

[![npm version](https://badge.fury.io/js/bcp47-language-tags.svg)](https://www.npmjs.org/package/bcp47-language-tags)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[中文](./README_CN.md) | [English](./README.md)

Complete list of BCP-47 standard language tags with TypeScript type definitions, multilingual translations, and SVG/PNG flag resources.

## Features

- 🌍 **180+ Language Tags** - Comprehensive coverage of BCP-47 standard language tags
- 🌐 **Multilingual Translations** - Localized language names in 22 languages
- 🏳️ **Flag Resources** - Built-in SVG and PNG flags for all supported languages
- 🎯 **TypeScript Support** - Complete type definitions for type-safe development
- 🗺️ **Mapper Support** - Convert BCP-47 tags to ISO 639-1/2/3 and platform-specific codes
- ⚡ **Tree-shakeable** - Import only what you need with full Tree-shaking support

## Project Structure

```
src/
├── flags/              # Flag resources directory
│   ├── dataurl/       # Base64 encoded flag data
│   ├── png/           # PNG format flags (32x32)
│   └── svg/           # SVG format flags
├── mapper/            # Language code mappers
│   ├── baidu.ts       # Baidu Translate API mapping
│   ├── youdao.ts      # Youdao Translate API mapping
│   ├── tencent.ts     # Tencent Translate API mapping
│   ├── xunfei.ts      # Xunfei Translate API mapping
│   ├── iso639-1.ts    # ISO 639-1 standard mapping
│   ├── iso639-2.ts    # ISO 639-2 standard mapping
│   └── iso639-3.ts    # ISO 639-3 standard mapping
├── tags/              # Multilingual tag data
│   ├── zh-CN/         # Chinese localization data
│   ├── en-US/         # English localization data
│   ├── ar-EG/         # Arabic localization data
│   └── ...            # Other 22 languages
├── utils/             # Utility functions
│   └── createTagUtils.ts  # Tag utility function generator
├── types.ts           # TypeScript type definitions
└── index.ts           # Main entry file
```

## Installation

```bash
npm install bcp47-language-tags
# or
yarn add bcp47-language-tags
# or
bun add bcp47-language-tags
# or
pnpm add bcp47-language-tags
```

## Usage Guide

### Import Primary Language Tags

Import commonly used language tags with localized names:

```typescript
import { tags } from "bcp47-language-tags/en-US";

for (const tag of tags) {
  console.log(tag);
}
// Output:
// [
//   { code: 'zh-CN', name: 'Simplified Chinese', nativeName: '简体中文' },
//   { code: 'zh-TW', name: 'Traditional Chinese (Taiwan)', nativeName: '繁體中文(中國臺灣)' }
//   { code: 'ar-EG', name: 'Arabic (Egypt)', nativeName: 'العربية (مصر)' },
//   { code: 'de-DE', name: 'German (Germany)', nativeName: 'Deutsch (Deutschland)' },
//   { code: 'en-US', name: 'English (United States)',nativeName: 'English (United States)'},
//   { code: 'es-ES', name: 'Spanish (Spain)', nativeName: 'Español (España)' },
//   { code: 'fr-FR', name: 'French (France)', nativeName: 'Français (France)' },
//   { code: 'it-IT', name: 'Italian (Italy)', nativeName: 'Italiano (Italia)' },
//   { code: 'ja-JP', name: 'Japanese (Japan)', nativeName: '日本語 (日本)' },
//   { code: 'ko-KR', name: 'Korean (South Korea)', nativeName: '한국어 (대한민국)' },
//   { code: 'ru-RU', name: 'Russian (Russia)', nativeName: 'Русский (Россия)' }
// ]
```

**Notes:**
- 11 commonly used language tags are imported by default
- `code` is the BCP-47 language tag code
- `name` is the localized language name based on the imported module
- `nativeName` is the language in its native writing form

### Import Specific Language Data

Choose different localized data based on your needs:

```typescript
// Import Chinese language data
import { tags } from "bcp47-language-tags/zh-CN";
// Import English language data
import { tags } from "bcp47-language-tags/en-US";
```

**Supported export languages:**

| Language | Import Path |
|----------|-------------|
| Simplified Chinese | `bcp47-language-tags/zh-CN` |
| English (United States) | `bcp47-language-tags/en-US` |
| Japanese | `bcp47-language-tags/ja-JP` |
| Korean | `bcp47-language-tags/ko-KR` |
| Russian | `bcp47-language-tags/ru-RU` |
| Spanish | `bcp47-language-tags/es-ES` |
| French | `bcp47-language-tags/fr-FR` |
| German | `bcp47-language-tags/de-DE` |
| Italian | `bcp47-language-tags/it-IT` |
| Arabic | `bcp47-language-tags/ar-EG` |
| Portuguese | `bcp47-language-tags/pt-PT` |
| Dutch | `bcp47-language-tags/nl-NL` |
| Polish | `bcp47-language-tags/pl-PL` |
| Swedish | `bcp47-language-tags/sv-SE` |
| Turkish | `bcp47-language-tags/tr-TR` |
| Thai | `bcp47-language-tags/th-TH` |
| Vietnamese | `bcp47-language-tags/vi-VN` |
| Hindi | `bcp47-language-tags/hi-IN` |
| Danish | `bcp47-language-tags/da-DK` |
| Greek | `bcp47-language-tags/el-GR` |
| Finnish | `bcp47-language-tags/fi-FI` |
| Czech | `bcp47-language-tags/cs-CZ` |

### Extending Language Tags

By default only 11 common languages are included. To add other language tags:

```typescript
// Import default tags and utility functions
import { tags, addTag } from 'bcp47-language-tags/en-US';

// Import extended language tags
import { enGB } from 'bcp47-language-tags/en-US/en-GB';
import { ptBR } from 'bcp47-language-tags/en-US/pt-BR';

// Add to tag list
addTag(enGB);
addTag(ptBR);

console.log(tags);
// Now includes the newly added language tags
```

**Extend TypeScript type declarations:**

```typescript
declare module "bcp47-language-tags" {
  interface PrimaryLanguageTags {
    "en-GB": BCP47LanguageTag;
    "pt-BR": BCP47LanguageTag;
  }
}
```

### Import Language Tags with Flags

If you need flag data:

```typescript
import { tags } from "bcp47-language-tags/with-flags/en-US";

for (const tag of tags) {
  console.log(tag);
}
// Output:
// [
//   { code: 'zh-CN', name: 'Simplified Chinese', nativeName: '简体中文',
//       flag:"data:image/png;base64,iVBORw0KGgo......" },
//   ...
// ]
```

**Notes:**
- Import from `bcp47-language-tags/with-flags/<tag>` for PNG format flag dataurl
- PNG flag size is 32×24 pixels
- PNG format recommended for most scenarios, reasonable file size (1-2KB)

### Flag Resource Usage

**Method 1: Import Flag Collection (Primary Languages Only)**

```typescript
import flags from "bcp47-language-tags/flags";

console.log(flags);
// {
//     zhCN: "data:image/png;base64,...",
//     zhTW: "data:image/png;base64,...",
//     enUS: "data:image/png;base64,...",
//     ...
// }
```

**Method 2: Direct SVG Flag Import**

```typescript
import zhCN from "bcp47-language-tags/flags/svg/zh-CN?raw";
import enUS from "bcp47-language-tags/flags/svg/en-US?raw";
```

**Method 3: Direct PNG Flag Import**

```typescript
import zhCN from "bcp47-language-tags/flags/png/zh-CN?raw";
import enUS from "bcp47-language-tags/flags/png/en-US?raw";
```

**Notes:**
- PNG image size is 32×32 pixels
- SVG import requires build tools with SVG support (like Vite)

### Mapper Usage

Convert BCP-47 language tags to other standards:

```typescript
import {
  baidu,
  youdao,
  tencent,
  xunfei,
  ISO6391,
  ISO6392,
  ISO6393,
} from "bcp47-language-tags/mapper";

// Convert to platform-specific codes
baidu["zh-CN"];    // 'zh'
youdao["zh-CN"];   // 'zh'
tencent["zh-CN"];  // 'zh'
xunfei["zh-CN"];   // 'zh'

// Convert to ISO 639 standards
ISO6391["zh-CN"];  // 'zh'
ISO6392["zh-CN"];  // 'zho'
ISO6393["zh-CN"];  // 'zho'
```

## API Reference

### getTag(code: string): BCP47LanguageTag | undefined

Get a specific language tag.

```typescript
import { getTag } from "bcp47-language-tags/en-US";

getTag("zh-CN"); // { code: "zh-CN", name: "Simplified Chinese", nativeName: "简体中文" }
getTag("en-US"); // { code: "en-US", name: "English (United States)", nativeName: "English (United States)" }
```

### getTags(language?: string | string[]): BCP47LanguageTag[]

Get all tags or filter by language code.

```typescript
import { getTags } from "bcp47-language-tags/en-US";

// Get all tags
getTags();

// Filter by language
getTags("zh");           // All Chinese variants
getTags(["zh", "en"]);   // Chinese and English variants
getTags(["zh-CN", "en-US"]); // Specific tags
```

### addTag(tag: BCP47LanguageTag): void

Add a new language tag to the tag list. If the tag already exists, it will not be added again.

```typescript
import { tags, addTag } from "bcp47-language-tags/en-US";

// Add a single language tag
addTag({
  code: "en-GB",
  name: "English (United Kingdom)",
  nativeName: "English (United Kingdom)",
});
```

### deleteTag(language: string | string[]): void

Delete specified language tags from the tag list.

```typescript
import { tags, deleteTag } from "bcp47-language-tags/en-US";

// Delete all variants of a single language
deleteTag("zh");  // Delete all Chinese tags

// Delete all variants of multiple languages
deleteTag(["zh", "en"]);  // Delete all Chinese and English tags
```

## TypeScript Types

### Import Types

```typescript
import type {
  BCP47LanguageTag,
  BCP47LanguageTagName,
  BCP47LanguageTags,
} from "bcp47-language-tags";
```

### BCP47LanguageTag

The core type representing a single language tag and its localization information.

```typescript
type BCP47LanguageTag<T = string> = {
  code: T;          // BCP-47 language tag code (e.g., "zh-CN", "en-US")
  name: string;     // Localized language name, depends on the imported language module
  nativeName: string; // Native name of the language (in its own writing form)
  flag?: string;    // Optional flag data (base64 encoded data URL)
};
```

### BCP47LanguageTagName

Union type of all supported language tag names.

```typescript
type BCP47LanguageTagName =
  | "zh-CN" | "zh-TW" | "zh-HK" | "zh-MO" | "zh-SG" | "zh-CHS" | "zh-CHT"
  | "en-US" | "en-GB" | "en-CA" | "en-AU" | "en-IN" | "en-ZA" | "en-NZ"
  | "en-IE" | "en-PH" | "en-ZW" | "en-BZ" | "en-CB" | "en-JM" | "en-TT"
  | "hi-IN" | "es-ES" | "es-MX" | "es-AR" | "es-CO" | "es-PE" | "es-VE"
  | "es-CL" | "es-EC" | "es-GT" | "es-CU" | "es-BO" | "es-DO" | "es-HN"
  | "es-PY" | "es-SV" | "es-NI" | "es-PR" | "es-UY" | "es-PA" | "es-CR"
  | "ar-EG" | "ar-SA" | "ar-DZ" | "ar-MA" | "ar-IQ" | "ar-SD" | "ar-YE"
  | "ar-SY" | "ar-TN" | "ar-LY" | "ar-JO" | "ar-LB" | "ar-KW" | "ar-AE"
  | "ar-BH" | "ar-QA" | "ar-OM" | "pt-BR" | "pt-PT" | "ru-RU" | "ru-UA"
  | "ru-KZ" | "ja-JP" | "de-DE" | "de-AT" | "de-CH" | "fr-FR" | "fr-CA"
  | "fr-BE" | "fr-CH" | "fr-LU" | "fr-MC" | "ko-KR" | "ko-KP" | "it-IT"
  | "it-CH" | "tr-TR" | "th-TH" | "el-GR" | "cs-CZ" | "sv-SE" | "sv-FI"
  | "hu-HU" | "fi-FI" | "da-DK" | "nb-NO" | "nn-NO" | "he-IL" | "id-ID"
  | "ms-MY" | "ms-BN" | "ro-RO" | "bg-BG" | "uk-UA" | "sk-SK" | "sl-SI"
  | "hr-HR" | "ca-ES" | "lt-LT" | "lv-LV" | "et-EE" | "sq-AL" | "mk-MK"
  | "be-BY" | "is-IS" | "gl-ES" | "eu-ES" | "af-ZA" | "sw-KE" | "ta-IN"
  | "te-IN" | "kn-IN" | "mr-IN" | "gu-IN" | "pa-IN" | "kok-IN" | "sa-IN"
  | "ur-PK" | "fa-IR" | "syr-SY" | "div-MV" | "ka-GE" | "nl-NL" | "pl-PL"
  | "vi-VN" | "bn-BD" | "en-NG" | "am-ET" | "my-MM" | "en-UG" | "fr-CD";
```

### BCP47LanguageTags

Type definition for language tag arrays.

```typescript
type BCP47LanguageTags = BCP47LanguageTag[];
```

### PrimaryLanguageTags

Interface type for primary language tags, defining mapping relationships for the 11 most commonly used language tags.

```typescript
interface PrimaryLanguageTags {
  "zh-CN": BCP47LanguageTag;
  "zh-TW": BCP47LanguageTag;
  "en-US": BCP47LanguageTag;
  "ru-RU": BCP47LanguageTag;
  "es-ES": BCP47LanguageTag;
  "fr-FR": BCP47LanguageTag;
  "de-DE": BCP47LanguageTag;
  "it-IT": BCP47LanguageTag;
  "ar-EG": BCP47LanguageTag;
  "ja-JP": BCP47LanguageTag;
  "ko-KR": BCP47LanguageTag;
}
```

### PrimaryLanguage

Union type of primary languages.

```typescript
type PrimaryLanguage = keyof PrimaryLanguageTags;
// Equivalent to:
// type PrimaryLanguage = "zh-CN" | "zh-TW" | "en-US" | "ru-RU" | "es-ES" |
//                       "fr-FR" | "de-DE" | "it-IT" | "ar-EG" | "ja-JP" | "ko-KR";
```

### PrimaryLanguageTagList

Primary language tag array type.

```typescript
type PrimaryLanguageTagList = BCP47LanguageTag<PrimaryLanguage>[];
```

## License

[MIT](LICENSE)

## Related Projects

- [VoerkaI18n](https://zhangfisher.github.io/voerka-i18n/) - React/Vue/Nodejs/Solidjs internationalization solution
- [AutoStore](https://zhangfisher.github.io/autostore/) - Reactive state management library
- [Logsets](https://zhangfisher.github.io/logsets/) - Terminal interface development enhancement library
- [VoerkaLogger](https://zhangfisher.github.io/voerkalogger/) - Log output library
- [FlexDecorators](https://zhangfisher.github.io/flex-decorators/) - Decorator development tool
- [FlexState](https://zhangfisher.github.io/flexstate/) - Finite state machine library
- [FlexTools](https://zhangfisher.github.io/flex-tools/) - General function utility library
- [FlexStyled](https://zhangfisher.github.io/flexstyled/) - CSS-IN-JS library
