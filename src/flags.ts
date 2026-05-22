// BCP47 Primary Language Tags Flag Exports

import zhCN from "./flags/dataurl/zh-CN"; //  简体中文
import enUS from "./flags/dataurl/en-US"; //  美国英语
import ruRU from "./flags/dataurl/ru-RU"; //  俄语
import esES from "./flags/dataurl/es-ES"; //  西班牙语
import frFR from "./flags/dataurl/fr-FR"; //  法语
import deDE from "./flags/dataurl/de-DE"; //  德语
import itIT from "./flags/dataurl/it-IT"; //  意大利语
import arEG from "./flags/dataurl/ar-EG"; //  阿拉伯语(埃及)
import jaJP from "./flags/dataurl/ja-JP"; //  日语
import koKR from "./flags/dataurl/ko-KR"; //  韩语

const zhTW = zhCN;
// Named exports
export {
  zhCN, //  简体中文
  zhTW, //  繁体中文
  enUS, //  美国英语
  ruRU, //  俄语
  esES, //  西班牙语
  frFR, //  法语
  deDE, //  德语
  itIT, //  意大利语
  arEG, //  阿拉伯语(埃及)
  jaJP, //  日语
  koKR, //  韩语
};

// Default export - all primary language flags
export default {
  zhCN, //  简体中文
  zhTW, //  繁体中文
  enUS, //  美国英语
  ruRU, //  俄语
  esES, //  西班牙语
  frFR, //  法语
  deDE, //  德语
  itIT, //  意大利语
  arEG, //  阿拉伯语(埃及)
  jaJP, //  日语
  koKR, //  韩语
} as const;
