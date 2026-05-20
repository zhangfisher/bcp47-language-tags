# bcp47-language-tags

[![npm version](https://badge.fury.io/js/bcp47-language-tags.svg)](https://www.npmjs.com/package/bcp47-language-tags)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[中文](./README_CN.md) | [English](./README.md)

BCP-47 标准语言标签完整列表，包含 TypeScript 类型定义、多语言翻译和 SVG 国旗资源。

## 特性

- 🌍 **180+ 语言标签** - 全面覆盖 BCP-47 标准语言标签
- 🌐 **多语言翻译** - 支持 22 种语言的本地化语言名称
- 🏳️ **SVG 国旗资源** - 内置所有支持语言的 SVG 国标
- 🎯 **TypeScript 支持** - 完整的类型定义，支持类型安全开发
- 🗺️ **映射器支持** - 将 BCP-47 标签转换为 ISO 639-1/2/3 和平台特定代码
- ⚡ **Tree-shakeable** - 仅导入所需内容，支持 Tree-shaking

## 安装

```bash
npm install bcp47-language-tags
# 或
yarn add bcp47-language-tags
# 或
bun add bcp47-language-tags
# 或
pnpm add bcp47-language-tags
```

## 指南

### 导入常用语言标签

导入带有本地化名称的常用语言标签：

```typescript
import { tags } from 'bcp47-language-tags/zh-CN';

for (const tag of tags) {
  console.log(tag);
}
// 输出：
// [
//   { tag: 'zh-CN', name: '简体中文', nativeName: '简体中文' },
//   { tag: 'zh-TW', name: '繁体中文(台湾)', nativeName: '繁體中文(中國臺灣)' }
//   { tag: 'ar-EG', name: '阿拉伯语(埃及)', nativeName: 'العربية (مصر)' },
//   { tag: 'de-DE', name: '德语(德国)', nativeName: 'Deutsch (Deutschland)' },
//   { tag: 'en-US', name: '英语(美国)',nativeName: 'English (United States)'},
//   { tag: 'es-ES', name: '西班牙语(西班牙)', nativeName: 'Español (España)' },
//   { tag: 'fr-FR', name: '法语(法国)', nativeName: 'Français (France)' },
//   { tag: 'it-IT', name: '意大利语', nativeName: 'Italiano (Italia)' },
//   { tag: 'ja-JP', name: '日语', nativeName: '日本語 (日本)' },
//   { tag: 'ko-KR', name: '韩语(韩国)', nativeName: '한국어 (대한민국)' },
//   { tag: 'ru-RU', name: '俄语', nativeName: 'Русский (Россия)' }  
// ]
```
- 基于包大小的考虑，默认情况下，只导入了`11`种常用的语言标签数据。
- `name`是语言的中文名称,因为我们导入的是`bcp47-language-tags/zh-CN`，如果你希望是英文可以从`bcp47-language-tags/en-US`导入。
- `nativeName`是始终为该语言的原生书写形式，便于该语言用户识别

### 导入特定语言数据

上例中，我们使用`import { tags } from 'bcp47-language-tags/zh-CN'`，代表了导入的`tags`中的`name`是中文。
如果您希望是其他语言，可以使用`import { tags } from 'bcp47-language-tags/<语言标签>'`

```typescript
// 导入中文语言数据
import { tags } from 'bcp47-language-tags/zh-CN';
// 导入英语语言数据
import { tags } from 'bcp47-language-tags/en-US';
```

**支持的导出语言：**

| 语言 | 导入路径 |
|------|---------|
| 简体中文 | `bcp47-language-tags/zh-CN` |
| 英语（美国） | `bcp47-language-tags/en-US` |
| 日语 | `bcp47-language-tags/ja-JP` |
| 韩语 | `bcp47-language-tags/ko-KR` |
| 俄语 | `bcp47-language-tags/ru-RU` |
| 西班牙语 | `bcp47-language-tags/es-ES` |
| 法语 | `bcp47-language-tags/fr-FR` |
| 德语 | `bcp47-language-tags/de-DE` |
| 意大利语 | `bcp47-language-tags/it-IT` |
| 阿拉伯语 | `bcp47-language-tags/ar-EG` |
| 葡萄牙语 | `bcp47-language-tags/pt-PT` |
| 荷兰语 | `bcp47-language-tags/nl-NL` |
| 波兰语 | `bcp47-language-tags/pl-PL` |
| 瑞典语 | `bcp47-language-tags/sv-SE` |
| 土耳其语 | `bcp47-language-tags/tr-TR` |
| 泰语 | `bcp47-language-tags/th-TH` |
| 越南语 | `bcp47-language-tags/vi-VN` |
| 印地语 | `bcp47-language-tags/hi-IN` |
| 丹麦语 | `bcp47-language-tags/da-DK` |
| 希腊语 | `bcp47-language-tags/el-GR` |
| 芬兰语 | `bcp47-language-tags/fi-FI` |
| 捷克语 | `bcp47-language-tags/cs-CZ` |

### 扩展语言

基于包大小的考虑，默认情况下，只导入了`11`种常用的语言标签数据。

如果的要使用的语言不在`11`种常用的语言标签中，可以通过以下方式扩展。

```ts
// tags包含了默认的11种语言标签
import { tags,addTag } from 'bcp47-language-tags/zh-CN';
// tags输出：
// [
//   { tag: 'zh-CN', name: '简体中文', nativeName: '简体中文' },
//   { tag: 'zh-TW', name: '繁体中文(台湾)', nativeName: '繁體中文(中國臺灣)' }
//   { tag: 'ar-EG', name: '阿拉伯语(埃及)', nativeName: 'العربية (مصر)' },
//   { tag: 'de-DE', name: '德语(德国)', nativeName: 'Deutsch (Deutschland)' },
//   { tag: 'en-US', name: '英语(美国)',nativeName: 'English (United States)'},
//   { tag: 'es-ES', name: '西班牙语(西班牙)', nativeName: 'Español (España)' },
//   { tag: 'fr-FR', name: '法语(法国)', nativeName: 'Français (France)' },
//   { tag: 'it-IT', name: '意大利语', nativeName: 'Italiano (Italia)' },
//   { tag: 'ja-JP', name: '日语', nativeName: '日本語 (日本)' },
//   { tag: 'ko-KR', name: '韩语(韩国)', nativeName: '한국어 (대한민국)' },
//   { tag: 'ru-RU', name: '俄语', nativeName: 'Русский (Россия)' }  
// ]
// 导入 英语(英国)
import { enGB } from 'bcp47-language-tags/zh-CN/en-GB'
// 导入 葡萄牙语(巴西)
import { ptBR } from 'bcp47-language-tags/zh-CN/pt-BR'
// 新增加到tags
addTag(enGB)
addTag(ptBR)

console.log(tags)
// tags输出：
// [
//   { tag: 'zh-CN', name: '简体中文', nativeName: '简体中文' },
//   { tag: 'zh-TW', name: '繁体中文(台湾)', nativeName: '繁體中文(中國臺灣)' }
//   { tag: 'ar-EG', name: '阿拉伯语(埃及)', nativeName: 'العربية (مصر)' },
//   { tag: 'de-DE', name: '德语(德国)', nativeName: 'Deutsch (Deutschland)' },
//   { tag: 'en-US', name: '英语(美国)',nativeName: 'English (United States)'},
//   { tag: 'es-ES', name: '西班牙语(西班牙)', nativeName: 'Español (España)' },
//   { tag: 'fr-FR', name: '法语(法国)', nativeName: 'Français (France)' },
//   { tag: 'it-IT', name: '意大利语', nativeName: 'Italiano (Italia)' },
//   { tag: 'ja-JP', name: '日语', nativeName: '日本語 (日本)' },
//   { tag: 'ko-KR', name: '韩语(韩国)', nativeName: '한국어 (대한민국)' },
//   { tag: 'ru-RU', name: '俄语', nativeName: 'Русский (Россия)' },
//   新增加以下：
//   {"tag":"en-GB","name":"英语(英国)","nativeName":"English (United Kingdom)"},
//   {"tag":"pt-BR","name":"葡萄牙语(巴西)","nativeName":"Português (Brasil)"};
// ]


// 扩展Typescript类型
declare module "bcp47-language-tags" {
   interface PrimaryLanguageTags{
      "en-GB": BCP47LanguageTag
      "pt-BR: BCP47LanguageTag
   }    
}
````

### 主要语言国旗

获取常用主要语言国旗的 SVG 数据：

```typescript
import flags from 'bcp47-language-tags/flags';

// 访问国旗 SVG 数据
console.log(flags.zhCN);
// <svg xmlns="http://www.w3.org/2000/svg" ...>
//   <path fill="#de2910" d="..."/>
//   ...
// </svg>

// 可用的国旗：
// 简体中文,繁体中文,美国英语,俄语,西班牙语,法语,德语,意大利语,阿拉伯语(埃及),日语,韩语
// zh-CN, zh-TW, en-US, ru-RU, es-ES, fr-FR, de-DE, it-IT, ar-EG, ja-JP, ko-KR,
```

### 非主要语言国旗

直接导入 `SVG` 国旗文件（需要 `Vite` 等支持 `SVG` 导入的构建工具）：

```typescript
import zhCN from 'bcp47-language-tags/flags/zh-CN.svg?raw';
import enUS from 'bcp47-language-tags/flags/en-US.svg?raw';
import esES from 'bcp47-language-tags/flags/es-ES.svg?raw';
```

> **注意：** 直接 SVG 导入需要支持 SVG 处理的构建工具（如配置了相应插件的 Vite）。

### 映射器

将 BCP-47 语言标签转换为其他标准：

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

// 转换为平台特定代码
baidu['zh-CN'];     // 'zh'
youdao['zh-CN'];    // 'zh'
tencent['zh-CN'];   // 'zh'
xunfei['zh-CN'];    // 'zh'

// 转换为 ISO 639 标准
ISO6391['zh-CN'];   // 'zh'
ISO6392['zh-CN'];   // 'zho'
ISO6393['zh-CN'];   // 'zho'
```

## BCP47LanguageTag 类型说明

`BCP47LanguageTag` 是本库的核心数据类型，表示单个语言标签及其本地化信息。
 
| 字段 | 类型 | 说明 |
|------|------|------|
| `tag` | `string` | `BCP-47` 语言标签代码，如 `zh-CN`、`en-US` |
| `name` | `string` | 本地化的语言名称，根据导入的语言模块而定 |
| `nativeName` | `string` | 语言的原生名称（该语言本身的书写形式） |

- `nativeName` 字段存储语言的**原生书写形式**，即使用该语言的用户看到自己语言名称时的形式。这对于构建用户友好的语言选择器非常重要。

**为什么需要 nativeName？**

1. **用户识别**：让用户能够快速识别自己的语言
2. **本地化体验**：在语言切换界面显示原生态的语言名称
3. **避免混淆**：某些语言在不同地区的翻译可能不够准确

**实际应用场景：**

```typescript
// 假设正在构建一个多语言应用的语言选择器
import { tags } from 'bcp47-language-tags/zh-CN';

// 在语言选择器中显示
tags.map(tag => ({
  label: `${tag.nativeName} (${tag.name})`,  // "简体中文 (简体中文)"
  value: tag.tag
}));

// 用户看到的选项：
// - 简体中文 (简体中文)
// - English (英语（美国）)
// - 日本語 (日语)
// - 한국어 (韩语)
```


## API

### getTag(tag: string): BCP47LanguageTag | undefined

获取特定的语言标签。

```typescript
import { getTag } from 'bcp47-language-tags/zh-CN';

// 获取特定标签
getTag('zh-CN');  // { tag: "zh-CN", name: "简体中文", nativeName: "简体中文" }
getTag('en-US');  // { tag: "en-US", name: "英语（美国）", nativeName: "English (United States)" }
```

### getTags(language?: string | string[]): BCP47LanguageTag[]

获取所有标签或按语言代码筛选。

```typescript
import { getTags } from 'bcp47-language-tags/zh-CN';

// 获取所有标签
getTags();

// 按语言筛选
getTags('zh');    // 所有中文变体
getTags(['zh', 'en']);  // 中文和英语变体
getTags(['zh-CN', 'en-US']);  // 特定标签
```

### addTag(tag: BCP47LanguageTag): void

添加一个新的语言标签到标签列表中。如果该标签已存在，则不会重复添加。

```typescript
import { tags, addTag } from 'bcp47-language-tags/zh-CN';

// 添加单个语言标签
addTag({
  tag: 'en-GB',
  name: '英语(英国)',
  nativeName: 'English (United Kingdom)'
});

// 标签已存在时不会重复添加
addTag({
  tag: 'en-GB',
  name: '英语(英国)',
  nativeName: 'English (United Kingdom)'
});
```

### deleteTag(language: string | string[]): void

从标签列表中删除指定语言的标签。

```typescript
import { tags, deleteTag } from 'bcp47-language-tags/zh-CN';

// 删除单个语言的所有变体
deleteTag('zh');  // 删除所有中文标签（zh-CN、zh-TW等）

// 删除多个语言的所有变体
deleteTag(['zh', 'en']);  // 删除所有中文和英文标签
```

## TypeScript 类型

本库提供了完整的 TypeScript 类型定义，支持类型安全的开发。

### 导入类型

```typescript
import type {
  BCP47LanguageTag,
  BCP47LanguageTagName,
  BCP47LanguageTags
} from 'bcp47-language-tags';
```

### BCP47LanguageTag

表示单个语言标签及其本地化信息的核心类型。

```typescript
type BCP47LanguageTag<T = string> = {
  tag: T;           // BCP-47 语言标签代码（如 "zh-CN"、"en-US"）
  name: string;     // 本地化的语言名称，根据导入的语言模块而定
  nativeName: string; // 语言的原生名称（该语言本身的书写形式）
};
```

### BCP47LanguageTagName

所有支持的语言标签名称的联合类型，提供完整的类型覆盖。

```typescript
type BCP47LanguageTagName =
  | "zh-CN"     // 简体中文
  | "zh-TW"     // 繁体中文(台湾)
  | "zh-HK"     // 繁体中文(香港)
  | "zh-MO"     // 繁体中文(澳门)
  | "zh-SG"     // 简体中文(新加坡)
  | "zh-CHS"    // 简体中文
  | "zh-CHT"    // 繁体中文
  | "en-US"     // 英语(美国)
  | "en-GB"     // 英语(英国)
  | "en-CA"     // 英语(加拿大)
  | "en-AU"     // 英语(澳大利亚)
  | "en-IN"     // 英语(印度)
  | "en-ZA"     // 英语(南非)
  | "en-NZ"     // 英语(新西兰)
  | "en-IE"     // 英语(爱尔兰)
  | "en-PH"     // 英语(菲律宾)
  | "en-ZW"     // 英语(津巴布韦)
  | "en-BZ"     // 英语(伯利兹)
  | "en-CB"     // 英语(加勒比)
  | "en-JM"     // 英语(牙买加)
  | "en-TT"     // 英语(特立尼达和多巴哥)
  | "hi-IN"     // 印地语(印度)
  | "es-ES"     // 西班牙语(西班牙)
  | "es-MX"     // 西班牙语(墨西哥)
  | "es-AR"     // 西班牙语(阿根廷)
  | "es-CO"     // 西班牙语(哥伦比亚)
  | "es-PE"     // 西班牙语(秘鲁)
  | "es-VE"     // 西班牙语(委内瑞拉)
  | "es-CL"     // 西班牙语(智利)
  | "es-EC"     // 西班牙语(厄瓜多尔)
  | "es-GT"     // 西班牙语(危地马拉)
  | "es-CU"     // 西班牙语(古巴)
  | "es-BO"     // 西班牙语(玻利维亚)
  | "es-DO"     // 西班牙语(多米尼加共和国)
  | "es-HN"     // 西班牙语(洪都拉斯)
  | "es-PY"     // 西班牙语(巴拉圭)
  | "es-SV"     // 西班牙语(萨尔瓦多)
  | "es-NI"     // 西班牙语(尼加拉瓜)
  | "es-PR"     // 西班牙语(波多黎各)
  | "es-UY"     // 西班牙语(乌拉圭)
  | "es-PA"     // 西班牙语(巴拿马)
  | "es-CR"     // 西班牙语(哥斯达黎加)
  | "ar-EG"     // 阿拉伯语(埃及)
  | "ar-SA"     // 阿拉伯语(沙特阿拉伯)
  | "ar-DZ"     // 阿拉伯语(阿尔及利亚)
  | "ar-MA"     // 阿拉伯语(摩洛哥)
  | "ar-IQ"     // 阿拉伯语(伊拉克)
  | "ar-SD"     // 阿拉伯语(苏丹)
  | "ar-YE"     // 阿拉伯语(也门)
  | "ar-SY"     // 阿拉伯语(叙利亚)
  | "ar-TN"     // 阿拉伯语(突尼斯)
  | "ar-LY"     // 阿拉伯语(利比亚)
  | "ar-JO"     // 阿拉伯语(约旦)
  | "ar-LB"     // 阿拉伯语(黎巴嫩)
  | "ar-KW"     // 阿拉伯语(科威特)
  | "ar-AE"     // 阿拉伯语(阿联酋)
  | "ar-BH"     // 阿拉伯语(巴林)
  | "ar-QA"     // 阿拉伯语(卡塔尔)
  | "ar-OM"     // 阿拉伯语(阿曼)
  | "pt-BR"     // 葡萄牙语(巴西)
  | "pt-PT"     // 葡萄牙语(葡萄牙)
  | "ru-RU"     // 俄语(俄罗斯)
  | "ru-UA"     // 俄语(乌克兰)
  | "ru-KZ"     // 俄语(哈萨克斯坦)
  | "ja-JP"     // 日语(日本)
  | "de-DE"     // 德语(德国)
  | "de-AT"     // 德语(奥地利)
  | "de-CH"     // 德语(瑞士)
  | "fr-FR"     // 法语(法国)
  | "fr-CA"     // 法语(加拿大)
  | "fr-BE"     // 法语(比利时)
  | "fr-CH"     // 法语(瑞士)
  | "fr-LU"     // 法语(卢森堡)
  | "fr-MC"     // 法语(摩纳哥)
  | "ko-KR"     // 韩语(韩国)
  | "ko-KP"     // 韩语(朝鲜)
  | "it-IT"     // 意大利语(意大利)
  | "it-CH"     // 意大利语(瑞士)
  | "tr-TR"     // 土耳其语
  | "th-TH"     // 泰语
  | "el-GR"     // 希腊语
  | "cs-CZ"     // 捷克语
  | "sv-SE"     // 瑞典语
  | "sv-FI"     // 瑞典语(芬兰)
  | "hu-HU"     // 匈牙利语
  | "fi-FI"     // 芬兰语
  | "da-DK"     // 丹麦语
  | "nb-NO"     // 挪威博克马尔语
  | "nn-NO"     // 挪威尼诺斯克语
  | "he-IL"     // 希伯来语
  | "id-ID"     // 印度尼西亚语
  | "ms-MY"     // 马来语(马来西亚)
  | "ms-BN"     // 马来语(文莱)
  | "ro-RO"     // 罗马尼亚语
  | "bg-BG"     // 保加利亚语
  | "uk-UA"     // 乌克兰语
  | "sk-SK"     // 斯洛伐克语
  | "sl-SI"     // 斯洛文尼亚语
  | "hr-HR"     // 克罗地亚语
  | "ca-ES"     // 加泰罗尼亚语
  | "lt-LT"     // 立陶宛语
  | "lv-LV"     // 拉脱维亚语
  | "et-EE"     // 爱沙尼亚语
  | "sq-AL"     // 阿尔巴尼亚语
  | "mk-MK"     // 马其顿语
  | "be-BY"     // 白俄罗斯语
  | "is-IS"     // 冰岛语
  | "gl-ES"     // 加利西亚语
  | "eu-ES"     // 巴斯克语
  | "af-ZA"     // 南非荷兰语
  | "sw-KE"     // 斯瓦希里语
  | "ta-IN"     // 泰米尔语
  | "te-IN"     // 泰卢固语
  | "kn-IN"     // 卡纳达语
  | "mr-IN"     // 马拉地语
  | "gu-IN"     // 古吉拉特语
  | "pa-IN"     // 旁遮普语
  | "kok-IN"    // 孔卡尼语
  | "sa-IN"     // 梵语
  | "ur-PK"     // 乌尔都语
  | "fa-IR"     // 波斯语
  | "syr-SY"    // 叙利亚语
  | "div-MV"    // 迪维希语
  | "ka-GE"     // 格鲁吉亚语
  | "nl-NL"     // 荷兰语(荷兰)
  | "pl-PL"     // 波兰语
  | "vi-VN"     // 越南语
  | "bn-BD"     // 孟加拉语(孟加拉国)
  | "en-NG"     // 英语(尼日利亚)
  | "am-ET"     // 阿姆哈拉语(埃塞俄比亚)
  | "my-MM"     // 缅甸语
  | "en-UG"     // 英语(乌干达)
  | "fr-CD";    // 法语(刚果民主共和国)
```

### BCP47LanguageTags

语言标签数组的类型定义。

```typescript
type BCP47LanguageTags = BCP47LanguageTag[];
```

### PrimaryLanguageTags

主要语言标签的接口类型，定义了11种最常用的语言标签映射关系。用于类型安全的语言标签访问和扩展。

```typescript
interface PrimaryLanguageTags {
  "zh-CN": BCP47LanguageTag;  // 简体中文
  "zh-TW": BCP47LanguageTag;  // 繁体中文
  "en-US": BCP47LanguageTag;  // 美国英语
  "ru-RU": BCP47LanguageTag;  // 俄语
  "es-ES": BCP47LanguageTag;  // 西班牙语
  "fr-FR": BCP47LanguageTag;  // 法语
  "de-DE": BCP47LanguageTag;  // 德语
  "it-IT": BCP47LanguageTag;  // 意大利语
  "ar-EG": BCP47LanguageTag;  // 阿拉伯语(埃及)
  "ja-JP": BCP47LanguageTag;  // 日语
  "ko-KR": BCP47LanguageTag;  // 韩语
}
```

**使用场景：**

```typescript
// 扩展Typescript类型声明
declare module "bcp47-language-tags" {
  interface PrimaryLanguageTags {
    "en-GB": BCP47LanguageTag;  // 扩展支持英语(英国)
    "pt-BR": BCP47LanguageTag;  // 扩展支持葡萄牙语(巴西)
  }
}
```

### PrimaryLanguage

主要语言的联合类型，从 `PrimaryLanguageTags` 接口中提取的键类型。

```typescript
type PrimaryLanguage = keyof PrimaryLanguageTags;
// 等价于：
// type PrimaryLanguage = "zh-CN" | "zh-TW" | "en-US" | "ru-RU" | "es-ES" | 
//                       "fr-FR" | "de-DE" | "it-IT" | "ar-EG" | "ja-JP" | "ko-KR";
```
 

### PrimaryLanguageTagList

主要语言标签数组的类型，使用 `PrimaryLanguage` 作为泛型参数。

```typescript
type PrimaryLanguageTagList = BCP47LanguageTag<PrimaryLanguage>[];
```

**使用场景：**

```typescript
// 定义主要语言标签数组
const primaryLanguages: PrimaryLanguageTagList = [
  { tag: 'zh-CN', name: '简体中文', nativeName: '简体中文' },
  { tag: 'en-US', name: '英语（美国）', nativeName: 'English (United States)' }
];

// 类型安全的数组操作
function filterPrimaryLanguages(tags: PrimaryLanguageTagList): PrimaryLanguageTagList {
  return tags.filter(tag => tag.tag !== 'ar-EG');
}
``` 
## 许可证

[MIT](LICENSE)

## 相关项目

- [VoerkaI18n](https://zhangfisher.github.io/voerka-i18n/) - React/Vue/Nodejs/Solidjs 国际化解决方案
- [AutoStore](https://zhangfisher.github.io/autostore/) - React 状态管理库
- [Logsets](https://zhangfisher.github.io/logsets/) - 终端界面开发增强库
- [VoerkaLogger](https://zhangfisher.github.io/voerkalogger/) - 日志输出库
- [FlexDecorators](https://zhangfisher.github.io/flex-decorators/) - 装饰器开发工具
- [FlexState](https://zhangfisher.github.io/flexstate/) - 有限状态机库
- [FlexTools](https://zhangfisher.github.io/flex-tools/) - 通用函数工具库
- [FlexStyled](https://zhangfisher.github.io/flexstyled/) - CSS-IN-JS 库
