import { tags as enTags } from "./en";
import { tags as zhTags } from "./zh";
import { tags as jpTags } from "./jp";
import { tags as koTags } from "./ko";
import { tags as ruTags } from "./ru";
import { tags as esTags } from "./es";
import { tags as frTags } from "./fr";
import { tags as deTags } from "./de";
import { tags as itTags } from "./it";
import { tags as arTags } from "./ar"
import { tags as ptTags } from "./pt"
import { tags as nlTags } from "./nl"

import { PrimaryLanguageTages } from "./types";

export default {
    "zh-CN": zhTags,
    "en-US": enTags,
    "ja-JP": jpTags,
    "ko-KR": koTags,
    "ru-RU": ruTags,
    "es-ES": esTags,
    "fr-FR": frTags,
    "de-DE": deTags,
    "it-IT": itTags,
    "ar-EG": arTags,
    "pt-PT": ptTags,
    "nl-NL": nlTags
} as PrimaryLanguageTages

export * from './types'