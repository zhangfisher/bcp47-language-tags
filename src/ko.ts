import { createTagUtils } from './utils'

export const tags = {
    "zh-CN": {"tag": "zh-CN", "name": "중국어 (간체)", "nativeName": "简体中文", "primary": true },
    "zh-TW": {"tag": "zh-TW", "name": "중국어 (번체 - 대만)", "nativeName": "繁體中文 (臺灣)", "primary": false},
    "zh-HK": {"tag": "zh-HK", "name": "중국어 (번체 - 홍콩)", "nativeName": "繁體中文（香港）", "primary": false},
    "zh-MO": {"tag": "zh-MO", "name": "중국어 (번체 - 마카오)", "nativeName": "繁體中文 (Traditional Chinese - Macau)", "primary": false},
    "zh-SG": {"tag": "zh-SG", "name": "중국어 (간체 - 싱가포르)", "nativeName": "简体中文 (Simplified Chinese - Singapore)", "primary": false},      
    "zh-CHS": {"tag": "zh-CHS", "name": "중국어 (간체)", "nativeName": "简体中文", "primary": false},
    "zh-CHT": {"tag": "zh-CHT", "name": "중국어 (번체)", "nativeName": "繁體中文 (Traditional Chinese)", "primary": false},
    "en-US": {"tag": "en-US", "name": "영어 (미국)", "nativeName": "English (United States)", "primary": true },
    "en-GB": {"tag": "en-GB", "name": "영어 (영국)", "nativeName": "English (United Kingdom)", "primary": false},
    "en-CA": {"tag": "en-CA", "name": "영어 (캐나다)", "nativeName": "English (Canada)", "primary": false},
    "en-AU": {"tag": "en-AU", "name": "영어 (호주)", "nativeName": "English (Australia)", "primary": false},
    "en-IN": {"tag": "en-IN", "name": "영어 (인도)", "nativeName": "English (India)", "primary": false},
    "en-ZA": {"tag": "en-ZA", "name": "영어 (남아프리카)", "nativeName": "English (South Africa)", "primary": false},
    "en-NZ": {"tag": "en-NZ", "name": "영어 (뉴질랜드)", "nativeName": "English (New Zealand)", "primary": false},
    "en-IE": {"tag": "en-IE", "name": "영어 (아일랜드)", "nativeName": "English (Ireland)", "primary": false},
    "en-PH": {"tag": "en-PH", "name": "영어 (필리핀)", "nativeName": "English (Philippines)", "primary": false},
    "en-ZW": {"tag": "en-ZW", "name": "영어 (짐바브웨)", "nativeName": "English (Zimbabwe)", "primary": false},
    "en-BZ": {"tag": "en-BZ", "name": "영어 (벨리즈)", "nativeName": "English (Belize)", "primary": false},
    "en-CB": {"tag": "en-CB", "name": "영어 (카리브해)", "nativeName": "English (Caribbean)", "primary": false},
    "en-JM": {"tag": "en-JM", "name": "영어 (자메이카)", "nativeName": "English (Jamaica)", "primary": false},
    "en-TT": {"tag": "en-TT", "name": "영어 (트리니다드 토바고)", "nativeName": "English (Trinidad and Tobago)", "primary": false},
    "hi-IN": {"tag": "hi-IN", "name": "힌디어 (인도)", "nativeName": "हिन्दी (Hindi)", "primary": false},
    "es-ES": {"tag": "es-ES", "name": "스페인어 (스페인)", "nativeName": "Español (España)", "primary": true },
    "es-MX": {"tag": "es-MX", "name": "스페인어 (멕시코)", "nativeName": "Español (México)", "primary": false},
    "es-AR": {"tag": "es-AR", "name": "스페인어 (아르헨티나)", "nativeName": "Español (Argentina)", "primary": false},
    "es-CO": {"tag": "es-CO", "name": "스페인어 (콜롬비아)", "nativeName": "Español (Colombia)", "primary": false},
    "es-PE": {"tag": "es-PE", "name": "스페인어 (페루)", "nativeName": "Español (Perú)", "primary": false},
    "es-VE": {"tag": "es-VE", "name": "스페인어 (베네수엘라)", "nativeName": "Español (Venezuela)", "primary": false},
    "es-CL": {"tag": "es-CL", "name": "스페인어 (칠레)", "nativeName": "Español (Chile)", "primary": false},
    "es-EC": {"tag": "es-EC", "name": "스페인어 (에콰도르)", "nativeName": "Español (Ecuador)", "primary": false},
    "es-GT": {"tag": "es-GT", "name": "스페인어 (과테말라)", "nativeName": "Español (Guatemala)", "primary": false},
    "es-CU": {"tag": "es-CU", "name": "스페인어 (쿠바)", "nativeName": "Español (Cuba)", "primary": false},
    "es-BO": {"tag": "es-BO", "name": "스페인어 (볼리비아)", "nativeName": "Español (Bolivia)", "primary": false},
    "es-DO": {"tag": "es-DO", "name": "스페인어 (도미니카 공화국)", "nativeName": "Español (República Dominicana)", "primary": false},
    "es-HN": {"tag": "es-HN", "name": "스페인어 (온두라스)", "nativeName": "Español (Honduras)", "primary": false},
    "es-PY": {"tag": "es-PY", "name": "스페인어 (파라과이)", "nativeName": "Español (Paraguay)", "primary": false},
    "es-SV": {"tag": "es-SV", "name": "스페인어 (엘살바도르)", "nativeName": "Español (El Salvador)", "primary": false},
    "es-NI": {"tag": "es-NI", "name": "스페인어 (니카라과)", "nativeName": "Español (Nicaragua)", "primary": false},
    "es-PR": {"tag": "es-PR", "name": "스페인어 (푸에르토리코)", "nativeName": "Español (Puerto Rico)", "primary": false},
    "es-UY": {"tag": "es-UY", "name": "스페인어 (우루과이)", "nativeName": "Español (Uruguay)", "primary": false},
    "es-PA": {"tag": "es-PA", "name": "스페인어 (파나마)", "nativeName": "Español (Panamá)", "primary": false},
    "es-CR": {"tag": "es-CR", "name": "스페인어 (코스타리카)", "nativeName": "Español (Costa Rica)", "primary": false},
    "ar-EG": {"tag": "ar-EG", "name": "아랍어 (이집트)", "nativeName": "العربية (مصر)", "primary": true },
    "ar-SA": {"tag": "ar-SA", "name": "아랍어 (사우디아라비아)", "nativeName": "العربية (السعودية)", "primary": false},
    "ar-DZ": {"tag": "ar-DZ", "name": "아랍어 (알제리)", "nativeName": "العربية (الجزائر)", "primary": false},
    "ar-MA": {"tag": "ar-MA", "name": "아랍어 (모로코)", "nativeName": "العربية (المغرب)", "primary": false},
    "ar-IQ": {"tag": "ar-IQ", "name": "아랍어 (이라크)", "nativeName": "العربية (العراق)", "primary": false},
    "ar-SD": {"tag": "ar-SD", "name": "아랍어 (수단)", "nativeName": "العربية (السودان)", "primary": false},
    "ar-YE": {"tag": "ar-YE", "name": "아랍어 (예멘)", "nativeName": "العربية (اليمن)", "primary": false}, 
    "ar-SY": {"tag": "ar-SY", "name": "아랍어 (시리아)", "nativeName": "العربية (سوريا)", "primary": false},
    "ar-TN": {"tag": "ar-TN", "name": "아랍어 (튀니지)", "nativeName": "العربية (تونس)", "primary": false},
    "ar-LY": {"tag": "ar-LY", "name": "아랍어 (리비아)", "nativeName": "العربية (ليبيا)", "primary": false},
    "ar-JO": {"tag": "ar-JO", "name": "아랍어 (요르단)", "nativeName": "العربية (الأردن)", "primary": false},
    "ar-LB": {"tag": "ar-LB", "name": "아랍어 (레바논)", "nativeName": "العربية (لبنان)", "primary": false},
    "ar-KW": {"tag": "ar-KW", "name": "아랍어 (쿠웨이트)", "nativeName": "العربية (الكويت)", "primary": false},
    "ar-AE": {"tag": "ar-AE", "name": "아랍어 (아랍에미리트)", "nativeName": "العربية (الإمارات)", "primary": false},
    "ar-BH": {"tag": "ar-BH", "name": "아랍어 (바레인)", "nativeName": "العربية (البحرين)", "primary": false},
    "ar-QA": {"tag": "ar-QA", "name": "아랍어 (카타르)", "nativeName": "العربية (قطر)", "primary": false},
    "ar-OM": {"tag": "ar-OM", "name": "아랍어 (오만)", "nativeName": "العربية (عمان)", "primary": false},
    "pt-BR": {"tag": "pt-BR", "name": "포르투갈어 (브라질)", "nativeName": "Português (Brasil)", "primary": false},
    "pt-PT": {"tag": "pt-PT", "name": "포르투갈어 (포르투갈)", "nativeName": "Português (Portugal)", "primary": true },
    "ru-RU": {"tag": "ru-RU", "name": "러시아어 (러시아)", "nativeName": "Русский (Россия)", "primary": true },
    "ja-JP": {"tag": "ja-JP", "name": "일본어 (일본)", "nativeName": "日本語 (日本)", "primary": true },
    "de-DE": {"tag": "de-DE", "name": "독일어 (독일)", "nativeName": "Deutsch (Deutschland)", "primary": true },
    "de-AT": {"tag": "de-AT", "name": "독일어 (오스트리아)", "nativeName": "Deutsch (Österreich)", "primary": false},
    "de-CH": {"tag": "de-CH", "name": "독일어 (스위스)", "nativeName": "Deutsch (Schweiz)", "primary": false},
    "fr-FR": {"tag": "fr-FR", "name": "프랑스어 (프랑스)", "nativeName": "Français (France)", "primary": true },
    "fr-CA": {"tag": "fr-CA", "name": "프랑스어 (캐나다)", "nativeName": "Français (Canada)", "primary": false},
    "fr-BE": {"tag": "fr-BE", "name": "프랑스어 (벨기에)", "nativeName": "Français (Belgique)", "primary": false},
    "fr-CH": {"tag": "fr-CH", "name": "프랑스어 (스위스)", "nativeName": "Français (Suisse)", "primary": false},
    "fr-LU": {"tag": "fr-LU", "name": "프랑스어 (룩셈부르크)", "nativeName": "Français (Luxembourg)", "primary": false},
    "fr-MC": {"tag": "fr-MC", "name": "프랑스어 (모나코)", "nativeName": "Français (Monaco)", "primary": false},
    "ko-KR": {"tag": "ko-KR", "name": "한국어 (대한민국)", "nativeName": "한국어 (대한민국)", "primary": true},
    "it-IT": {"tag": "it-IT", "name": "이탈리아어 (이탈리아)", "nativeName": "Italiano (Italia)", "primary": true},
    "it-CH": {"tag": "it-CH", "name": "이탈리아어 (스위스)", "nativeName": "Italiano (Svizzera)", "primary": false},
    "nl-NL": {"tag": "nl-NL", "name": "네덜란드어 (네덜란드)", "nativeName": "Nederlands (Nederland)", "primary": true},
    "nl-BE": {"tag": "nl-BE", "name": "네덜란드어 (벨기에)", "nativeName": "Nederlands (België)", "primary": false},
    "pl-PL": {"tag": "pl-PL", "name": "폴란드어 (폴란드)", "nativeName": "Polski (Polska)", "primary": false},
    "vi-VN": {"tag": "vi-VN", "name": "베트남어 (베트남)", "nativeName": "Tiếng Việt (Việt Nam)", "primary": false},
    "tr-TR": {"tag": "tr-TR", "name": "터키어 (터키)", "nativeName": "Türkçe (Türkiye)", "primary": false},
    "th-TH": {"tag": "th-TH", "name": "태국어 (태국)", "nativeName": "ไทย (ประเทศไทย)", "primary": false},
    "el-GR": {"tag": "el-GR", "name": "그리스어 (그리스)", "nativeName": "Ελληνικά (Ελλάδα)", "primary": false},
    "cs-CZ": {"tag": "cs-CZ", "name": "체코어 (체코)", "nativeName": "Čeština (Česká republika)", "primary": false},
    "sv-SE": {"tag": "sv-SE", "name": "스웨덴어 (스웨덴)", "nativeName": "Svenska (Sverige)", "primary": false },
    "sv-FI": {"tag": "sv-FI", "name": "스웨덴어 (핀란드)", "nativeName": "Svenska (Finland)", "primary": false},
    "hu-HU": {"tag": "hu-HU", "name": "헝가리어 (헝가리)", "nativeName": "Magyar (Magyarország)", "primary": false},
    "fi-FI": {"tag": "fi-FI", "name": "핀란드어 (핀란드)", "nativeName": "Suomi (Suomi)", "primary": false},
    "da-DK": {"tag": "da-DK", "name": "덴마크어 (덴마크)", "nativeName": "Dansk (Danmark)", "primary": false},
    "nb-NO": {"tag": "nb-NO", "name": "노르웨이어 보크몰 (노르웨이)", "nativeName": "Norsk Bokmål (Norge)", "primary": false},
    "nn-NO": {"tag": "nn-NO", "name": "노르웨이어 뉘노르스크 (노르웨이)", "nativeName": "Norsk Nynorsk (Norge)", "primary": false},
    "he-IL": {"tag": "he-IL", "name": "히브리어 (이스라엘)", "nativeName": "עברית (ישראל)", "primary": false},
    "id-ID": {"tag": "id-ID", "name": "인도네시아어 (인도네시아)", "nativeName": "Bahasa Indonesia (Indonesia)", "primary": false},
    "ms-MY": {"tag": "ms-MY", "name": "말레이어 (말레이시아)", "nativeName": "Bahasa Melayu (Malaysia)", "primary": false},
    "ms-BN": {"tag": "ms-BN", "name": "말레이어 (브루나이)", "nativeName": "Bahasa Melayu (Brunei)", "primary": false},
    "ro-RO": {"tag": "ro-RO", "name": "루마니아어 (루마니아)", "nativeName": "Română (România)", "primary": false},
    "bg-BG": {"tag": "bg-BG", "name": "불가리아어 (불가리아)", "nativeName": "Български (България)", "primary": false},
    "uk-UA": {"tag": "uk-UA", "name": "우크라이나어 (우크라이나)", "nativeName": "Українська (Україна)", "primary": false},
    "sk-SK": {"tag": "sk-SK", "name": "슬로바키아어 (슬로바키아)", "nativeName": "Slovenčina (Slovensko)", "primary": false},
    "sl-SI": {"tag": "sl-SI", "name": "슬로베니아어 (슬로베니아)", "nativeName": "Slovenščina (Slovenija)", "primary": false},
    "hr-HR": {"tag": "hr-HR", "name": "크로아티아어 (크로아티아)", "nativeName": "Hrvatski (Hrvatska)", "primary": false},
    "ca-ES": {"tag": "ca-ES", "name": "카탈루냐어 (카탈루냐)", "nativeName": "Català (Catalunya)", "primary": false},
    "lt-LT": {"tag": "lt-LT", "name": "리투아니아어 (리투아니아)", "nativeName": "Lietuvių (Lietuva)", "primary": false},
    "lv-LV": {"tag": "lv-LV", "name": "라트비아어 (라트비아)", "nativeName": "Latviešu (Latvija)", "primary": false},
    "et-EE": {"tag": "et-EE", "name": "에스토니아어 (에스토니아)", "nativeName": "Eesti (Eesti)", "primary": false},
    "sq-AL": {"tag": "sq-AL", "name": "알바니아어 (알바니아)", "nativeName": "Shqip (Shqipëri)", "primary": false},
    "mk-MK": {"tag": "mk-MK", "name": "마케도니아어 (북마케도니아)", "nativeName": "Македонски (Македонија)", "primary": false},
    "be-BY": {"tag": "be-BY", "name": "벨라루스어 (벨라루스)", "nativeName": "Беларуская (Беларусь)", "primary": false},
    "is-IS": {"tag": "is-IS", "name": "아이슬란드어 (아이슬란드)", "nativeName": "Íslenska (Ísland)", "primary": false},
    "gl-ES": {"tag": "gl-ES", "name": "갈리시아어 (갈리시아)", "nativeName": "Galego (Galicia)", "primary": false},
    "eu-ES": {"tag": "eu-ES", "name": "바스크어 (바스크 지방)", "nativeName": "Euskara (Euskal Herria)", "primary": false},
    "af-ZA": {"tag": "af-ZA", "name": "아프리칸스어 (남아프리카)", "nativeName": "Afrikaans (Suid-Afrika)", "primary": false},
    "sw-KE": {"tag": "sw-KE", "name": "스와힐리어 (케냐)", "nativeName": "Kiswahili (Kenya)", "primary": false},
    "ta-IN": {"tag": "ta-IN", "name": "타밀어 (인도)", "nativeName": "தமிழ் (இந்தியா)", "primary": false},
    "te-IN": {"tag": "te-IN", "name": "텔루구어 (인도)", "nativeName": "తెలుగు (భారతదేశం)", "primary": false},
    "kn-IN": {"tag": "kn-IN", "name": "칸나다어 (인도)", "nativeName": "ಕನ್ನಡ (ಭಾರತ)", "primary": false},
    "mr-IN": {"tag": "mr-IN", "name": "마라티어 (인도)", "nativeName": "मराठी (भारत)", "primary": false},
    "gu-IN": {"tag": "gu-IN", "name": "구자라트어 (인도)", "nativeName": "ગુજરાતી (ભારત)", "primary": false},
    "pa-IN": {"tag": "pa-IN", "name": "펀자브어 (인도)", "nativeName": "ਪੰਜਾਬੀ (ਭਾਰਤ)", "primary": false},
    "kok-IN": {"tag": "kok-IN", "name": "콘칸어 (인도)", "nativeName": "कोंकणी (भारत)", "primary": false},
    "sa-IN": {"tag": "sa-IN", "name": "산스크리트어 (인도)", "nativeName": "संस्कृत (भारत)", "primary": false},
    "ur-PK": {"tag": "ur-PK", "name": "우르두어 (파키스탄)", "nativeName": "اردو (پاکستان)", "primary": false},
    "fa-IR": {"tag": "fa-IR", "name": "페르시아어 (이란)", "nativeName": "فارسی (ایران)", "primary": false},
    "syr-SY": {"tag": "syr-SY", "name": "시리아어 (시리아)", "nativeName": "ܣܘܪܝܝܐ (ܣܘܪܝܐ)", "primary": false},
    "div-MV": {"tag": "div-MV", "name": "디베히어 (몰디브)", "nativeName": "ދިވެހި (މޯލްޑިވްސް)", "primary": false},
    "ka-GE": {"tag": "ka-GE", "name": "조지아어 (조지아)", "nativeName": "ქართული (საქართველო)", "primary": false},      
}


const { getTag, getTags, getPrimaryTags } = createTagUtils(tags)
export {
    getTag, getTags,getPrimaryTags
}
export * from './types'    