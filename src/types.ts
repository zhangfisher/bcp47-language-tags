
   
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
    tag       : string 
    name      : string
    nativeName: string
    primary   : boolean 
}

export type BCP47LanguageTags = Record<BCP47LanguageTagName,BCP47LanguageTag>

export type PrimaryLanguageTags = 
  "zh-CN" 
  | "en-US" 
  | "ja-JP" 
  | "ko-KR" 
  | "ru-RU" 
  | "es-ES" 
  | "fr-FR" 
  | "de-DE" 
  | "it-IT" 
  | "ar-EG" 
  | "pt-PT" 
  | "nl-NL" 

export type PrimaryLanguageTages = Record<PrimaryLanguageTags,BCP47LanguageTags>