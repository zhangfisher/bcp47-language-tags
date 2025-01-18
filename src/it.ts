import { createTagUtils } from './utils'

export const tags = {
    "zh-CN": {"tag": "zh-CN", "name": "Cinese semplificato", "nativeName": "简体中文", "primary": true },
    "zh-TW": {"tag": "zh-TW", "name": "Cinese tradizionale - Taiwan", "nativeName": "繁體中文(臺灣)", "primary": false},
    "zh-HK": {"tag": "zh-HK", "name": "Cinese tradizionale - Hong Kong", "nativeName": "繁體中文(香港)", "primary": false},
    "zh-MO": {"tag": "zh-MO", "name": "Cinese tradizionale - Macao", "nativeName": "繁體中文(Traditional Chinese - Macau)", "primary": false},
    "zh-SG": {"tag": "zh-SG", "name": "Cinese semplificato - Singapore", "nativeName": "简体中文(Simplified Chinese - Singapore)", "primary": false},      
    "zh-CHS": {"tag": "zh-CHS", "name": "Cinese semplificato", "nativeName": "简体中文", "primary": false},
    "zh-CHT": {"tag": "zh-CHT", "name": "Cinese tradizionale", "nativeName": "繁體中文(Traditional Chinese)", "primary": false},
    "en-US": {"tag": "en-US", "name": "Inglese (Stati Uniti)", "nativeName": "English (United States)", "primary": true },
    "en-GB": {"tag": "en-GB", "name": "Inglese (Regno Unito)", "nativeName": "English (United Kingdom)", "primary": false},
    "en-CA": {"tag": "en-CA", "name": "Inglese (Canada)", "nativeName": "English (Canada)", "primary": false},
    "en-AU": {"tag": "en-AU", "name": "Inglese (Australia)", "nativeName": "English (Australia)", "primary": false},
    "en-IN": {"tag": "en-IN", "name": "Inglese (India)", "nativeName": "English (India)", "primary": false},
    "en-ZA": {"tag": "en-ZA", "name": "Inglese (Sudafrica)", "nativeName": "English (South Africa)", "primary": false},
    "en-NZ": {"tag": "en-NZ", "name": "Inglese (Nuova Zelanda)", "nativeName": "English (New Zealand)", "primary": false},
    "en-IE": {"tag": "en-IE", "name": "Inglese (Irlanda)", "nativeName": "English (Ireland)", "primary": false},
    "en-PH": {"tag": "en-PH", "name": "Inglese (Filippine)", "nativeName": "English (Philippines)", "primary": false},
    "en-ZW": {"tag": "en-ZW", "name": "Inglese (Zimbabwe)", "nativeName": "English (Zimbabwe)", "primary": false},
    "en-BZ": {"tag": "en-BZ", "name": "Inglese (Belize)", "nativeName": "English (Belize)", "primary": false},
    "en-CB": {"tag": "en-CB", "name": "Inglese (Caraibi)", "nativeName": "English (Caribbean)", "primary": false},
    "en-JM": {"tag": "en-JM", "name": "Inglese (Giamaica)", "nativeName": "English (Jamaica)", "primary": false},
    "en-TT": {"tag": "en-TT", "name": "Inglese (Trinidad e Tobago)", "nativeName": "English (Trinidad and Tobago)", "primary": false},
    "hi-IN": {"tag": "hi-IN", "name": "Hindi (India)", "nativeName": "हिन्दी (Hindi)", "primary": false},
    "es-ES": {"tag": "es-ES", "name": "Spagnolo (Spagna)", "nativeName": "Español (España)", "primary": true },
    "es-MX": {"tag": "es-MX", "name": "Spagnolo (Messico)", "nativeName": "Español (México)", "primary": false},
    "es-AR": {"tag": "es-AR", "name": "Spagnolo (Argentina)", "nativeName": "Español (Argentina)", "primary": false},
    "es-CO": {"tag": "es-CO", "name": "Spagnolo (Colombia)", "nativeName": "Español (Colombia)", "primary": false},
    "es-PE": {"tag": "es-PE", "name": "Spagnolo (Perù)", "nativeName": "Español (Perú)", "primary": false},
    "es-VE": {"tag": "es-VE", "name": "Spagnolo (Venezuela)", "nativeName": "Español (Venezuela)", "primary": false},
    "es-CL": {"tag": "es-CL", "name": "Spagnolo (Cile)", "nativeName": "Español (Chile)", "primary": false},
    "es-EC": {"tag": "es-EC", "name": "Spagnolo (Ecuador)", "nativeName": "Español (Ecuador)", "primary": false},
    "es-GT": {"tag": "es-GT", "name": "Spagnolo (Guatemala)", "nativeName": "Español (Guatemala)", "primary": false},
    "es-CU": {"tag": "es-CU", "name": "Spagnolo (Cuba)", "nativeName": "Español (Cuba)", "primary": false},
    "es-BO": {"tag": "es-BO", "name": "Spagnolo (Bolivia)", "nativeName": "Español (Bolivia)", "primary": false},
    "es-DO": {"tag": "es-DO", "name": "Spagnolo (Repubblica Dominicana)", "nativeName": "Español (República Dominicana)", "primary": false},
    "es-HN": {"tag": "es-HN", "name": "Spagnolo (Honduras)", "nativeName": "Español (Honduras)", "primary": false},
    "es-PY": {"tag": "es-PY", "name": "Spagnolo (Paraguay)", "nativeName": "Español (Paraguay)", "primary": false},
    "es-SV": {"tag": "es-SV", "name": "Spagnolo (El Salvador)", "nativeName": "Español (El Salvador)", "primary": false},
    "es-NI": {"tag": "es-NI", "name": "Spagnolo (Nicaragua)", "nativeName": "Español (Nicaragua)", "primary": false},
    "es-PR": {"tag": "es-PR", "name": "Spagnolo (Porto Rico)", "nativeName": "Español (Puerto Rico)", "primary": false},
    "es-UY": {"tag": "es-UY", "name": "Spagnolo (Uruguay)", "nativeName": "Español (Uruguay)", "primary": false},
    "es-PA": {"tag": "es-PA", "name": "Spagnolo (Panama)", "nativeName": "Español (Panamá)", "primary": false},
    "es-CR": {"tag": "es-CR", "name": "Spagnolo (Costa Rica)", "nativeName": "Español (Costa Rica)", "primary": false},
    "ar-EG": {"tag": "ar-EG", "name": "Arabo (Egitto)", "nativeName": "العربية (مصر)", "primary": true },
    "ar-SA": {"tag": "ar-SA", "name": "Arabo (Arabia Saudita)", "nativeName": "العربية (السعودية)", "primary": false},
    "ar-DZ": {"tag": "ar-DZ", "name": "Arabo (Algeria)", "nativeName": "العربية (الجزائر)", "primary": false},
    "ar-MA": {"tag": "ar-MA", "name": "Arabo (Marocco)", "nativeName": "العربية (المغرب)", "primary": false},
    "ar-IQ": {"tag": "ar-IQ", "name": "Arabo (Iraq)", "nativeName": "العربية (العراق)", "primary": false},
    "ar-SD": {"tag": "ar-SD", "name": "Arabo (Sudan)", "nativeName": "العربية (السودان)", "primary": false},
    "ar-YE": {"tag": "ar-YE", "name": "Arabo (Yemen)", "nativeName": "العربية (اليمن)", "primary": false},
    "ar-SY": {"tag": "ar-SY", "name": "Arabo (Siria)", "nativeName": "العربية (سوريا)", "primary": false},
    "ar-TN": {"tag": "ar-TN", "name": "Arabo (Tunisia)", "nativeName": "العربية (تونس)", "primary": false},
    "ar-LY": {"tag": "ar-LY", "name": "Arabo (Libia)", "nativeName": "العربية (ليبيا)", "primary": false},
    "ar-JO": {"tag": "ar-JO", "name": "Arabo (Giordania)", "nativeName": "العربية (الأردن)", "primary": false},
    "ar-LB": {"tag": "ar-LB", "name": "Arabo (Libano)", "nativeName": "العربية (لبنان)", "primary": false},
    "ar-KW": {"tag": "ar-KW", "name": "Arabo (Kuwait)", "nativeName": "العربية (الكويت)", "primary": false},
    "ar-AE": {"tag": "ar-AE", "name": "Arabo (Emirati Arabi Uniti)", "nativeName": "العربية (الإمارات)", "primary": false},
    "ar-BH": {"tag": "ar-BH", "name": "Arabo (Bahrain)", "nativeName": "العربية (البحرين)", "primary": false},
    "ar-QA": {"tag": "ar-QA", "name": "Arabo (Qatar)", "nativeName": "العربية (قطر)", "primary": false},
    "ar-OM": {"tag": "ar-OM", "name": "Arabo (Oman)", "nativeName": "العربية (عمان)", "primary": false},
    "pt-BR": {"tag": "pt-BR", "name": "Portoghese (Brasile)", "nativeName": "Português (Brasil)", "primary": false},
    "pt-PT": {"tag": "pt-PT", "name": "Portoghese (Portogallo)", "nativeName": "Português (Portugal)", "primary": true },
    "ru-RU": {"tag": "ru-RU", "name": "Russo (Russia)", "nativeName": "Русский (Россия)", "primary": true },
    "ja-JP": {"tag": "ja-JP", "name": "Giapponese (Giappone)", "nativeName": "日本語 (日本)", "primary": true },
    "de-DE": {"tag": "de-DE", "name": "Tedesco (Germania)", "nativeName": "Deutsch (Deutschland)", "primary": true },
    "de-AT": {"tag": "de-AT", "name": "Tedesco (Austria)", "nativeName": "Deutsch (Österreich)", "primary": false},
    "de-CH": {"tag": "de-CH", "name": "Tedesco (Svizzera)", "nativeName": "Deutsch (Schweiz)", "primary": false},
    "fr-FR": {"tag": "fr-FR", "name": "Francese (Francia)", "nativeName": "Français (France)", "primary": true },
    "fr-CA": {"tag": "fr-CA", "name": "Francese (Canada)", "nativeName": "Français (Canada)", "primary": false},
    "fr-BE": {"tag": "fr-BE", "name": "Francese (Belgio)", "nativeName": "Français (Belgique)", "primary": false},
    "fr-CH": {"tag": "fr-CH", "name": "Francese (Svizzera)", "nativeName": "Français (Suisse)", "primary": false},
    "fr-LU": {"tag": "fr-LU", "name": "Francese (Lussemburgo)", "nativeName": "Français (Luxembourg)", "primary": false},
    "fr-MC": {"tag": "fr-MC", "name": "Francese (Monaco)", "nativeName": "Français (Monaco)", "primary": false},
    "ko-KR": {"tag": "ko-KR", "name": "Coreano (Corea del Sud)", "nativeName": "한국어 (대한민국)", "primary": true},
    "it-IT": {"tag": "it-IT", "name": "Italiano (Italia)", "nativeName": "Italiano (Italia)", "primary": true },
    "it-CH": {"tag": "it-CH", "name": "Italiano (Svizzera)", "nativeName": "Italiano (Svizzera)", "primary": false},
    "nl-NL": {"tag": "nl-NL", "name": "Olandese (Paesi Bassi)", "nativeName": "Nederlands (Nederland)", "primary": true},
    "nl-BE": {"tag": "nl-BE", "name": "Olandese (Belgio)", "nativeName": "Nederlands (België)", "primary": false},
    "pl-PL": {"tag": "pl-PL", "name": "Polacco (Polonia)", "nativeName": "Polski (Polska)", "primary": false},
    "vi-VN": {"tag": "vi-VN", "name": "Vietnamita (Vietnam)", "nativeName": "Tiếng Việt (Việt Nam)", "primary": false},
    "tr-TR": {"tag": "tr-TR", "name": "Turco (Turchia)", "nativeName": "Türkçe (Türkiye)", "primary": false},
    "th-TH": {"tag": "th-TH", "name": "Thai (Thailandia)", "nativeName": "ไทย (ประเทศไทย)", "primary": false},
    "el-GR": {"tag": "el-GR", "name": "Greco (Grecia)", "nativeName": "Ελληνικά (Ελλάδα)", "primary": false},
    "cs-CZ": {"tag": "cs-CZ", "name": "Ceco (Repubblica Ceca)", "nativeName": "Čeština (Česká republika)", "primary": false},
    "sv-SE": {"tag": "sv-SE", "name": "Svedese (Svezia)", "nativeName": "Svenska (Sverige)", "primary": false },
    "sv-FI": {"tag": "sv-FI", "name": "Svedese (Finlandia)", "nativeName": "Svenska (Finland)", "primary": false},
    "hu-HU": {"tag": "hu-HU", "name": "Ungherese (Ungheria)", "nativeName": "Magyar (Magyarország)", "primary": false},
    "fi-FI": {"tag": "fi-FI", "name": "Finlandese (Finlandia)", "nativeName": "Suomi (Suomi)", "primary": false},
    "da-DK": {"tag": "da-DK", "name": "Danese (Danimarca)", "nativeName": "Dansk (Danmark)", "primary": false},
    "nb-NO": {"tag": "nb-NO", "name": "Norvegese Bokmål (Norvegia)", "nativeName": "Norsk Bokmål (Norge)", "primary": false},
    "nn-NO": {"tag": "nn-NO", "name": "Norvegese Nynorsk (Norvegia)", "nativeName": "Norsk Nynorsk (Norge)", "primary": false},
    "he-IL": {"tag": "he-IL", "name": "Ebraico (Israele)", "nativeName": "עברית (ישראל)", "primary": false},
    "id-ID": {"tag": "id-ID", "name": "Indonesiano (Indonesia)", "nativeName": "Bahasa Indonesia (Indonesia)", "primary": false},
    "ms-MY": {"tag": "ms-MY", "name": "Malese (Malaysia)", "nativeName": "Bahasa Melayu (Malaysia)", "primary": false},
    "ms-BN": {"tag": "ms-BN", "name": "Malese (Brunei)", "nativeName": "Bahasa Melayu (Brunei)", "primary": false},
    "ro-RO": {"tag": "ro-RO", "name": "Rumeno (Romania)", "nativeName": "Română (România)", "primary": false},
    "bg-BG": {"tag": "bg-BG", "name": "Bulgaro (Bulgaria)", "nativeName": "Български (България)", "primary": false},
    "uk-UA": {"tag": "uk-UA", "name": "Ucraino (Ucraina)", "nativeName": "Українська (Україна)", "primary": false},
    "sk-SK": {"tag": "sk-SK", "name": "Slovacco (Slovacchia)", "nativeName": "Slovenčina (Slovensko)", "primary": false},
    "sl-SI": {"tag": "sl-SI", "name": "Sloveno (Slovenia)", "nativeName": "Slovenščina (Slovenija)", "primary": false},
    "hr-HR": {"tag": "hr-HR", "name": "Croato (Croazia)", "nativeName": "Hrvatski (Hrvatska)", "primary": false},
    "ca-ES": {"tag": "ca-ES", "name": "Catalano (Catalogna)", "nativeName": "Català (Catalunya)", "primary": false},
    "lt-LT": {"tag": "lt-LT", "name": "Lituano (Lituania)", "nativeName": "Lietuvių (Lietuva)", "primary": false},
    "lv-LV": {"tag": "lv-LV", "name": "Lettone (Lettonia)", "nativeName": "Latviešu (Latvija)", "primary": false},
    "et-EE": {"tag": "et-EE", "name": "Estone (Estonia)", "nativeName": "Eesti (Eesti)", "primary": false},        
    "sq-AL": {"tag": "sq-AL", "name": "Albanese (Albania)", "nativeName": "Shqip (Shqipëri)", "primary": false},
    "mk-MK": {"tag": "mk-MK", "name": "Macedone (Macedonia del Nord)", "nativeName": "Македонски (Македонија)", "primary": false},
    "be-BY": {"tag": "be-BY", "name": "Bielorusso (Bielorussia)", "nativeName": "Беларуская (Беларусь)", "primary": false},
    "is-IS": {"tag": "is-IS", "name": "Islandese (Islanda)", "nativeName": "Íslenska (Ísland)", "primary": false},
    "gl-ES": {"tag": "gl-ES", "name": "Galiziano (Galizia)", "nativeName": "Galego (Galicia)", "primary": false},
    "eu-ES": {"tag": "eu-ES", "name": "Basco (Paese Basco)", "nativeName": "Euskara (Euskal Herria)", "primary": false},
    "af-ZA": {"tag": "af-ZA", "name": "Afrikaans (Sudafrica)", "nativeName": "Afrikaans (Suid-Afrika)", "primary": false},
    "sw-KE": {"tag": "sw-KE", "name": "Swahili (Kenya)", "nativeName": "Kiswahili (Kenya)", "primary": false},
    "ta-IN": {"tag": "ta-IN", "name": "Tamil (India)", "nativeName": "தமிழ் (இந்தியா)", "primary": false},
    "te-IN": {"tag": "te-IN", "name": "Telugu (India)", "nativeName": "తెలుగు (భారతదేశం)", "primary": false},
    "kn-IN": {"tag": "kn-IN", "name": "Kannada (India)", "nativeName": "ಕನ್ನಡ (ಭಾರತ)", "primary": false},
    "mr-IN": {"tag": "mr-IN", "name": "Marathi (India)", "nativeName": "मराठी (भारत)", "primary": false},
    "gu-IN": {"tag": "gu-IN", "name": "Gujarati (India)", "nativeName": "ગુજરાતી (ભારત)", "primary": false},
    "pa-IN": {"tag": "pa-IN", "name": "Punjabi (India)", "nativeName": "ਪੰਜਾਬੀ (ਭਾਰਤ)", "primary": false},
    "kok-IN": {"tag": "kok-IN", "name": "Konkani (India)", "nativeName": "कोंकणी (भारत)", "primary": false},
    "sa-IN": {"tag": "sa-IN", "name": "Sanscrito (India)", "nativeName": "संस्कृत (भारत)", "primary": false},
    "ur-PK": {"tag": "ur-PK", "name": "Urdu (Pakistan)", "nativeName": "اردو (پاکستان)", "primary": false},
    "fa-IR": {"tag": "fa-IR", "name": "Persiano (Iran)", "nativeName": "فارسی (ایران)", "primary": false},
    "syr-SY": {"tag": "syr-SY", "name": "Siriaco (Siria)", "nativeName": "ܣܘܪܝܝܐ (ܣܘܪܝܐ)", "primary": false},
    "div-MV": {"tag": "div-MV", "name": "Dhivehi (Maldive)", "nativeName": "ދިވެހި (މޯލްޑިވްސް)", "primary": false},
    "ka-GE": {"tag": "ka-GE", "name": "Georgiano (Georgia)", "nativeName": "ქართული (საქართველო)", "primary": false},      
}



const { getTag, getTags, getPrimaryTags } = createTagUtils(tags)
export {
    getTag, getTags,getPrimaryTags
}
export * from './types'    