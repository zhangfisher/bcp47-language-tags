import { createTagUtils } from './utils'

export const tags = {
    "zh-CN": {"tag": "zh-CN", "name": "Cinese semplificato", "nativeName": "简体中文", "default": true},
    "zh-TW": {"tag": "zh-TW", "name": "Cinese tradizionale - Taiwan", "nativeName": "繁體中文 (臺灣)"},
    "zh-HK": {"tag": "zh-HK", "name": "Cinese tradizionale - Hong Kong", "nativeName": "繁體中文（香港）"},
    "zh-MO": {"tag": "zh-MO", "name": "Cinese tradizionale - Macao", "nativeName": "繁體中文 (Traditional Chinese - Macau)"},
    "zh-SG": {"tag": "zh-SG", "name": "Cinese semplificato - Singapore", "nativeName": "简体中文 (Simplified Chinese - Singapore)"},      
    "zh-CHS": {"tag": "zh-CHS", "name": "Cinese semplificato", "nativeName": "简体中文"},
    "zh-CHT": {"tag": "zh-CHT", "name": "Cinese tradizionale", "nativeName": "繁體中文 (Traditional Chinese)"},
    "en-US": {"tag": "en-US", "name": "Inglese (Stati Uniti)", "nativeName": "English (United States)", "default": true},
    "en-GB": {"tag": "en-GB", "name": "Inglese (Regno Unito)", "nativeName": "English (United Kingdom)"},
    "en-CA": {"tag": "en-CA", "name": "Inglese (Canada)", "nativeName": "English (Canada)"},
    "en-AU": {"tag": "en-AU", "name": "Inglese (Australia)", "nativeName": "English (Australia)"},
    "en-IN": {"tag": "en-IN", "name": "Inglese (India)", "nativeName": "English (India)"},
    "en-ZA": {"tag": "en-ZA", "name": "Inglese (Sudafrica)", "nativeName": "English (South Africa)"},
    "en-NZ": {"tag": "en-NZ", "name": "Inglese (Nuova Zelanda)", "nativeName": "English (New Zealand)"},
    "en-IE": {"tag": "en-IE", "name": "Inglese (Irlanda)", "nativeName": "English (Ireland)"},
    "en-PH": {"tag": "en-PH", "name": "Inglese (Filippine)", "nativeName": "English (Philippines)"},
    "en-ZW": {"tag": "en-ZW", "name": "Inglese (Zimbabwe)", "nativeName": "English (Zimbabwe)"},
    "en-BZ": {"tag": "en-BZ", "name": "Inglese (Belize)", "nativeName": "English (Belize)"},
    "en-CB": {"tag": "en-CB", "name": "Inglese (Caraibi)", "nativeName": "English (Caribbean)"},
    "en-JM": {"tag": "en-JM", "name": "Inglese (Giamaica)", "nativeName": "English (Jamaica)"},
    "en-TT": {"tag": "en-TT", "name": "Inglese (Trinidad e Tobago)", "nativeName": "English (Trinidad and Tobago)"},
    "hi-IN": {"tag": "hi-IN", "name": "Hindi (India)", "nativeName": "हिन्दी (Hindi)"},
    "es-ES": {"tag": "es-ES", "name": "Spagnolo (Spagna)", "nativeName": "Español (España)", "default": true},
    "es-MX": {"tag": "es-MX", "name": "Spagnolo (Messico)", "nativeName": "Español (México)"},
    "es-AR": {"tag": "es-AR", "name": "Spagnolo (Argentina)", "nativeName": "Español (Argentina)"},
    "es-CO": {"tag": "es-CO", "name": "Spagnolo (Colombia)", "nativeName": "Español (Colombia)"},
    "es-PE": {"tag": "es-PE", "name": "Spagnolo (Perù)", "nativeName": "Español (Perú)"},
    "es-VE": {"tag": "es-VE", "name": "Spagnolo (Venezuela)", "nativeName": "Español (Venezuela)"},
    "es-CL": {"tag": "es-CL", "name": "Spagnolo (Cile)", "nativeName": "Español (Chile)"},
    "es-EC": {"tag": "es-EC", "name": "Spagnolo (Ecuador)", "nativeName": "Español (Ecuador)"},
    "es-GT": {"tag": "es-GT", "name": "Spagnolo (Guatemala)", "nativeName": "Español (Guatemala)"},
    "es-CU": {"tag": "es-CU", "name": "Spagnolo (Cuba)", "nativeName": "Español (Cuba)"},
    "es-BO": {"tag": "es-BO", "name": "Spagnolo (Bolivia)", "nativeName": "Español (Bolivia)"},
    "es-DO": {"tag": "es-DO", "name": "Spagnolo (Repubblica Dominicana)", "nativeName": "Español (República Dominicana)"},
    "es-HN": {"tag": "es-HN", "name": "Spagnolo (Honduras)", "nativeName": "Español (Honduras)"},
    "es-PY": {"tag": "es-PY", "name": "Spagnolo (Paraguay)", "nativeName": "Español (Paraguay)"},
    "es-SV": {"tag": "es-SV", "name": "Spagnolo (El Salvador)", "nativeName": "Español (El Salvador)"},
    "es-NI": {"tag": "es-NI", "name": "Spagnolo (Nicaragua)", "nativeName": "Español (Nicaragua)"},
    "es-PR": {"tag": "es-PR", "name": "Spagnolo (Porto Rico)", "nativeName": "Español (Puerto Rico)"},
    "es-UY": {"tag": "es-UY", "name": "Spagnolo (Uruguay)", "nativeName": "Español (Uruguay)"},
    "es-PA": {"tag": "es-PA", "name": "Spagnolo (Panama)", "nativeName": "Español (Panamá)"},
    "es-CR": {"tag": "es-CR", "name": "Spagnolo (Costa Rica)", "nativeName": "Español (Costa Rica)"},
    "ar-EG": {"tag": "ar-EG", "name": "Arabo (Egitto)", "nativeName": "العربية (مصر)", "default": true},
    "ar-SA": {"tag": "ar-SA", "name": "Arabo (Arabia Saudita)", "nativeName": "العربية (السعودية)"},
    "ar-DZ": {"tag": "ar-DZ", "name": "Arabo (Algeria)", "nativeName": "العربية (الجزائر)"},
    "ar-MA": {"tag": "ar-MA", "name": "Arabo (Marocco)", "nativeName": "العربية (المغرب)"},
    "ar-IQ": {"tag": "ar-IQ", "name": "Arabo (Iraq)", "nativeName": "العربية (العراق)"},
    "ar-SD": {"tag": "ar-SD", "name": "Arabo (Sudan)", "nativeName": "العربية (السودان)"},
    "ar-YE": {"tag": "ar-YE", "name": "Arabo (Yemen)", "nativeName": "العربية (اليمن)"},
    "ar-SY": {"tag": "ar-SY", "name": "Arabo (Siria)", "nativeName": "العربية (سوريا)"},
    "ar-TN": {"tag": "ar-TN", "name": "Arabo (Tunisia)", "nativeName": "العربية (تونس)"},
    "ar-LY": {"tag": "ar-LY", "name": "Arabo (Libia)", "nativeName": "العربية (ليبيا)"},
    "ar-JO": {"tag": "ar-JO", "name": "Arabo (Giordania)", "nativeName": "العربية (الأردن)"},
    "ar-LB": {"tag": "ar-LB", "name": "Arabo (Libano)", "nativeName": "العربية (لبنان)"},
    "ar-KW": {"tag": "ar-KW", "name": "Arabo (Kuwait)", "nativeName": "العربية (الكويت)"},
    "ar-AE": {"tag": "ar-AE", "name": "Arabo (Emirati Arabi Uniti)", "nativeName": "العربية (الإمارات)"},
    "ar-BH": {"tag": "ar-BH", "name": "Arabo (Bahrain)", "nativeName": "العربية (البحرين)"},
    "ar-QA": {"tag": "ar-QA", "name": "Arabo (Qatar)", "nativeName": "العربية (قطر)"},
    "ar-OM": {"tag": "ar-OM", "name": "Arabo (Oman)", "nativeName": "العربية (عمان)"},
    "pt-BR": {"tag": "pt-BR", "name": "Portoghese (Brasile)", "nativeName": "Português (Brasil)"},
    "pt-PT": {"tag": "pt-PT", "name": "Portoghese (Portogallo)", "nativeName": "Português (Portugal)", "default": true},
    "ru-RU": {"tag": "ru-RU", "name": "Russo (Russia)", "nativeName": "Русский (Россия)", "default": true},
    "ja-JP": {"tag": "ja-JP", "name": "Giapponese (Giappone)", "nativeName": "日本語 (日本)", "default": true},
    "de-DE": {"tag": "de-DE", "name": "Tedesco (Germania)", "nativeName": "Deutsch (Deutschland)", "default": true},
    "de-AT": {"tag": "de-AT", "name": "Tedesco (Austria)", "nativeName": "Deutsch (Österreich)"},
    "de-CH": {"tag": "de-CH", "name": "Tedesco (Svizzera)", "nativeName": "Deutsch (Schweiz)"},
    "fr-FR": {"tag": "fr-FR", "name": "Francese (Francia)", "nativeName": "Français (France)", "default": true},
    "fr-CA": {"tag": "fr-CA", "name": "Francese (Canada)", "nativeName": "Français (Canada)"},
    "fr-BE": {"tag": "fr-BE", "name": "Francese (Belgio)", "nativeName": "Français (Belgique)"},
    "fr-CH": {"tag": "fr-CH", "name": "Francese (Svizzera)", "nativeName": "Français (Suisse)"},
    "fr-LU": {"tag": "fr-LU", "name": "Francese (Lussemburgo)", "nativeName": "Français (Luxembourg)"},
    "fr-MC": {"tag": "fr-MC", "name": "Francese (Monaco)", "nativeName": "Français (Monaco)"},
    "ko-KR": {"tag": "ko-KR", "name": "Coreano (Corea del Sud)", "nativeName": "한국어 (대한민국)"},
    "it-IT": {"tag": "it-IT", "name": "Italiano (Italia)", "nativeName": "Italiano (Italia)", "default": true },
    "it-CH": {"tag": "it-CH", "name": "Italiano (Svizzera)", "nativeName": "Italiano (Svizzera)"},
    "nl-NL": {"tag": "nl-NL", "name": "Olandese (Paesi Bassi)", "nativeName": "Nederlands (Nederland)"},
    "nl-BE": {"tag": "nl-BE", "name": "Olandese (Belgio)", "nativeName": "Nederlands (België)"},
    "pl-PL": {"tag": "pl-PL", "name": "Polacco (Polonia)", "nativeName": "Polski (Polska)"},
    "vi-VN": {"tag": "vi-VN", "name": "Vietnamita (Vietnam)", "nativeName": "Tiếng Việt (Việt Nam)"},
    "tr-TR": {"tag": "tr-TR", "name": "Turco (Turchia)", "nativeName": "Türkçe (Türkiye)"},
    "th-TH": {"tag": "th-TH", "name": "Thai (Thailandia)", "nativeName": "ไทย (ประเทศไทย)"},
    "el-GR": {"tag": "el-GR", "name": "Greco (Grecia)", "nativeName": "Ελληνικά (Ελλάδα)"},
    "cs-CZ": {"tag": "cs-CZ", "name": "Ceco (Repubblica Ceca)", "nativeName": "Čeština (Česká republika)"},
    "sv-SE": {"tag": "sv-SE", "name": "Svedese (Svezia)", "nativeName": "Svenska (Sverige)", "default": true},
    "sv-FI": {"tag": "sv-FI", "name": "Svedese (Finlandia)", "nativeName": "Svenska (Finland)"},
    "hu-HU": {"tag": "hu-HU", "name": "Ungherese (Ungheria)", "nativeName": "Magyar (Magyarország)"},
    "fi-FI": {"tag": "fi-FI", "name": "Finlandese (Finlandia)", "nativeName": "Suomi (Suomi)"},
    "da-DK": {"tag": "da-DK", "name": "Danese (Danimarca)", "nativeName": "Dansk (Danmark)"},
    "nb-NO": {"tag": "nb-NO", "name": "Norvegese Bokmål (Norvegia)", "nativeName": "Norsk Bokmål (Norge)"},
    "nn-NO": {"tag": "nn-NO", "name": "Norvegese Nynorsk (Norvegia)", "nativeName": "Norsk Nynorsk (Norge)"},
    "he-IL": {"tag": "he-IL", "name": "Ebraico (Israele)", "nativeName": "עברית (ישראל)"},
    "id-ID": {"tag": "id-ID", "name": "Indonesiano (Indonesia)", "nativeName": "Bahasa Indonesia (Indonesia)"},
    "ms-MY": {"tag": "ms-MY", "name": "Malese (Malaysia)", "nativeName": "Bahasa Melayu (Malaysia)"},
    "ms-BN": {"tag": "ms-BN", "name": "Malese (Brunei)", "nativeName": "Bahasa Melayu (Brunei)"},
    "ro-RO": {"tag": "ro-RO", "name": "Rumeno (Romania)", "nativeName": "Română (România)"},
    "bg-BG": {"tag": "bg-BG", "name": "Bulgaro (Bulgaria)", "nativeName": "Български (България)"},
    "uk-UA": {"tag": "uk-UA", "name": "Ucraino (Ucraina)", "nativeName": "Українська (Україна)"},
    "sk-SK": {"tag": "sk-SK", "name": "Slovacco (Slovacchia)", "nativeName": "Slovenčina (Slovensko)"},
    "sl-SI": {"tag": "sl-SI", "name": "Sloveno (Slovenia)", "nativeName": "Slovenščina (Slovenija)"},
    "hr-HR": {"tag": "hr-HR", "name": "Croato (Croazia)", "nativeName": "Hrvatski (Hrvatska)"},
    "ca-ES": {"tag": "ca-ES", "name": "Catalano (Catalogna)", "nativeName": "Català (Catalunya)"},
    "lt-LT": {"tag": "lt-LT", "name": "Lituano (Lituania)", "nativeName": "Lietuvių (Lietuva)"},
    "lv-LV": {"tag": "lv-LV", "name": "Lettone (Lettonia)", "nativeName": "Latviešu (Latvija)"},
    "et-EE": {"tag": "et-EE", "name": "Estone (Estonia)", "nativeName": "Eesti (Eesti)"},        
    "sq-AL": {"tag": "sq-AL", "name": "Albanese (Albania)", "nativeName": "Shqip (Shqipëri)"},
    "mk-MK": {"tag": "mk-MK", "name": "Macedone (Macedonia del Nord)", "nativeName": "Македонски (Македонија)"},
    "be-BY": {"tag": "be-BY", "name": "Bielorusso (Bielorussia)", "nativeName": "Беларуская (Беларусь)"},
    "is-IS": {"tag": "is-IS", "name": "Islandese (Islanda)", "nativeName": "Íslenska (Ísland)"},
    "gl-ES": {"tag": "gl-ES", "name": "Galiziano (Galizia)", "nativeName": "Galego (Galicia)"},
    "eu-ES": {"tag": "eu-ES", "name": "Basco (Paese Basco)", "nativeName": "Euskara (Euskal Herria)"},
    "af-ZA": {"tag": "af-ZA", "name": "Afrikaans (Sudafrica)", "nativeName": "Afrikaans (Suid-Afrika)"},
    "sw-KE": {"tag": "sw-KE", "name": "Swahili (Kenya)", "nativeName": "Kiswahili (Kenya)"},
    "ta-IN": {"tag": "ta-IN", "name": "Tamil (India)", "nativeName": "தமிழ் (இந்தியா)"},
    "te-IN": {"tag": "te-IN", "name": "Telugu (India)", "nativeName": "తెలుగు (భారతదేశం)"},
    "kn-IN": {"tag": "kn-IN", "name": "Kannada (India)", "nativeName": "ಕನ್ನಡ (ಭಾರತ)"},
    "mr-IN": {"tag": "mr-IN", "name": "Marathi (India)", "nativeName": "मराठी (भारत)"},
    "gu-IN": {"tag": "gu-IN", "name": "Gujarati (India)", "nativeName": "ગુજરાતી (ભારત)"},
    "pa-IN": {"tag": "pa-IN", "name": "Punjabi (India)", "nativeName": "ਪੰਜਾਬੀ (ਭਾਰਤ)"},
    "kok-IN": {"tag": "kok-IN", "name": "Konkani (India)", "nativeName": "कोंकणी (भारत)"},
    "sa-IN": {"tag": "sa-IN", "name": "Sanscrito (India)", "nativeName": "संस्कृत (भारत)"},
    "ur-PK": {"tag": "ur-PK", "name": "Urdu (Pakistan)", "nativeName": "اردو (پاکستان)"},
    "fa-IR": {"tag": "fa-IR", "name": "Persiano (Iran)", "nativeName": "فارسی (ایران)"},
    "syr-SY": {"tag": "syr-SY", "name": "Siriaco (Siria)", "nativeName": "ܣܘܪܝܝܐ (ܣܘܪܝܐ)"},
    "div-MV": {"tag": "div-MV", "name": "Dhivehi (Maldive)", "nativeName": "ދިވެހި (މޯލްޑިވްސް)"},
    "ka-GE": {"tag": "ka-GE", "name": "Georgiano (Georgia)", "nativeName": "ქართული (საქართველო)"},      
}



const { getTag, getTags, getDefaultTags } = createTagUtils(tags)
export {
    getTag, getTags,getDefaultTags
}
export * from './types'    