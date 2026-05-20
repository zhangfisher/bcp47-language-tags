// BCP47 Primary Language Tags Flag Exports

import zhCN from "./flags/zh-CN.svg?raw"; //  简体中文
import enUS from "./flags/en-US.svg?raw"; //  美国英语
import ruRU from "./flags/ru-RU.svg?raw"; //  俄语
import esES from "./flags/es-ES.svg?raw"; //  西班牙语
import frFR from "./flags/fr-FR.svg?raw"; //  法语
import deDE from "./flags/de-DE.svg?raw"; //  德语
import itIT from "./flags/it-IT.svg?raw"; //  意大利语
import arEG from "./flags/ar-EG.svg?raw"; //  阿拉伯语(埃及)
import jaJP from "./flags/ja-JP.svg?raw"; //  日语
import koKR from "./flags/ko-KR.svg?raw"; //  韩语

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
