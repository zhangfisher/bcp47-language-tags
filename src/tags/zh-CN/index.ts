import { createTagUtils } from "../../utils/createTagUtils";
import { PrimaryLanguageTagList } from "../../types";

import { arEG } from "./ar-EG";
import { deDE } from "./de-DE";
import { enUS } from "./en-US";
import { esES } from "./es-ES";
import { frFR } from "./fr-FR";
import { itIT } from "./it-IT";
import { jaJP } from "./ja-JP";
import { koKR } from "./ko-KR";
import { ruRU } from "./ru-RU";
import { zhCN } from "./zh-CN";
import { zhTW } from "./zh-TW";

const tags = [
  arEG,
  deDE,
  enUS,
  esES,
  frFR,
  itIT,
  jaJP,
  koKR,
  ruRU,
  zhCN,
  zhTW,
] as PrimaryLanguageTagList;

const { getTag, getTags, addTag, deleteTag } = createTagUtils(tags);

export { tags, getTag, getTags, addTag, deleteTag };
export default { tags, getTag, getTags, addTag, deleteTag };

export * from "../../types";
