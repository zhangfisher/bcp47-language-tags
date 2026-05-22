# bcp47-language-tags

[![npm version](https://badge.fury.io/js/bcp47-language-tags.svg)](https://www.npmjs.org/package/bcp47-language-tags)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[中文](./README_CN.md) | [English](./README.md)

BCP-47 标准语言标签完整列表，包含 TypeScript 类型定义、多语言翻译和 SVG/PNG 国旗资源。

## 特性

- 🌍 **180+ 语言标签** - 全面覆盖 BCP-47 标准语言标签
- 🌐 **多语言翻译** - 支持 22 种语言的本地化语言名称
- 🏳️ **国旗资源** - 内置所有支持语言的 SVG 和 PNG 国旗
- 🎯 **TypeScript 支持** - 完整的类型定义，支持类型安全开发
- 🗺️ **映射器支持** - 将 BCP-47 标签转换为 ISO 639-1/2/3 和平台特定代码
- ⚡ **Tree-shakeable** - 仅导入所需内容，支持 Tree-shaking

## 项目结构

```
src/
├── flags/              # 国旗资源目录
│   ├── dataurl/       # Base64 编码的国旗数据
│   ├── png/           # PNG 格式国旗 (32x32)
│   └── svg/           # SVG 格式国旗
├── mapper/            # 语言代码映射器
│   ├── baidu.ts       # 百度翻译 API 映射
│   ├── youdao.ts      # 有道翻译 API 映射
│   ├── tencent.ts     # 腾讯翻译 API 映射
│   ├── xunfei.ts      # 讯飞翻译 API 映射
│   ├── iso639-1.ts    # ISO 639-1 标准映射
│   ├── iso639-2.ts    # ISO 639-2 标准映射
│   └── iso639-3.ts    # ISO 639-3 标准映射
├── tags/              # 多语言标签数据
│   ├── zh-CN/         # 中文本地化数据
│   ├── en-US/         # 英文本地化数据
│   ├── ar-EG/         # 阿拉伯文本地化数据
│   └── ...            # 其他 22 种语言
├── utils/             # 工具函数
│   └── createTagUtils.ts  # 标签工具函数生成器
├── types.ts           # TypeScript 类型定义
└── index.ts           # 主入口文件
```

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

## 使用指南

### 导入常用语言标签

导入带有本地化名称的常用语言标签：

```typescript
import { tags } from "bcp47-language-tags/zh-CN";

for (const tag of tags) {
  console.log(tag);
}
// 输出：
// [
//   { code: 'zh-CN', name: '简体中文', nativeName: '简体中文' },
//   { code: 'zh-TW', name: '繁体中文(台湾)', nativeName: '繁體中文(中國臺灣)' }
//   { code: 'ar-EG', name: '阿拉伯语(埃及)', nativeName: 'العربية (مصر)' },
//   { code: 'de-DE', name: '德语(德国)', nativeName: 'Deutsch (Deutschland)' },
//   { code: 'en-US', name: '英语(美国)',nativeName: 'English (United States)'},
//   { code: 'es-ES', name: '西班牙语(西班牙)', nativeName: 'Español (España)' },
//   { code: 'fr-FR', name: '法语(法国)', nativeName: 'Français (France)' },
//   { code: 'it-IT', name: '意大利语', nativeName: 'Italiano (Italia)' },
//   { code: 'ja-JP', name: '日语', nativeName: '日本語 (日本)' },
//   { code: 'ko-KR', name: '韩语(韩国)', nativeName: '한국어 (대한민국)' },
//   { code: 'ru-RU', name: '俄语', nativeName: 'Русский (Россия)' }
// ]
```

**说明：**
- 默认导入了 11 种常用语言标签
- `code` 是 BCP-47 语言标签代码
- `name` 是根据导入模块而定的本地化语言名称
- `nativeName` 是语言的原生书写形式

### 导入特定语言数据

根据需要选择不同语言的本地化数据：

```typescript
// 导入中文语言数据
import { tags } from "bcp47-language-tags/zh-CN";
// 导入英语语言数据
import { tags } from "bcp47-language-tags/en-US";
```

**支持的导出语言：**

| 语言         | 导入路径                    |
| ------------ | --------------------------- |
| 简体中文     | `bcp47-language-tags/zh-CN` |
| 英语（美国） | `bcp47-language-tags/en-US` |
| 日语         | `bcp47-language-tags/ja-JP` |
| 韩语         | `bcp47-language-tags/ko-KR` |
| 俄语         | `bcp47-language-tags/ru-RU` |
| 西班牙语     | `bcp47-language-tags/es-ES` |
| 法语         | `bcp47-language-tags/fr-FR` |
| 德语         | `bcp47-language-tags/de-DE` |
| 意大利语     | `bcp47-language-tags/it-IT` |
| 阿拉伯语     | `bcp47-language-tags/ar-EG` |
| 葡萄牙语     | `bcp47-language-tags/pt-PT` |
| 荷兰语       | `bcp47-language-tags/nl-NL` |
| 波兰语       | `bcp47-language-tags/pl-PL` |
| 瑞典语       | `bcp47-language-tags/sv-SE` |
| 土耳其语     | `bcp47-language-tags/tr-TR` |
| 泰语         | `bcp47-language-tags/th-TH` |
| 越南语       | `bcp47-language-tags/vi-VN` |
| 印地语       | `bcp47-language-tags/hi-IN` |
| 丹麦语       | `bcp47-language-tags/da-DK` |
| 希腊语       | `bcp47-language-tags/el-GR` |
| 芬兰语       | `bcp47-language-tags/fi-FI` |
| 捷克语       | `bcp47-language-tags/cs-CZ` |

### 扩展语言标签

默认只包含 11 种常用语言，如需添加其他语言标签：

```typescript
// 导入默认标签和工具函数
import { tags, addTag } from 'bcp47-language-tags/zh-CN';

// 导入扩展语言标签
import { enGB } from 'bcp47-language-tags/zh-CN/en-GB';
import { ptBR } from 'bcp47-language-tags/zh-CN/pt-BR';

// 添加到标签列表
addTag(enGB);
addTag(ptBR);

console.log(tags);
// 现在包含新增的语言标签
```

**扩展 TypeScript 类型声明：**

```typescript
declare module "bcp47-language-tags" {
  interface PrimaryLanguageTags {
    "en-GB": BCP47LanguageTag;
    "pt-BR": BCP47LanguageTag;
  }
}
```

### 导入包含国旗的语言标签

如果需要国旗数据：

```typescript
import { tags } from "bcp47-language-tags/with-flags/zh-CN";

for (const tag of tags) {
  console.log(tag);
}
// 输出：
// [
//   { code: 'zh-CN', name: '简体中文', nativeName: '简体中文',
//       flag:"data:image/png;base64,iVBORw0KGgo......" },
//   ...
// ]
```

**说明：**
- 从 `bcp47-language-tags/with-flags/<tag>` 导入包含 PNG 格式国旗的 dataurl
- PNG 国旗大小为 32×24 像素
- 推荐 PNG 格式，大部分场景都能满足需求且文件大小适中（1-2KB）

### 国旗资源使用

**方式一：导入国旗集合（仅限主要语言）**

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

**方式二：直接导入 SVG 国旗**

```typescript
import zhCN from "bcp47-language-tags/flags/svg/zh-CN?raw";
import enUS from "bcp47-language-tags/flags/svg/en-US?raw";
```

**方式三：直接导入 PNG 国旗**

```typescript
import zhCN from "bcp47-language-tags/flags/png/zh-CN?raw";
import enUS from "bcp47-language-tags/flags/png/en-US?raw";
```

**说明：**
- PNG 图片大小为 32×32 像素
- SVG 导入需要支持 SVG 的构建工具（如 Vite）

### 映射器使用

将 BCP-47 语言标签转换为其他标准：

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

// 转换为平台特定代码
baidu["zh-CN"];    // 'zh'
youdao["zh-CN"];   // 'zh'
tencent["zh-CN"];  // 'zh'
xunfei["zh-CN"];   // 'zh'

// 转换为 ISO 639 标准
ISO6391["zh-CN"];  // 'zh'
ISO6392["zh-CN"];  // 'zho'
ISO6393["zh-CN"];  // 'zho'
```

## API 参考

### getTag(code: string): BCP47LanguageTag | undefined

获取特定的语言标签。

```typescript
import { getTag } from "bcp47-language-tags/zh-CN";

getTag("zh-CN"); // { code: "zh-CN", name: "简体中文", nativeName: "简体中文" }
getTag("en-US"); // { code: "en-US", name: "英语（美国）", nativeName: "English (United States)" }
```

### getTags(language?: string | string[]): BCP47LanguageTag[]

获取所有标签或按语言代码筛选。

```typescript
import { getTags } from "bcp47-language-tags/zh-CN";

// 获取所有标签
getTags();

// 按语言筛选
getTags("zh");           // 所有中文变体
getTags(["zh", "en"]);   // 中文和英语变体
getTags(["zh-CN", "en-US"]); // 特定标签
```

### addTag(tag: BCP47LanguageTag): void

添加新的语言标签到标签列表。如果标签已存在则不会重复添加。

```typescript
import { tags, addTag } from "bcp47-language-tags/zh-CN";

// 添加单个语言标签
addTag({
  code: "en-GB",
  name: "英语(英国)",
  nativeName: "English (United Kingdom)",
});
```

### deleteTag(language: string | string[]): void

从标签列表中删除指定语言的标签。

```typescript
import { tags, deleteTag } from "bcp47-language-tags/zh-CN";

// 删除单个语言的所有变体
deleteTag("zh");  // 删除所有中文标签

// 删除多个语言的所有变体
deleteTag(["zh", "en"]);  // 删除所有中文和英文标签
```

## TypeScript 类型

### 导入类型

```typescript
import type {
  BCP47LanguageTag,
  BCP47LanguageTagName,
  BCP47LanguageTags,
} from "bcp47-language-tags";
```

### BCP47LanguageTag

表示单个语言标签及其本地化信息的核心类型。

```typescript
type BCP47LanguageTag<T = string> = {
  code: T;          // BCP-47 语言标签代码（如 "zh-CN"、"en-US"）
  name: string;     // 本地化的语言名称，根据导入的语言模块而定
  nativeName: string; // 语言的原生名称（该语言本身的书写形式）
  flag?: string;    // 可选的国旗数据（base64 编码的 data URL）
};
```

### BCP47LanguageTagName

所有支持的语言标签名称的联合类型。

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

语言标签数组的类型定义。

```typescript
type BCP47LanguageTags = BCP47LanguageTag[];
```

### PrimaryLanguageTags

主要语言标签的接口类型，定义了 11 种最常用的语言标签映射关系。

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

主要语言的联合类型。

```typescript
type PrimaryLanguage = keyof PrimaryLanguageTags;
// 等价于：
// type PrimaryLanguage = "zh-CN" | "zh-TW" | "en-US" | "ru-RU" | "es-ES" |
//                       "fr-FR" | "de-DE" | "it-IT" | "ar-EG" | "ja-JP" | "ko-KR";
```

### PrimaryLanguageTagList

主要语言标签数组的类型。

```typescript
type PrimaryLanguageTagList = BCP47LanguageTag<PrimaryLanguage>[];
```

## 许可证

[MIT](LICENSE)

## 相关项目

- [VoerkaI18n](https://zhangfisher.github.io/voerka-i18n/) - React/Vue/Nodejs/Solidjs 国际化解决方案
- [AutoStore](https://zhangfisher.github.io/autostore/) - 响应式状态管理库
- [Logsets](https://zhangfisher.github.io/logsets/) - 终端界面开发增强库
- [VoerkaLogger](https://zhangfisher.github.io/voerkalogger/) - 日志输出库
- [FlexDecorators](https://zhangfisher.github.io/flex-decorators/) - 装饰器开发工具
- [FlexState](https://zhangfisher.github.io/flexstate/) - 有限状态机库
- [FlexTools](https://zhangfisher.github.io/flex-tools/) - 通用函数工具库
- [FlexStyled](https://zhangfisher.github.io/flexstyled/) - CSS-IN-JS 库
