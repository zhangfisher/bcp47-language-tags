# bcp47-language-tags

[![npm version](https://badge.fury.io/js/bcp47-language-tags.svg)](https://www.npmjs.com/package/bcp47-language-tags)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[中文](./README_CN.md) | [English](./README.md)

Complete list of BCP-47 standard language tags with TypeScript type definitions, multilingual translations, and SVG flag resources.

## Features

- 🌍 **180+ Language Tags** - Comprehensive coverage of BCP-47 standard language tags
- 🌐 **Multilingual Translations** - Localized language names in 22 languages
- 🏳️ **SVG Flag Resources** - Built-in SVG flags for all supported languages
- 🎯 **TypeScript Support** - Complete type definitions for type-safe development
- 🗺️ **Mapper Support** - Convert BCP-47 tags to ISO 639-1/2/3 and platform-specific codes
- ⚡ **Tree-shakeable** - Import only what you need with full Tree-shaking support

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

## Guide

### Import Primary Language Tags

Import primary used language tags with localized names:

```typescript
import { tags } from 'bcp47-language-tags/en-US';

for (const tag of tags) {
  console.log(tag);
}
// Output:
// [
//   { tag: 'zh-CN', name: 'Simplified Chinese', nativeName: '简体中文' },
//   { tag: 'zh-TW', name: 'Traditional Chinese (Taiwan)', nativeName: '繁體中文(中國臺灣)' }
//   { tag: 'ar-EG', name: 'Arabic (Egypt)', nativeName: 'العربية (مصر)' },
//   { tag: 'de-DE', name: 'German (Germany)', nativeName: 'Deutsch (Deutschland)' },
//   { tag: 'en-US', name: 'English (United States)', nativeName: 'English (United States)'},
//   { tag: 'es-ES', name: 'Spanish (Spain)', nativeName: 'Español (España)' },
//   { tag: 'fr-FR', name: 'French (France)', nativeName: 'Français (France)' },
//   { tag: 'it-IT', name: 'Italian (Italy)', nativeName: 'Italiano (Italia)' },
//   { tag: 'ja-JP', name: 'Japanese (Japan)', nativeName: '日本語 (日本)' },
//   { tag: 'ko-KR', name: 'Korean (South Korea)', nativeName: '한국어 (대한민국)' },
//   { tag: 'ru-RU', name: 'Russian (Russia)', nativeName: 'Русский (Россия)' }  
// ]
```
- For package size considerations, only `11` primary language tags are imported by default.
- `name` is the localized language name based on the imported module. For example, if importing from `bcp47-language-tags/en-US`, the names will be in English.
- `nativeName` is always in the native writing form of the language, making it easy for native speakers to identify

### Import Specific Language Data

In the example above, we used `import { tags } from 'bcp47-language-tags/en-US'`, which means the `name` field in `tags` is in English.
If you prefer another language, you can use `import { tags } from 'bcp47-language-tags/<language tag>'`

```typescript
// Import Chinese language data
import { tags } from 'bcp47-language-tags/zh-CN';
// Import English language data
import { tags } from 'bcp47-language-tags/en-US';
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

### Extending Languages

For package size considerations, only `11` primary language tags are imported by default.

If the language you want to use is not among the `11` primary language tags, you can extend it in the following ways:

```ts
// tags contains the default 11 language tags
import { tags, addTag } from 'bcp47-language-tags/en-US';
// tags output:
// [
//   { tag: 'zh-CN', name: 'Simplified Chinese', nativeName: '简体中文' },
//   { tag: 'zh-TW', name: 'Traditional Chinese (Taiwan)', nativeName: '繁體中文(中國臺灣)' }
//   { tag: 'ar-EG', name: 'Arabic (Egypt)', nativeName: 'العربية (مصر)' },
//   { tag: 'de-DE', name: 'German (Germany)', nativeName: 'Deutsch (Deutschland)' },
//   { tag: 'en-US', name: 'English (United States)', nativeName: 'English (United States)'},
//   { tag: 'es-ES', name: 'Spanish (Spain)', nativeName: 'Español (España)' },
//   { tag: 'fr-FR', name: 'French (France)', nativeName: 'Français (France)' },
//   { tag: 'it-IT', name: 'Italian (Italy)', nativeName: 'Italiano (Italia)' },
//   { tag: 'ja-JP', name: 'Japanese (Japan)', nativeName: '日本語 (日本)' },
//   { tag: 'ko-KR', name: 'Korean (South Korea)', nativeName: '한국어 (대한민국)' },
//   { tag: 'ru-RU', name: 'Russian (Russia)', nativeName: 'Русский (Россия)' }  
// ]
// Import English (UK)
import { enGB } from 'bcp47-language-tags/en-US/en-GB'
// Import Portuguese (Brazil)
import { ptBR } from 'bcp47-language-tags/en-US/pt-BR'
// Add to tags
addTag(enGB)
addTag(ptBR)

console.log(tags)
// tags output:
// [
//   { tag: 'zh-CN', name: 'Simplified Chinese', nativeName: '简体中文' },
//   { tag: 'zh-TW', name: 'Traditional Chinese (Taiwan)', nativeName: '繁體中文(中國臺灣)' }
//   { tag: 'ar-EG', name: 'Arabic (Egypt)', nativeName: 'العربية (مصر)' },
//   { tag: 'de-DE', name: 'German (Germany)', nativeName: 'Deutsch (Deutschland)' },
//   { tag: 'en-US', name: 'English (United States)', nativeName: 'English (United States)'},
//   { tag: 'es-ES', name: 'Spanish (Spain)', nativeName: 'Español (España)' },
//   { tag: 'fr-FR', name: 'French (France)', nativeName: 'Français (France)' },
//   { tag: 'it-IT', name: 'Italian (Italy)', nativeName: 'Italiano (Italia)' },
//   { tag: 'ja-JP', name: 'Japanese (Japan)', nativeName: '日本語 (日本)' },
//   { tag: 'ko-KR', name: 'Korean (South Korea)', nativeName: '한국어 (대한민국)' },
//   { tag: 'ru-RU', name: 'Russian (Russia)', nativeName: 'Русский (Россия)' },
//   Added:
//   {"tag":"en-GB","name":"English (United Kingdom)","nativeName":"English (United Kingdom)"},
//   {"tag":"pt-BR","name":"Portuguese (Brazil)","nativeName":"Português (Brasil)"};
// ]


// Extend TypeScript types
declare module "bcp47-language-tags" {
   interface PrimaryLanguageTags{
      "en-GB": BCP47LanguageTag
      "pt-BR": BCP47LanguageTag
   }    
}
````

### Major Language Flags

Get SVG data for primary used major language flags:

```typescript
import flags from 'bcp47-language-tags/flags';

// Access flag SVG data
console.log(flags.zhCN);
// <svg xmlns="http://www.w3.org/2000/svg" ...>
//   <path fill="#de2910" d="..."/>
//   ...
// </svg>

// Available flags:
// Simplified Chinese, Traditional Chinese, US English, Russian, Spanish, French, German, Italian, Arabic (Egypt), Japanese, Korean
// zh-CN, zh-TW, en-US, ru-RU, es-ES, fr-FR, de-DE, it-IT, ar-EG, ja-JP, ko-KR,
```

### Other Language Flags

Directly import `SVG` flag files (requires build tools like `Vite` that support `SVG` import):

```typescript
import zhCN from 'bcp47-language-tags/flags/zh-CN.svg?raw';
import enUS from 'bcp47-language-tags/flags/en-US.svg?raw';
import esES from 'bcp47-language-tags/flags/es-ES.svg?raw';
```

> **Note:** Direct SVG import requires build tools with SVG support (such as Vite with appropriate plugins configured).

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

## BCP47LanguageTag Type Description

`BCP47LanguageTag` is the core data type of this library, representing a single language tag and its localization information.
 
| Field | Type | Description |
|------|------|-------------|
| `tag` | `string` | `BCP-47` language tag code, such as `zh-CN`, `en-US` |
| `name` | `string` | Localized language name, depends on the imported language module |
| `nativeName` | `string` | Native name of the language (in the language's own writing form) |

- The `nativeName` field stores the **native writing form** of the language, which is how users of that language see their language name. This is very important for building user-friendly language selectors.

**Why do we need nativeName?**

1. **User Recognition**: Let users quickly identify their own language
2. **Localization Experience**: Display native language names in the language switching interface
3. **Avoid Confusion**: Translations of some languages in different regions may not be accurate enough

**Actual Application Scenario:**

```typescript
// Suppose you are building a language selector for a multilingual application
import { tags } from 'bcp47-language-tags/en-US';

// Display in language selector
tags.map(tag => ({
  label: `${tag.nativeName} (${tag.name})`,  // "简体中文 (Simplified Chinese)"
  value: tag.tag
}));

// Options users see:
// - 简体中文 (Simplified Chinese)
// - English (English (United States))
// - 日本語 (Japanese)
// - 한국어 (Korean)
```

## API

### getTag(tag: string): BCP47LanguageTag | undefined

Get a specific language tag.

```typescript
import { getTag } from 'bcp47-language-tags/en-US';

// Get specific tag
getTag('zh-CN');  // { tag: "zh-CN", name: "Simplified Chinese", nativeName: "简体中文" }
getTag('en-US');  // { tag: "en-US", name: "English (United States)", nativeName: "English (United States)" }
```

### getTags(language?: string | string[]): BCP47LanguageTag[]

Get all tags or filter by language code.

```typescript
import { getTags } from 'bcp47-language-tags/en-US';

// Get all tags
getTags();

// Filter by language
getTags('zh');    // All Chinese variants
getTags(['zh', 'en']);  // Chinese and English variants
getTags(['zh-CN', 'en-US']);  // Specific tags
```

### addTag(tag: BCP47LanguageTag): void

Add a new language tag to the tag list. If the tag already exists, it will not be added again.

```typescript
import { tags, addTag } from 'bcp47-language-tags/en-US';

// Add a single language tag
addTag({
  tag: 'en-GB',
  name: 'English (United Kingdom)',
  nativeName: 'English (United Kingdom)'
});

// Tags that already exist will not be added again
addTag({
  tag: 'en-GB',
  name: 'English (United Kingdom)',
  nativeName: 'English (United Kingdom)'
});
```

### deleteTag(language: string | string[]): void

Delete tags for specified languages from the tag list.

```typescript
import { tags, deleteTag } from 'bcp47-language-tags/en-US';

// Delete all variants of a single language
deleteTag('zh');  // Delete all Chinese tags (zh-CN, zh-TW, etc.)

// Delete all variants of multiple languages
deleteTag(['zh', 'en']);  // Delete all Chinese and English tags
```

## TypeScript Types

This library provides complete TypeScript type definitions for type-safe development.

### Import Types

```typescript
import type {
  BCP47LanguageTag,
  BCP47LanguageTagName,
  BCP47LanguageTags
} from 'bcp47-language-tags';
```

### BCP47LanguageTag

The core type representing a single language tag and its localization information.

```typescript
type BCP47LanguageTag<T = string> = {
  tag: T;           // BCP-47 language tag code (such as "zh-CN", "en-US")
  name: string;     // Localized language name, depends on the imported language module
  nativeName: string; // Native name of the language (in the language's own writing form)
};
```

### BCP47LanguageTagName

Union type of all supported language tag names, providing complete type coverage.

```typescript
type BCP47LanguageTagName =
  | "zh-CN"     // Simplified Chinese
  | "zh-TW"     // Traditional Chinese (Taiwan)
  | "zh-HK"     // Traditional Chinese (Hong Kong)
  | "zh-MO"     // Traditional Chinese (Macau)
  | "zh-SG"     // Simplified Chinese (Singapore)
  | "zh-CHS"    // Simplified Chinese
  | "zh-CHT"    // Traditional Chinese
  | "en-US"     // English (United States)
  | "en-GB"     // English (United Kingdom)
  | "en-CA"     // English (Canada)
  | "en-AU"     // English (Australia)
  | "en-IN"     // English (India)
  | "en-ZA"     // English (South Africa)
  | "en-NZ"     // English (New Zealand)
  | "en-IE"     // English (Ireland)
  | "en-PH"     // English (Philippines)
  | "en-ZW"     // English (Zimbabwe)
  | "en-BZ"     // English (Belize)
  | "en-CB"     // English (Caribbean)
  | "en-JM"     // English (Jamaica)
  | "en-TT"     // English (Trinidad and Tobago)
  | "hi-IN"     // Hindi (India)
  | "es-ES"     // Spanish (Spain)
  | "es-MX"     // Spanish (Mexico)
  | "es-AR"     // Spanish (Argentina)
  | "es-CO"     // Spanish (Colombia)
  | "es-PE"     // Spanish (Peru)
  | "es-VE"     // Spanish (Venezuela)
  | "es-CL"     // Spanish (Chile)
  | "es-EC"     // Spanish (Ecuador)
  | "es-GT"     // Spanish (Guatemala)
  | "es-CU"     // Spanish (Cuba)
  | "es-BO"     // Spanish (Bolivia)
  | "es-DO"     // Spanish (Dominican Republic)
  | "es-HN"     // Spanish (Honduras)
  | "es-PY"     // Spanish (Paraguay)
  | "es-SV"     // Spanish (El Salvador)
  | "es-NI"     // Spanish (Nicaragua)
  | "es-PR"     // Spanish (Puerto Rico)
  | "es-UY"     // Spanish (Uruguay)
  | "es-PA"     // Spanish (Panama)
  | "es-CR"     // Spanish (Costa Rica)
  | "ar-EG"     // Arabic (Egypt)
  | "ar-SA"     // Arabic (Saudi Arabia)
  | "ar-DZ"     // Arabic (Algeria)
  | "ar-MA"     // Arabic (Morocco)
  | "ar-IQ"     // Arabic (Iraq)
  | "ar-SD"     // Arabic (Sudan)
  | "ar-YE"     // Arabic (Yemen)
  | "ar-SY"     // Arabic (Syria)
  | "ar-TN"     // Arabic (Tunisia)
  | "ar-LY"     // Arabic (Libya)
  | "ar-JO"     // Arabic (Jordan)
  | "ar-LB"     // Arabic (Lebanon)
  | "ar-KW"     // Arabic (Kuwait)
  | "ar-AE"     // Arabic (United Arab Emirates)
  | "ar-BH"     // Arabic (Bahrain)
  | "ar-QA"     // Arabic (Qatar)
  | "ar-OM"     // Arabic (Oman)
  | "pt-BR"     // Portuguese (Brazil)
  | "pt-PT"     // Portuguese (Portugal)
  | "ru-RU"     // Russian (Russia)
  | "ru-UA"     // Russian (Ukraine)
  | "ru-KZ"     // Russian (Kazakhstan)
  | "ja-JP"     // Japanese (Japan)
  | "de-DE"     // German (Germany)
  | "de-AT"     // German (Austria)
  | "de-CH"     // German (Switzerland)
  | "fr-FR"     // French (France)
  | "fr-CA"     // French (Canada)
  | "fr-BE"     // French (Belgium)
  | "fr-CH"     // French (Switzerland)
  | "fr-LU"     // French (Luxembourg)
  | "fr-MC"     // French (Monaco)
  | "ko-KR"     // Korean (South Korea)
  | "ko-KP"     // Korean (North Korea)
  | "it-IT"     // Italian (Italy)
  | "it-CH"     // Italian (Switzerland)
  | "tr-TR"     // Turkish
  | "th-TH"     // Thai
  | "el-GR"     // Greek
  | "cs-CZ"     // Czech
  | "sv-SE"     // Swedish
  | "sv-FI"     // Swedish (Finland)
  | "hu-HU"     // Hungarian
  | "fi-FI"     // Finnish
  | "da-DK"     // Danish
  | "nb-NO"     // Norwegian Bokmål
  | "nn-NO"     // Norwegian Nynorsk
  | "he-IL"     // Hebrew
  | "id-ID"     // Indonesian
  | "ms-MY"     // Malay (Malaysia)
  | "ms-BN"     // Malay (Brunei)
  | "ro-RO"     // Romanian
  | "bg-BG"     // Bulgarian
  | "uk-UA"     // Ukrainian
  | "sk-SK"     // Slovak
  | "sl-SI"     // Slovenian
  | "hr-HR"     // Croatian
  | "ca-ES"     // Catalan
  | "lt-LT"     // Lithuanian
  | "lv-LV"     // Latvian
  | "et-EE"     // Estonian
  | "sq-AL"     // Albanian
  | "mk-MK"     // Macedonian
  | "be-BY"     // Belarusian
  | "is-IS"     // Icelandic
  | "gl-ES"     // Galician
  | "eu-ES"     // Basque
  | "af-ZA"     // Afrikaans
  | "sw-KE"     // Swahili
  | "ta-IN"     // Tamil
  | "te-IN"     // Telugu
  | "kn-IN"     // Kannada
  | "mr-IN"     // Marathi
  | "gu-IN"     // Gujarati
  | "pa-IN"     // Punjabi
  | "kok-IN"    // Konkani
  | "sa-IN"     // Sanskrit
  | "ur-PK"     // Urdu
  | "fa-IR"     // Persian
  | "syr-SY"    // Syriac
  | "div-MV"    // Divehi
  | "ka-GE"     // Georgian
  | "nl-NL"     // Dutch (Netherlands)
  | "pl-PL"     // Polish
  | "vi-VN"     // Vietnamese
  | "bn-BD"     // Bengali (Bangladesh)
  | "en-NG"     // English (Nigeria)
  | "am-ET"     // Amharic (Ethiopia)
  | "my-MM"     // Burmese
  | "en-UG"     // English (Uganda)
  | "fr-CD";    // French (Democratic Republic of the Congo)
```

### BCP47LanguageTags

Type definition for language tag arrays.

```typescript
type BCP47LanguageTags = BCP47LanguageTag[];
```

### PrimaryLanguageTags

Interface type for primary language tags, defining mapping relationships for the 11 most commonly used language tags. Used for type-safe language tag access and extension.

```typescript
interface PrimaryLanguageTags {
  "zh-CN": BCP47LanguageTag;  // Simplified Chinese
  "zh-TW": BCP47LanguageTag;  // Traditional Chinese
  "en-US": BCP47LanguageTag;  // United States English
  "ru-RU": BCP47LanguageTag;  // Russian
  "es-ES": BCP47LanguageTag;  // Spanish
  "fr-FR": BCP47LanguageTag;  // French
  "de-DE": BCP47LanguageTag;  // German
  "it-IT": BCP47LanguageTag;  // Italian
  "ar-EG": BCP47LanguageTag;  // Arabic (Egypt)
  "ja-JP": BCP47LanguageTag;  // Japanese
  "ko-KR": BCP47LanguageTag;  // Korean
}
```

**Usage Scenario:**

```typescript
// Extend TypeScript type declaration
declare module "bcp47-language-tags" {
  interface PrimaryLanguageTags {
    "en-GB": BCP47LanguageTag;  // Extend support for English (United Kingdom)
    "pt-BR": BCP47LanguageTag;  // Extend support for Portuguese (Brazil)
  }
}
```

### PrimaryLanguage

Union type of primary languages, key types extracted from the `PrimaryLanguageTags` interface.

```typescript
type PrimaryLanguage = keyof PrimaryLanguageTags;
// Equivalent to:
// type PrimaryLanguage = "zh-CN" | "zh-TW" | "en-US" | "ru-RU" | "es-ES" | 
//                       "fr-FR" | "de-DE" | "it-IT" | "ar-EG" | "ja-JP" | "ko-KR";
```

**Usage Scenario:**

```typescript
// Function parameter restricted to primary languages
function getPrimaryLanguageTag(tag: PrimaryLanguage): BCP47LanguageTag | undefined {
  return tags.find(t => t.tag === tag);
}

// Usage example
getPrimaryLanguageTag("zh-CN");  // ✅ Valid
getPrimaryLanguageTag("en-GB");  // ❌ Compilation error: not a primary language
```

### PrimaryLanguageTagList

Primary language tag array type, using `PrimaryLanguage` as a generic parameter.

```typescript
type PrimaryLanguageTagList = BCP47LanguageTag<PrimaryLanguage>[];
```

**Usage Scenario:**

```typescript
// Define primary language tag array
const primaryLanguages: PrimaryLanguageTagList = [
  { tag: 'zh-CN', name: 'Simplified Chinese', nativeName: '简体中文' },
  { tag: 'en-US', name: 'English (United States)', nativeName: 'English (United States)' }
];

// Type-safe array operations
function filterPrimaryLanguages(tags: PrimaryLanguageTagList): PrimaryLanguageTagList {
  return tags.filter(tag => tag.tag !== 'ar-EG');
}
```

### Type Hierarchy

```typescript
// Type hierarchy diagram
BCP47LanguageTag<T>          // Base language tag type
    ↓
PrimaryLanguageTags          // Primary language tag interface (key-value mapping)
    ↓ (keyof)
PrimaryLanguage              // Primary language union type
    ↓ (as generic parameter)
PrimaryLanguageTagList       // Primary language tag array type
```

### Type Usage Example

```typescript
import type { BCP47LanguageTag } from 'bcp47-language-tags';

// Function parameter type constraint
function processLanguageTag(tag: BCP47LanguageTag) {
  console.log(`${tag.nativeName} (${tag.name})`);
}

// Array type constraint
const supportedLanguages: BCP47LanguageTag[] = [
  { tag: 'zh-CN', name: 'Simplified Chinese', nativeName: '简体中文' },
  { tag: 'en-US', name: 'English (United States)', nativeName: 'English (United States)' }
];
```

## License

[MIT](LICENSE)

## Related Projects

- [VoerkaI18n](https://zhangfisher.github.io/voerka-i18n/) - React/Vue/Nodejs/Solidjs internationalization solution
- [AutoStore](https://zhangfisher.github.io/autostore/) - React state management library
- [Logsets](https://zhangfisher.github.io/logsets/) - Terminal interface development enhancement library
- [VoerkaLogger](https://zhangfisher.github.io/voerkalogger/) - Log output library
- [FlexDecorators](https://zhangfisher.github.io/flex-decorators/) - Decorator development tool
- [FlexState](https://zhangfisher.github.io/flexstate/) - Finite state machine library
- [FlexTools](https://zhangfisher.github.io/flex-tools/) - General function utility library
- [FlexStyled](https://zhangfisher.github.io/flexstyled/) - CSS-IN-JS library
