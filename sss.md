

const {} form 

import { zhCN } from "bcp47-language-tags/tags/zh-CN/zh-CN"
import { zhTW } from "bcp47-language-tags/tags/zh-CN/zh-TW"
import { zhCN } from "bcp47-language-tags/tags/zh-CN/zh-CN"
const languages = [
  zhCN,
  zhTW
]


// 只导入常用
import { tags, getTag, getTags, addTag,BC  } from "bcp47-language-tags/zh-CN"

// 添加到常用列表中
import { viVN } from "bcp47-language-tags/zh-CN/vi-VN"
import { taIN } from "bcp47-language-tags/zh-CN/ta-IN"

addTag(viVN)
addTag(taIN)

declare module "bcp47-language-tags" {
   interface PrimaryLanguageTags{
      "vi-VN": BCP47LanguageTag
   }    
}
