# bcp47-language-tags

[![npm version](https://badge.fury.io/js/bcp47-language-tags.svg)](https://www.npmjs.com/package/bcp47-language-tags)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[中文](./README_CN.md) | English

Complete list of BCP-47 language tags with TypeScript type definitions, translations, and SVG flag assets.

## Features

- 🌍 **180+ Language Tags** - Comprehensive coverage of BCP-47 standard language tags
- 🌐 **Multi-language Translations** - Localized language names in 12 languages
- 🏳️ **SVG Flag Assets** - Built-in SVG flags for all supported languages
- 🎯 **TypeScript Support** - Full type definitions for type-safe development
- 🗺️ **Mapper Support** - Convert BCP-47 tags to ISO 639-1/2/3 and platform-specific codes
- ⚡ **Tree-shakeable** - Import only what you need

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

## Usage

### Language Tags List

Import language tags with localized names:

```typescript
import { tags } from 'bcp47-language-tags/en';

for (let tag of tags) {
  console.log(tag);
}
// Output:
//   {"tag": "zh-CN", "name": "Chinese (Simplified)", "nativeName": "简体中文", "primary": true}
//   {"tag": "zh-TW", "name": "Chinese (Traditional - Taiwan)", "nativeName": "繁體中文 (臺灣)"}
//   {"tag": "en-US", "name": "English (United States)", "nativeName": "English (United States)", "primary": true}
//   {"tag": "es-ES", "name": "Spanish (Spain)", "nativeName": "Español (España)", "primary": true}
//   ...
```

Import with Chinese translations:

```typescript
import { tags } from 'bcp47-language-tags/zh';

for (let tag of tags) {
  console.log(tag);
}
// Output:
//   {"tag": "zh-CN", "name": "简体中文", "nativeName": "简体中文", "primary": true}
//   {"tag": "zh-TW", "name": "繁体中文（台湾）", "nativeName": "繁體中文 (臺灣)"}
//   {"tag": "en-US", "name": "英语（美国）", "nativeName": "English (United States)", "primary": true}
```

**Supported Languages:**

```typescript
import { tags } from "bcp47-language-tags/zh"   // Chinese
import { tags } from "bcp47-language-tags/en"   // English
import { tags } from "bcp47-language-tags/ar"   // Arabic
import { tags } from "bcp47-language-tags/cs"   // Czech
import { tags } from "bcp47-language-tags/da"   // Danish
import { tags } from "bcp47-language-tags/de"   // German
import { tags } from "bcp47-language-tags/el"   // Greek
import { tags } from "bcp47-language-tags/es"   // Spanish
import { tags } from "bcp47-language-tags/fi"   // Finnish
import { tags } from "bcp47-language-tags/fr"   // French
import { tags } from "bcp47-language-tags/hi"   // Hindi
import { tags } from "bcp47-language-tags/it"   // Italian
import { tags } from "bcp47-language-tags/jp"   // Japanese
import { tags } from "bcp47-language-tags/ko"   // Korean
import { tags } from "bcp47-language-tags/nl"   // Dutch
import { tags } from "bcp47-language-tags/pl"   // Polish
import { tags } from "bcp47-language-tags/pt"   // Portuguese
import { tags } from "bcp47-language-tags/ru"   // Russian
import { tags } from "bcp47-language-tags/sv"   // Swedish
import { tags } from "bcp47-language-tags/th"   // Thai
import { tags } from "bcp47-language-tags/tr"   // Turkish
import { tags } from "bcp47-language-tags/vi"   // Vietnamese
```

### Primary Languages

This library defines **22 of the most common languages** as Primary Languages. Each primary language has multiple regional variants, with one variant marked as `primary: true` to represent the default/most commonly used variant for that language.

**List of Primary Languages:**

| Language | Default Variant | Description |
|----------|-----------------|-------------|
| Chinese | `zh-CN` | Simplified Chinese (Mainland China) |
| English | `en-US` | English (United States) |
| Japanese | `ja-JP` | Japanese (Japan) |
| Korean | `ko-KR` | Korean (South Korea) |
| Russian | `ru-RU` | Russian (Russia) |
| Spanish | `es-ES` | Spanish (Spain) |
| French | `fr-FR` | French (France) |
| German | `de-DE` | German (Germany) |
| Italian | `it-IT` | Italian (Italy) |
| Arabic | `ar-EG` | Arabic (Egypt) |
| Portuguese | `pt-PT` | Portuguese (Portugal) |
| Dutch | `nl-NL` | Dutch (Netherlands) |

**Regional Variants Example (Chinese):**

| Variant | Tag | primary |
|---------|-----|---------|
| Simplified Chinese | `zh-CN` | `true` ✅ |
| Traditional Chinese (Taiwan) | `zh-TW` | `false` |
| Traditional Chinese (Hong Kong) | `zh-HK` | `false` |
| Traditional Chinese (Macau) | `zh-MO` | `false` |

**Why Default Variants Matter:**

- **Default Selection**: When users specify only the language code (e.g., "zh"), the default variant is returned (zh-CN)
- **UI Simplification**: Application language selectors typically prioritize displaying default variants
- **Fallback Logic**: When a specific regional variant is unavailable, the default variant serves as a fallback

```typescript
import { getTag, getPrimaryTags } from 'bcp47-language-tags/en';

// Returns the default variant for the language
getTag('zh');     // { tag: "zh-CN", name: "Chinese (Simplified)", primary: true }
getTag('en');     // { tag: "en-US", name: "English (United States)", primary: true }

// Get all primary languages' default variants
const primaryTags = getPrimaryTags(); // Returns array of 12 default variants
```

### All Language Tags

Get all language tags organized by primary language:

```typescript
import allTags from 'bcp47-language-tags';

// Access tags for a specific primary language
const chineseTags = allTags['zh-CN'];
const englishTags = allTags['en-US'];
```

### Primary Language Flags

Get SVG data for primary language flags:

```typescript
import flags from 'bcp47-language-tags/flags';

// Access flag SVG data
console.log(flags.zhCN);
// <svg xmlns="http://www.w3.org/2000/svg" ...>
//   <path fill="#de2910" d="..."/>
//   ...
// </svg>

// Available flags: zhCN, enUS, jaJP, koKR, ruRU, esES, frFR, deDE, itIT, arEG, ptPT, nlNL
```

### Non-Primary Language Flags

Import SVG flag files directly (works with Vite and other bundlers that support SVG imports):

```typescript
import zhCN from 'bcp47-language-tags/flags/zh-CN.svg';
import enUS from 'bcp47-language-tags/flags/en-US.svg';
import esES from 'bcp47-language-tags/flags/es-ES.svg';
```

> **Note:** Direct SVG import requires build tools with SVG processing support (e.g., Vite with proper plugins).

### Mapper

Convert BCP-47 language tags to other standards:

```typescript
import {
  baidu,
  youdao,
  tencent,
  xunfei,
  ISO6391,
  ISO6392,
  ISO6393
} from 'bcp47-language-tags/mapper';

// Convert to platform-specific codes
baidu['zh-CN'];     // 'zh'
youdao['zh-CN'];    // 'zh'
tencent['zh-CN'];   // 'zh'
xunfei['zh-CN'];    // 'zh'

// Convert to ISO 639 standards
ISO6391['zh-CN'];   // 'zh'
ISO6392['zh-CN'];   // 'zho'
ISO6393['zh-CN'];   // 'zho'
```

## API

### getTag(tag: string): BCP47LanguageTag | undefined

Get a specific language tag. Returns the primary tag for a language if no country code is specified.

```typescript
import { getTag } from 'bcp47-language-tags/en';

// Get specific tag
getTag('zh-CN');  // { tag: "zh-CN", name: "Chinese (Simplified)", nativeName: "简体中文", primary: true }
getTag('en-US');  // { tag: "en-US", name: "English (United States)", nativeName: "English (United States)", primary: true }

// Get primary tag for language
getTag('zh');     // Returns primary Chinese tag (zh-CN)
getTag('en');     // Returns primary English tag (en-US)
```

### getTags(language?: string | string[]): BCP47LanguageTag[]

Get all tags or filter by language code(s).

```typescript
import { getTags } from 'bcp47-language-tags/en';

// Get all tags
getTags();

// Filter by language
getTags('zh');    // All Chinese language variants
getTags(['zh', 'en']);  // Chinese and English variants
getTags(['zh-CN', 'en-US']);  // Specific tags
```

### getPrimaryTags(): BCP47LanguageTag[]

Get all primary language tags (one per language).

```typescript
import { getPrimaryTags } from 'bcp47-language-tags/en';

getPrimaryTags();
// [
//   { tag: "zh-CN", name: "Chinese (Simplified)", nativeName: "简体中文", primary: true },
//   { tag: "en-US", name: "English (United States)", nativeName: "English (United States)", primary: true },
//   { tag: "es-ES", name: "Spanish (Spain)", nativeName: "Español (España)", primary: true },
//   { tag: "de-DE", name: "German (Germany)", nativeName: "Deutsch (Deutschland)", primary: true },
//   ...
// ]
```

## TypeScript Types

```typescript
import type {
  BCP47LanguageTag,
  BCP47LanguageTagName,
  BCP47LanguageTags,
  PrimaryLanguageTags
} from 'bcp47-language-tags';

// Language tag structure
type BCP47LanguageTag = {
  tag: string;        // BCP-47 language tag (e.g., "zh-CN")
  name: string;       // Localized language name
  nativeName: string; // Native language name
  primary: boolean;   // Whether this is the primary tag for the language
};

// All supported language tag names
type BCP47LanguageTagName =
  | "zh-CN" | "zh-TW" | "zh-HK" | "zh-MO" | "zh-SG" | "zh-CHS" | "zh-CHT"
  | "en-US" | "en-GB" | "en-CA" | "en-AU" | "en-IN" | "en-ZA" | "en-NZ"
  | "es-ES" | "es-MX" | "es-AR" | "es-CO" | "es-PE" | "es-VE" | "es-CL"
  | "ar-EG" | "ar-SA" | "ar-DZ" | "ar-MA" | "ar-IQ" | "ar-SD" | "ar-YE"
  | "ja-JP" | "ko-KR" | "ru-RU" | "de-DE" | "fr-FR" | "it-IT" | "pt-PT" | "pt-BR"
  | "nl-NL" | "tr-TR" | "th-TH" | "el-GR" | "cs-CZ" | "sv-SE" | "hu-HU"
  | "fi-FI" | "da-DK" | "nb-NO" | "nn-NO" | "he-IL" | "id-ID" | "ms-MY"
  | "ro-RO" | "bg-BG" | "uk-UA" | "sk-SK" | "sl-SI" | "hr-HR" | "ca-ES"
  | "lt-LT" | "lv-LV" | "et-EE" | "sq-AL" | "mk-MK" | "be-BY" | "is-IS"
  | "gl-ES" | "eu-ES" | "af-ZA" | "sw-KE" | "ta-IN" | "te-IN" | "kn-IN"
  | "mr-IN" | "gu-IN" | "pa-IN" | "kok-IN" | "sa-IN" | "ur-PK" | "fa-IR"
  | "ka-GE" | "pl-PL" | "vi-VN" | "bn-BD" | "en-NG" | "am-ET" | "my-MM"
  | "en-UG" | "fr-CD";

// Primary language tags
type PrimaryLanguageTags =
  | "zh-CN" | "en-US" | "ja-JP" | "ko-KR" | "ru-RU"
  | "es-ES" | "fr-FR" | "de-DE" | "it-IT" | "ar-EG"
  | "pt-PT" | "nl-NL";

// Tags record type
type BCP47LanguageTags = Record<BCP47LanguageTagName, BCP47LanguageTag>;
```

## License

[MIT](LICENSE)

## Related Projects

- [VoerkaI18n](https://zhangfisher.github.io/voerka-i18n/) - Internationalization solution for React/Vue/Nodejs/Solidjs
- [AutoStore](https://zhangfisher.github.io/autostore/) - React state management library
- [Logsets](https://zhangfisher.github.io/logsets/) - Terminal interface development enhancement library
- [VoerkaLogger](https://zhangfisher.github.io/voerkalogger/) - Log output library
- [FlexDecorators](https://zhangfisher.github.io/flex-decorators/) - Decorator development tools
- [FlexState](https://zhangfisher.github.io/flexstate/) - Finite state machine library
- [FlexTools](https://zhangfisher.github.io/flex-tools/) - Universal function utility library
- [FlexStyled](https://zhangfisher.github.io/flexstyled/) - CSS-IN-JS library
