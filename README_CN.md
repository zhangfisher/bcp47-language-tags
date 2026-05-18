# bcp47-language-tags

[![npm version](https://badge.fury.io/js/bcp47-language-tags.svg)](https://www.npmjs.com/package/bcp47-language-tags)
[![License: MIT](https://badge.fury.io/js/bcp47-language-tags.svg)](https://opensource.org/licenses/MIT)

中文 | [English](./README.md)

BCP-47 标准语言标签完整列表，包含 TypeScript 类型定义、多语言翻译和 SVG 国旗资源。

## 特性

- 🌍 **180+ 语言标签** - 全面覆盖 BCP-47 标准语言标签
- 🌐 **多语言翻译** - 支持 12 种语言的本地化语言名称
- 🏳️ **SVG 国旗资源** - 内置所有支持语言的 SVG 国标
- 🎯 **TypeScript 支持** - 完整的类型定义，支持类型安全开发
- 🗺️ **映射器支持** - 将 BCP-47 标签转换为 ISO 639-1/2/3 和平台特定代码
- ⚡ **可按需导入** - 仅导入所需内容，支持 Tree-shaking

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

## 使用方法

### 按需导入优化

本库支持**按需导入**，可以有效减小打包体积：

#### ✅ 推荐：按需导入（Tree-shaking 友好）

```typescript
// 只导入需要的语言模块
import { tags } from 'bcp47-language-tags/zh';        // 仅中文
import { tags } from 'bcp47-language-tags/en';        // 仅英文
import { getTag, getTags } from 'bcp47-language-tags/en';  // 仅导入特定函数

// 只导入国旗资源
import flags from 'bcp47-language-tags/flags';        // 主要语言国旗
import zhCN from 'bcp47-language-tags/flags/zh-CN.svg';  // 单个国旗

// 只导入映射器
import { baidu, ISO6391 } from 'bcp47-language-tags/mapper';
```

**优势：**
- 🎯 **精确加载** - 只加载实际使用的语言和模块
- 📦 **更小体积** - 未使用的代码会被 Tree-shaking 移除
- ⚡ **更快启动** - 减少初始加载时间

#### ❌ 不推荐：全量导入

```typescript
// 避免：会导入所有语言和模块
import allTags from 'bcp47-language-tags';  // 包含所有 22 种语言的完整数据
```

**注意：** 除非你确实需要所有语言的数据，否则建议使用按需导入。

---

### 语言标签列表

导入带有本地化名称的语言标签：

```typescript
import { tags } from 'bcp47-language-tags/en';

for (let tag of tags) {
  console.log(tag);
}
// 输出：
//   {"tag": "zh-CN", "name": "Chinese (Simplified)", "nativeName": "简体中文", "primary": true}
//   {"tag": "zh-TW", "name": "Chinese (Traditional - Taiwan)", "nativeName": "繁體中文 (中国臺灣)"}
//   {"tag": "en-US", "name": "English (United States)", "nativeName": "English (United States)", "primary": true}
//   {"tag": "es-ES", "name": "Spanish (Spain)", "nativeName": "Español (España)", "primary": true}
//   ...
```

导入中文翻译：

```typescript
import { tags } from 'bcp47-language-tags/zh';

for (let tag of tags) {
  console.log(tag);
}
// 输出：
//   {"tag": "zh-CN", "name": "简体中文", "nativeName": "简体中文", "primary": true}
//   {"tag": "zh-TW", "name": "繁体中文（台湾）", "nativeName": "繁體中文 (臺灣)"}
//   {"tag": "en-US", "name": "英语（美国）", "nativeName": "English (United States)", "primary": true}
```

**支持的语言：**

```typescript
import { tags } from "bcp47-language-tags/zh"   // 中文
import { tags } from "bcp47-language-tags/en"   // 美国英语
import { tags } from "bcp47-language-tags/ar"   // 阿拉伯语
import { tags } from "bcp47-language-tags/cs"   // 捷克语
import { tags } from "bcp47-language-tags/da"   // 丹麦语
import { tags } from "bcp47-language-tags/de"   // 德语
import { tags } from "bcp47-language-tags/el"   // 希腊语
import { tags } from "bcp47-language-tags/es"   // 西班牙语
import { tags } from "bcp47-language-tags/fi"   // 芬兰语
import { tags } from "bcp47-language-tags/fr"   // 法语
import { tags } from "bcp47-language-tags/hi"   // 印地语
import { tags } from "bcp47-language-tags/it"   // 意大利语
import { tags } from "bcp47-language-tags/vi"   // 越南语 
import { tags } from "bcp47-language-tags/jp"   // 日语
import { tags } from "bcp47-language-tags/ko"   // 韩语
import { tags } from "bcp47-language-tags/nl"   // 荷兰语
import { tags } from "bcp47-language-tags/pl"   // 波兰语
import { tags } from "bcp47-language-tags/pt"   // 葡萄牙语
import { tags } from "bcp47-language-tags/ru"   // 俄语
import { tags } from "bcp47-language-tags/sv"   // 瑞典语
import { tags } from "bcp47-language-tags/th"   // 泰语
import { tags } from "bcp47-language-tags/tr"   // 土耳其语
```

### 主要语言（Primary Languages）

本项目定义了 **22 种最常见的语言** 作为主要语言。每种主要语言有多个地区变体（Regional Variants），其中有一个变体被标记为 `primary: true`，代表该语言的默认/最常用变体。

**主要语言列表：**

| 语言 | 默认变体 | 说明 |
|------|---------|------|
| 中文 | `zh-CN` | 简体中文（中国大陆） |
| 英语 | `en-US` | 英语（美国） |
| 日语 | `ja-JP` | 日语（日本） |
| 韩语 | `ko-KR` | 韩语（韩国） |
| 俄语 | `ru-RU` | 俄语（俄罗斯） |
| 西班牙语 | `es-ES` | 西班牙语（西班牙） |
| 法语 | `fr-FR` | 法语（法国） |
| 德语 | `de-DE` | 德语（德国） |
| 意大利语 | `it-IT` | 意大利语（意大利） |
| 阿拉伯语 | `ar-EG` | 阿拉伯语（埃及） |
| 葡萄牙语 | `pt-PT` | 葡萄牙语（葡萄牙） |
| 荷兰语 | `nl-NL` | 荷兰语（荷兰） |     
| 捷克语 |      `cs-CZ`  | |
| 丹麦语 |      `da-DK`  | |
| 芬兰语 |      `fi-FI`  | |
| 印地语 |      `hi-IN`  | |
| 波兰语 |      `pl-PL`  | |
| 瑞典语 |      `sv-SE`  | |
| 泰语 |      `th-TH`  | |
| 土耳其语 |      `tr-TR`  | |
| 越南语 |      `vi-VN`  | |
| 希腊语 |      `el-GR`  | |


**地区变体示例（以中文为例）：**

| 变体 | 标签 | primary |
|------|------|---------|
| 简体中文 | `zh-CN` | `true` ✅ |
| 繁体中文（台湾） | `zh-TW` | `false` |
| 繁体中文（香港） | `zh-HK` | `false` |
| 繁体中文（澳门） | `zh-MO` | `false` |

**默认变体的作用：**

- **默认选择**：当用户仅指定语言代码（如 "zh"）时，返回该语言的默认变体（zh-CN）
- **界面简化**：应用程序的语言选择器通常优先显示默认变体
- **回退逻辑**：当特定地区变体不可用时，可回退到默认变体

```typescript
import { getTag, getPrimaryTags } from 'bcp47-language-tags/en';

// 返回该语言的默认变体
getTag('zh');     // { tag: "zh-CN", name: "Chinese (Simplified)", primary: true }
getTag('en');     // { tag: "en-US", name: "English (United States)", primary: true }

// 获取所有主要语言的默认变体
const primaryTags = getPrimaryTags(); // 返回 12 种主要语言的默认变体数组
```

### 所有语言标签

获取按主要语言组织的所有语言标签：

```typescript
import allTags from 'bcp47-language-tags';

// 访问特定主要语言的标签
const chineseTags = allTags['zh-CN'];
const englishTags = allTags['en-US'];
```

### 主要语言国旗

获取主要语言国旗的 SVG 数据：

```typescript
import flags from 'bcp47-language-tags/flags';

// 访问国旗 SVG 数据
console.log(flags.zhCN);
// <svg xmlns="http://www.w3.org/2000/svg" ...>
//   <path fill="#de2910" d="..."/>
//   ...
// </svg>

// 可用的国旗：zhCN, enUS, jaJP, koKR, ruRU, esES, frFR, deDE, itIT, arEG, ptPT, nlNL
```

### 非主要语言国旗

直接导入 SVG 国旗文件（需要 Vite 等支持 SVG 导入的构建工具）：

```typescript
import zhCN from 'bcp47-language-tags/flags/zh-CN.svg';
import enUS from 'bcp47-language-tags/flags/en-US.svg';
import esES from 'bcp47-language-tags/flags/es-ES.svg';
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

## API

### getTag(tag: string): BCP47LanguageTag | undefined

获取特定的语言标签。如果未指定国家代码，则返回该语言的主要标签。

```typescript
import { getTag } from 'bcp47-language-tags/en';

// 获取特定标签
getTag('zh-CN');  // { tag: "zh-CN", name: "Chinese (Simplified)", nativeName: "简体中文", primary: true }
getTag('en-US');  // { tag: "en-US", name: "English (United States)", nativeName: "English (United States)", primary: true }

// 获取语言的主要标签
getTag('zh');     // 返回中文主要标签 (zh-CN)
getTag('en');     // 返回英语主要标签 (en-US)
```

### getTags(language?: string | string[]): BCP47LanguageTag[]

获取所有标签或按语言代码筛选。

```typescript
import { getTags } from 'bcp47-language-tags/en';

// 获取所有标签
getTags();

// 按语言筛选
getTags('zh');    // 所有中文变体
getTags(['zh', 'en']);  // 中文和英语变体
getTags(['zh-CN', 'en-US']);  // 特定标签
```

### getPrimaryTags(): BCP47LanguageTag[]

获取所有主要语言标签（每种语言一个）。

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

## TypeScript 类型

```typescript
import type {
  BCP47LanguageTag,
  BCP47LanguageTagName,
  BCP47LanguageTags,
  PrimaryLanguageTags
} from 'bcp47-language-tags';

// 语言标签结构
type BCP47LanguageTag = {
  tag: string;        // BCP-47 语言标签（如 "zh-CN"）
  name: string;       // 本地化的语言名称
  nativeName: string; // 本地语言名称
  primary: boolean;   // 是否为该语言的主要标签
};

// 所有支持的语言标签名称
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

// 主要语言标签
type PrimaryLanguageTags =
  | "zh-CN" | "en-US" | "ja-JP" | "ko-KR" | "ru-RU"
  | "es-ES" | "fr-FR" | "de-DE" | "it-IT" | "ar-EG"
  | "pt-PT" | "nl-NL";

// 标签记录类型
type BCP47LanguageTags = Record<BCP47LanguageTagName, BCP47LanguageTag>;
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
