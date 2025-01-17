# bcp47-language-tags

list of language tags and typescript type for the `BCP-47` standard.

## Usage

### List of language tags

```typescript
import { tags } from 'bcp-language-tags/en';

// list of language tags
for(let tag of tags) {
    console.log(tag);
}
// output：
//    {"tag": "zh-CN", "name": "Chinese (Simplified)", "nativeName": "简体中文", "primary": true},
//    {"tag": "zh-TW", "name": "Chinese (Traditional - Taiwan)", "nativeName": "繁體中文 (臺灣)"},
//    {"tag": "zh-HK", "name": "Chinese (Traditional - Hong Kong)", "nativeName": "繁體中文（香港）"},
//    {"tag": "zh-MO", "name": "Chinese (Traditional - Macau)", "nativeName": "繁體中文 (Traditional Chinese - Macau)"},
//    {"tag": "zh-SG", "name": "Chinese (Simplified - Singapore)", "nativeName": "简体中文 (Simplified Chinese - Singapore)"},      
//    {"tag": "zh-CHS", "name": "Chinese (Simplified)", "nativeName": "简体中文"},
//    {"tag": "zh-CHT", "name": "Chinese (Traditional)", "nativeName": "繁體中文 (Traditional Chinese)"},
//    {"tag": "en-US", "name": "English (United States)", "nativeName": "English (United States)", "primary": true},
//    {"tag": "es-CR", "name": "Spanish (Costa Rica)", "nativeName": "Español (Costa Rica)"},
//    {"tag": "ar-EG", "name": "Arabic (Egypt)", "nativeName": "العربية (مصر)", "primary": true},
//    {"tag": "ar-SA", "name": "Arabic (Saudi Arabia)", "nativeName": "العربية (السعودية)"},
//    {"tag": "ar-DZ", "name": "Arabic (Algeria)", "nativeName": "العربية (الجزائر)"},
//    {"tag": "ar-MA", "name": "Arabic (Morocco)", "nativeName": "العربية (المغرب)"},
//    {"tag": "ar-IQ", "name": "Arabic (Iraq)", "nativeName": "العربية (العراق)"},
//    {"tag": "ar-SD", "name": "Arabic (Sudan)", "nativeName": "العربية (السودان)"},
//    .....
import { tags } from 'bcp-language-tags/zh';

for(let tag of tags) {
    console.log(tag);
}
// output：
//    "zh-CN": {"tag": "zh-CN", "name": "简体中文", "nativeName": "简体中文", "primary": true},
//    "zh-TW": {"tag": "zh-TW", "name": "繁体中文（台湾）", "nativeName": "繁體中文 (臺灣)"}, 
//    "zh-CHS": {"tag": "zh-CHS", "name": "简体中文", "nativeName": "简体中文"},
//    "zh-CHT": {"tag": "zh-CHT", "name": "繁体中文", "nativeName": "繁體中文 (Traditional Chinese)"},
//    "en-US": {"tag": "en-US", "name": "英语（美国）", "nativeName": "English (United States)", "primary": true},
//    "en-GB": {"tag": "en-GB", "name": "英语（英国）", "nativeName": "English (United Kingdom)"},
//    "en-IN": {"tag": "en-IN", "name": "英语（印度）", "nativeName": "English (India)"},
//    "en-CA": {"tag": "en-CA", "name": "英语（加拿大）", "nativeName": "English (Canada)"},  
//    "es-GT": {"tag": "es-GT", "name": "西班牙语（危地马拉）", "nativeName": "Español (Guatemala)"}, 
//    "ar-SA": {"tag": "ar-SA", "name": "阿拉伯语（沙特阿拉伯）", "nativeName": "العربية (السعودية)"},
//    "ar-DZ": {"tag": "ar-DZ", "name": "阿拉伯语（阿尔及利亚）", "nativeName": "العربية (الجزائر)"},
//    "ar-MA": {"tag": "ar-MA", "name": "阿拉伯语（摩洛哥）", "nativeName": "العربية (المغرب)"},
//    "ar-IQ": {"tag": "ar-IQ", "name": "阿拉伯语（伊拉克）", "nativeName": "العربية (العراق)"},
//    "ar-SD": {"tag": "ar-SD", "name": "阿拉伯语（苏丹）", "nativeName": "العربية (السودان)"},
//    ...

// Supoort language :
import { tags } from 'bcp-language-tags/zh'
import { tags } from 'bcp-language-tags/de'
import { tags } from 'bcp-language-tags/en';
import { tags } from 'bcp-language-tags/es';
import { tags } from 'bcp-language-tags/fr';
import { tags } from 'bcp-language-tags/it';
import { tags } from 'bcp-language-tags/jp';
import { tags } from 'bcp-language-tags/ko';
import { tags } from 'bcp-language-tags/ru';
import { tags } from 'bcp-language-tags/ar';
import { tags } from 'bcp-language-tags/pt';
import { tags } from 'bcp-language-tags/nl';
```

### List of all language tags

```typescript
import allTags  from 'bcp-language-tags';
// {
//    "zh-CN": {
//          "zh-CN": {"tag": "zh-CN", "name": "简体中文", "nativeName": "简体中文", "primary": true},
//          "zh-TW": {"tag": "zh-TW", "name": "繁体中文（台湾）", "nativeName": "繁體中文 (臺灣)"}, 
//          "zh-CHS": {"tag": "zh-CHS", "name": "简体中文", "nativeName": "简体中文"},
//          "zh-CHT": {"tag": "zh-CHT", "name": "繁体中文", "nativeName": "繁體中文 (Traditional Chinese)"},
//          "en-US": {"tag": "en-US", "name": "英语（美国）", "nativeName": "English (United States)", "primary": true},
//          ....
//     },
//     "en-US": {
//          "zh-CN": {"tag": "zh-CN", "name": "Chinese (Simplified)", "nativeName": "简体中文", "primary": true},
//          "zh-TW": {"tag": "zh-TW", "name": "Chinese (Traditional - Taiwan)", "nativeName": "繁體中文 (臺灣)"},
//          "zh-HK": {"tag": "zh-HK", "name": "Chinese (Traditional - Hong Kong)", "nativeName": "繁體中文（香港）"},
//          "zh-MO": {"tag": "zh-MO", "name": "Chinese (Traditional - Macau)", "nativeName": "繁體中文 (Traditional Chinese - Macau)
//          .....
//      }
// }

```


### TypeScript

```typescript
import type { BCP47LanguageTag,BCP47LanguageTagName } from 'bcp-language-tags/zh';
// import type { BCP47LanguageTag } from 'bcp-language-tags/en';

// BCP47LanguageTag type

export type BCP47LanguageTagName = 
  // 简体中文 | 繁体中文(台湾) | 繁体中文(香港) | 繁体中文(澳门) | 简体中文(新加坡) | 简体中文 | 繁体中文 | 英语(美国) | 英语(英国) | 英语(加拿大)
  | "zh-CN" | "zh-TW" | "zh-HK" | "zh-MO" | "zh-SG" | "zh-CHS" | "zh-CHT" | "en-US" | "en-GB" | "en-CA"
  // 英语(澳大利亚) | 英语(印度) | 英语(南非) | 英语(新西兰) | 英语(爱尔兰) | 英语(菲律宾) | 英语(津巴布韦) | 英语(伯利兹) | 英语(加勒比) | 英语(牙买加)
  | "en-AU" | "en-IN" | "en-ZA" | "en-NZ" | "en-IE" | "en-PH" | "en-ZW" | "en-BZ" | "en-CB" | "en-JM"
  // 英语(特立尼达和多巴哥) | 印地语(印度) | 西班牙语(西班牙) | 西班牙语(墨西哥) | 西班牙语(阿根廷) | 西班牙语(哥伦比亚) | 西班牙语(秘鲁) | 西班牙语(委内瑞拉) | 西班牙语(智利) | 西班牙语(厄瓜多尔)
  | "en-TT" | "hi-IN" | "es-ES" | "es-MX" | "es-AR" | "es-CO" | "es-PE" | "es-VE" | "es-CL" | "es-EC"
  // 西班牙语(危地马拉) | 西班牙语(古巴) | 西班牙语(玻利维亚) | 西班牙语(多米尼加共和国) | 西班牙语(洪都拉斯) | 西班牙语(巴拉圭) | 西班牙语(萨尔瓦多) | 西班牙语(尼加拉瓜) | 西班牙语(波多黎各) | 西班牙语(乌拉圭)
  | "es-GT" | "es-CU" | "es-BO" | "es-DO" | "es-HN" | "es-PY" | "es-SV" | "es-NI" | "es-PR" | "es-UY"
  // 西班牙语(巴拿马) | 西班牙语(哥斯达黎加) | 阿拉伯语(埃及) | 阿拉伯语(沙特阿拉伯) | 阿拉伯语(阿尔及利亚) | 阿拉伯语(摩洛哥) | 阿拉伯语(伊拉克) | 阿拉伯语(苏丹) | 阿拉伯语(也门) | 阿拉伯语(叙利亚)
  | "es-PA" | "es-CR" | "ar-EG" | "ar-SA" | "ar-DZ" | "ar-MA" | "ar-IQ" | "ar-SD" | "ar-YE" | "ar-SY"
  // 阿拉伯语(突尼斯) | 阿拉伯语(利比亚) | 阿拉伯语(约旦) | 阿拉伯语(黎巴嫩) | 阿拉伯语(科威特) | 阿拉伯语(阿联酋) | 阿拉伯语(巴林) | 阿拉伯语(卡塔尔) | 阿拉伯语(阿曼) | 葡萄牙语(巴西)
  | "ar-TN" | "ar-LY" | "ar-JO" | "ar-LB" | "ar-KW" | "ar-AE" | "ar-BH" | "ar-QA" | "ar-OM" | "pt-BR"
  // 葡萄牙语(葡萄牙) | 俄语(俄罗斯) | 日语(日本) | 德语(德国) | 德语(奥地利) | 德语(瑞士) | 法语(法国) | 法语(加拿大) | 法语(比利时) | 法语(瑞士)
  | "pt-PT" | "ru-RU" | "ja-JP" | "de-DE" | "de-AT" | "de-CH" | "fr-FR" | "fr-CA" | "fr-BE" | "fr-CH"
  // 法语(卢森堡) | 法语(摩纳哥) | 韩语(韩国) | 意大利语(意大利) | 意大利语(瑞士) | 土耳其语 | 泰语 | 希腊语 | 捷克语 | 瑞典语
  | "fr-LU" | "fr-MC" | "ko-KR" | "it-IT" | "it-CH" | "tr-TR" | "th-TH" | "el-GR" | "cs-CZ" | "sv-SE"
  // 瑞典语(芬兰) | 匈牙利语 | 芬兰语 | 丹麦语 | 挪威博克马尔语 | 挪威尼诺斯克语 | 希伯来语 | 印度尼西亚语 | 马来语(马来西亚) | 马来语(文莱)
  | "sv-FI" | "hu-HU" | "fi-FI" | "da-DK" | "nb-NO" | "nn-NO" | "he-IL" | "id-ID" | "ms-MY" | "ms-BN"
  // 罗马尼亚语 | 保加利亚语 | 乌克兰语 | 斯洛伐克语 | 斯洛文尼亚语 | 克罗地亚语 | 加泰罗尼亚语 | 立陶宛语 | 拉脱维亚语 | 爱沙尼亚语
  | "ro-RO" | "bg-BG" | "uk-UA" | "sk-SK" | "sl-SI" | "hr-HR" | "ca-ES" | "lt-LT" | "lv-LV" | "et-EE"
  // 阿尔巴尼亚语 | 马其顿语 | 白俄罗斯语 | 冰岛语 | 加利西亚语 | 巴斯克语 | 南非荷兰语 | 斯瓦希里语 | 泰米尔语 | 泰卢固语
  | "sq-AL" | "mk-MK" | "be-BY" | "is-IS" | "gl-ES" | "eu-ES" | "af-ZA" | "sw-KE" | "ta-IN" | "te-IN"
  // 卡纳达语 | 马拉地语 | 古吉拉特语 | 旁遮普语 | 孔卡尼语 | 梵语 | 乌尔都语 | 波斯语 | 叙利亚语 | 迪维希语
  | "kn-IN" | "mr-IN" | "gu-IN" | "pa-IN" | "kok-IN" | "sa-IN" | "ur-PK" | "fa-IR" | "syr-SY" | "div-MV"
  // 格鲁吉亚语
  | "ka-GE";


export type BCP47LanguageTag = {
    tag: string 
    name: string
    nativeName: string
    default?: boolean
}

export type BCP47LanguageTags = Record<BCP47LanguageTagName,BCP47LanguageTag>
```

## API

### getTag(tag: string): BCP47LanguageTag

get language tag.

```typescript

// import { getTag,getTags } from 'bcp-language-tags/zh'; 
import { getTag } from 'bcp-language-tags/en';   

// {"tag": "zh-CN", "name": "Chinese (Simplified)", "nativeName": "简体中文", "primary": true}
getTag('zh-CN') 
// {"tag": "zh-TW", "name": "Chinese (Traditional - Taiwan)", "nativeName": "繁體中文 (臺灣)"}
getTag('zh-TW') 
// {"tag": "en-US", "name": "English (United States)", "nativeName": "English (United States)", "primary": true}
getTag('en-US') 

// return default language tag
// {"tag": "zh-CN", "name": "Chinese (Simplified)", "nativeName": "简体中文", "primary": true}
getTag('zh') 
// {"tag": "en-US", "name": "English (United States)", "nativeName": "English (United States)", "primary": true}
getTag('en') 
```

### getTags(tag: string): BCP47LanguageTag[]

list of language tags.

```typescript
// return all language tags
getTags("zh")
// output：
//   [
//      {"tag": "zh-CN", "name": "Chinese (Simplified)", "nativeName": "简体中文", "primary": true}
//      {"tag": "zh-TW", "name": "Chinese (Traditional - Taiwan)", "nativeName": "繁體中文 (臺灣)"}
//      {"tag": "zh-HK", "name": "Chinese (Traditional - Hong Kong)", "nativeName": "繁體中文（香港）"}
//      {"tag": "zh-MO", "name": "Chinese (Traditional - Macau)", "nativeName": "繁體中文 (Traditional Chinese - Macau)"}
//      {"tag": "zh-SG", "name": "Chinese (Simplified - Singapore)", "nativeName": "简体中文 (Simplified Chinese - Singapore)"}
//      {"tag": "zh-CHS", "name": "Chinese (Simplified)", "nativeName": "简体中文"}
//      {"tag": "zh-CHT", "name": "Chinese (Traditional)", "nativeName": "繁體中文 (Traditional Chinese)"}
//   ]

getTags(["zh","en"])

getTags(["zh-CN","en-US"])

```

### getPrimaryTags(): BCP47LanguageTag[]

list of primary language tags.

```typescript
// return primary language tags
getPrimaryTags()
[
    {"tag": "zh-CN", "name": "Chinese (Simplified)", "nativeName": "简体中文", "primary": true},
    {"tag": "en-US", "name": "English (United States)", "nativeName": "English (United States)", "primary": true}
    {"tag": "es-ES", "name": "Spanish (Spain)", "nativeName": "Español (España)", "primary": true },
    {"tag": "de-DE", "name": "German (Germany)", "nativeName": "Deutsch (Deutschland)", "primary": true },
    {"tag": "fr-FR", "name": "French (France)", "nativeName": "Français (France)", "primary": true },
    {"tag": "it-IT", "name": "Italian (Italy)", "nativeName": "Italiano (Italia)", "primary": true },
    {"tag": "ja-JP", "name": "Japanese (Japan)", "nativeName": "日本語 (日本)", "primary": true },
    {"tag": "ko-KR", "name": "Korean (South Korea)", "nativeName": "한국어 (대한민국)", "primary": true },
    {"tag": "ru-RU", "name": "Russian (Russia)", "nativeName": "Русский (Россия)", "primary": true },
    {"tag": "nl-NL", "name": "Dutch (Netherlands)", "nativeName": "Nederlands (Nederland)", "primary": true },
    {"tag": "pt-PT", "name": "Portuguese (Portugal)", "nativeName": "Português (Portugal)", "primary": true },
    {"tag": "ar-EG", "name": "Arabic (Egypt)", "nativeName": "العربية (مصر)", "primary": true }
]
```
