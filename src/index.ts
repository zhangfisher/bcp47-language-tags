import { tags as  arTags } from "./ar"
import { tags as  csTags } from "./cs"
import { tags as  daTags } from "./da"
import { tags as  deTags } from "./de"
import { tags as  elTags } from "./el"
import { tags as  enTags } from "./en"   
import { tags as  esTags } from "./es"
import { tags as  fiTags } from "./fi"
import { tags as  frTags } from "./fr"
import { tags as  hiTags } from "./hi"
import { tags as  itTags } from "./it"
import { tags as  jpTags } from "./jp"
import { tags as  koTags } from "./ko"
import { tags as  nlTags } from "./nl"
import { tags as  plTags } from "./pl"
import { tags as  ptTags } from "./pt"
import { tags as  ruTags } from "./ru"
import { tags as  svTags } from "./sv"
import { tags as  thTags } from "./th"
import { tags as  trTags } from "./tr"
import { tags as  viTags } from "./vi"
import { tags as  zhTags } from "./zh"

import { PrimaryLanguageTages } from "./types";

export default {
    "zh-CN": zhTags, //  简体中文
    "en-US": enTags, //  美国英语
    "ja-JP": jpTags, //  日语
    "ko-KR": koTags, //  韩语
    "ru-RU": ruTags, //  俄语
    "es-ES": esTags, //  西班牙语
    "fr-FR": frTags, //  法语
    "de-DE": deTags, //  德语
    "it-IT": itTags, //  意大利语
    "ar-EG": arTags, //  阿拉伯语
    "pt-PT": ptTags, //  葡萄牙语
    "nl-NL": nlTags, //  荷兰语
    "cs-CZ": csTags, //  捷克语
    "da-DK": daTags, //  丹麦语
    "fi-FI": fiTags, //  芬兰语
    "hi-IN": hiTags, //  印地语
    "pl-PL": plTags, //  波兰语
    "sv-SE": svTags, //  瑞典语
    "th-TH": thTags, //  泰语
    "tr-TR": trTags, //  土耳其语
    "vi-VN": viTags, //  越南语
    "el-GR": elTags, //  希腊语
} as PrimaryLanguageTages

export * from './types'




