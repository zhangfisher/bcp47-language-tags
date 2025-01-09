import { createTagUtils } from './utils'

export const tags = {
        "zh-CN": {"tag": "zh-CN", "name": "Chinesisch (Vereinfacht)", "nativeName": "简体中文", "primary": true},
        "zh-TW": {"tag": "zh-TW", "name": "Chinesisch (Traditionell - Taiwan)", "nativeName": "繁體中文 (臺灣)", "primary": false},
        "zh-HK": {"tag": "zh-HK", "name": "Chinesisch (Traditionell - Hongkong)", "nativeName": "繁體中文（香港）", "primary": false},
        "zh-MO": {"tag": "zh-MO", "name": "Chinesisch (Traditionell - Macau)", "nativeName": "繁體中文 (Traditional Chinese - Macau)", "primary": false},
        "zh-SG": {"tag": "zh-SG", "name": "Chinesisch (Vereinfacht - Singapur)", "nativeName": "简体中文 (Simplified Chinese - Singapore)" ,"primary": false }, 
        "zh-CHS": {"tag": "zh-CHS", "name": "Chinesisch (Vereinfacht)", "nativeName": "简体中文", "primary": false},
        "zh-CHT": {"tag": "zh-CHT", "name": "Chinesisch (Traditionell)", "nativeName": "繁體中文 (Traditional Chinese)", "primary": false},
        "en-US": {"tag": "en-US", "name": "Englisch (Vereinigte Staaten)", "nativeName": "English (United States)", "primary": true},
        "en-GB": {"tag": "en-GB", "name": "Englisch (Vereinigtes Königreich)", "nativeName": "English (United Kingdom)", "primary": false},
        "en-CA": {"tag": "en-CA", "name": "Englisch (Kanada)", "nativeName": "English (Canada)", "primary": false},
        "en-AU": {"tag": "en-AU", "name": "Englisch (Australien)", "nativeName": "English (Australia)", "primary": false},
        "en-IN": {"tag": "en-IN", "name": "Englisch (Indien)", "nativeName": "English (India)", "primary": false},
        "en-ZA": {"tag": "en-ZA", "name": "Englisch (Südafrika)", "nativeName": "English (South Africa)", "primary": false},
        "en-NZ": {"tag": "en-NZ", "name": "Englisch (Neuseeland)", "nativeName": "English (New Zealand)", "primary": false},
        "en-IE": {"tag": "en-IE", "name": "Englisch (Irland)", "nativeName": "English (Ireland)", "primary": false},
        "en-PH": {"tag": "en-PH", "name": "Englisch (Philippinen)", "nativeName": "English (Philippines)", "primary": false},
        "en-ZW": {"tag": "en-ZW", "name": "Englisch (Simbabwe)", "nativeName": "English (Zimbabwe)", "primary": false},
        "en-BZ": {"tag": "en-BZ", "name": "Englisch (Belize)", "nativeName": "English (Belize)", "primary": false},
        "en-CB": {"tag": "en-CB", "name": "Englisch (Karibik)", "nativeName": "English (Caribbean)", "primary": false},
        "en-JM": {"tag": "en-JM", "name": "Englisch (Jamaika)", "nativeName": "English (Jamaica)", "primary": false},
        "en-TT": {"tag": "en-TT", "name": "Englisch (Trinidad und Tobago)", "nativeName": "English (Trinidad and Tobago)", "primary": false},
        "hi-IN": {"tag": "hi-IN", "name": "Hindi (Indien)", "nativeName": "हिन्दी (Hindi)", "primary": false},
        "es-ES": {"tag": "es-ES", "name": "Spanisch (Spanien)", "nativeName": "Español (España)", "primary": true},
        "es-MX": {"tag": "es-MX", "name": "Spanisch (Mexiko)", "nativeName": "Español (México)", "primary": false},
        "es-AR": {"tag": "es-AR", "name": "Spanisch (Argentinien)", "nativeName": "Español (Argentina)", "primary": false},
        "es-CO": {"tag": "es-CO", "name": "Spanisch (Kolumbien)", "nativeName": "Español (Colombia)", "primary": false},
        "es-PE": {"tag": "es-PE", "name": "Spanisch (Peru)", "nativeName": "Español (Perú)", "primary": false},
        "es-VE": {"tag": "es-VE", "name": "Spanisch (Venezuela)", "nativeName": "Español (Venezuela)", "primary": false},
        "es-CL": {"tag": "es-CL", "name": "Spanisch (Chile)", "nativeName": "Español (Chile)", "primary": false},
        "es-EC": {"tag": "es-EC", "name": "Spanisch (Ecuador)", "nativeName": "Español (Ecuador)", "primary": false},
        "es-GT": {"tag": "es-GT", "name": "Spanisch (Guatemala)", "nativeName": "Español (Guatemala)", "primary": false},
        "es-CU": {"tag": "es-CU", "name": "Spanisch (Kuba)", "nativeName": "Español (Cuba)", "primary": false},
        "es-BO": {"tag": "es-BO", "name": "Spanisch (Bolivien)", "nativeName": "Español (Bolivia)", "primary": false},
        "es-DO": {"tag": "es-DO", "name": "Spanisch (Dominikanische Republik)", "nativeName": "Español (República Dominicana)", "primary": false},
        "es-HN": {"tag": "es-HN", "name": "Spanisch (Honduras)", "nativeName": "Español (Honduras)", "primary": false},
        "es-PY": {"tag": "es-PY", "name": "Spanisch (Paraguay)", "nativeName": "Español (Paraguay)", "primary": false},
        "es-SV": {"tag": "es-SV", "name": "Spanisch (El Salvador)", "nativeName": "Español (El Salvador)", "primary": false},
        "es-NI": {"tag": "es-NI", "name": "Spanisch (Nicaragua)", "nativeName": "Español (Nicaragua)", "primary": false},
        "es-PR": {"tag": "es-PR", "name": "Spanisch (Puerto Rico)", "nativeName": "Español (Puerto Rico)", "primary": false},
        "es-UY": {"tag": "es-UY", "name": "Spanisch (Uruguay)", "nativeName": "Español (Uruguay)", "primary": false},
        "es-PA": {"tag": "es-PA", "name": "Spanisch (Panama)", "nativeName": "Español (Panamá)", "primary": false},
        "es-CR": {"tag": "es-CR", "name": "Spanisch (Costa Rica)", "nativeName": "Español (Costa Rica)", "primary": false},
        "ar-EG": {"tag": "ar-EG", "name": "Arabisch (Ägypten)", "nativeName": "العربية (مصر)", "primary": true},
        "ar-SA": {"tag": "ar-SA", "name": "Arabisch (Saudi-Arabien)", "nativeName": "العربية (السعودية)", "primary": false},
        "ar-DZ": {"tag": "ar-DZ", "name": "Arabisch (Algerien)", "nativeName": "العربية (الجزائر)", "primary": false},
        "ar-MA": {"tag": "ar-MA", "name": "Arabisch (Marokko)", "nativeName": "العربية (المغرب)", "primary": false},
        "ar-IQ": {"tag": "ar-IQ", "name": "Arabisch (Irak)", "nativeName": "العربية (العراق)", "primary": false},
        "ar-SD": {"tag": "ar-SD", "name": "Arabisch (Sudan)", "nativeName": "العربية (السودان)", "primary": false},
        "ar-YE": {"tag": "ar-YE", "name": "Arabisch (Jemen)", "nativeName": "العربية (اليمن)", "primary": false},
        "ar-SY": {"tag": "ar-SY", "name": "Arabisch (Syrien)", "nativeName": "العربية (سوريا)", "primary": false},
        "ar-TN": {"tag": "ar-TN", "name": "Arabisch (Tunesien)", "nativeName": "العربية (تونس)", "primary": false},
        "ar-LY": {"tag": "ar-LY", "name": "Arabisch (Libyen)", "nativeName": "العربية (ليبيا)", "primary": false},
        "ar-JO": {"tag": "ar-JO", "name": "Arabisch (Jordanien)", "nativeName": "العربية (الأردن)", "primary": false},
        "ar-LB": {"tag": "ar-LB", "name": "Arabisch (Libanon)", "nativeName": "العربية (لبنان)", "primary": false},
        "ar-KW": {"tag": "ar-KW", "name": "Arabisch (Kuwait)", "nativeName": "العربية (الكويت)", "primary": false},
        "ar-AE": {"tag": "ar-AE", "name": "Arabisch (Vereinigte Arabische Emirate)", "nativeName": "العربية (الإمارات)", "primary": false},
        "ar-BH": {"tag": "ar-BH", "name": "Arabisch (Bahrain)", "nativeName": "العربية (البحرين)", "primary": false},
        "ar-QA": {"tag": "ar-QA", "name": "Arabisch (Katar)", "nativeName": "العربية (قطر)", "primary": false},
        "ar-OM": {"tag": "ar-OM", "name": "Arabisch (Oman)", "nativeName": "العربية (عمان)", "primary": false},
        "pt-BR": {"tag": "pt-BR", "name": "Portugiesisch (Brasilien)", "nativeName": "Português (Brasil)", "primary": false},
        "pt-PT": {"tag": "pt-PT", "name": "Portugiesisch (Portugal)", "nativeName": "Português (Portugal)", "primary": true},
        "ru-RU": {"tag": "ru-RU", "name": "Russisch (Russland)", "nativeName": "Русский (Россия)", "primary": true},
        "ja-JP": {"tag": "ja-JP", "name": "Japanisch (Japan)", "nativeName": "日本語 (日本)", "primary": true},
        "de-DE": {"tag": "de-DE", "name": "Deutsch (Deutschland)", "nativeName": "Deutsch (Deutschland)", "primary": true},
        "de-AT": {"tag": "de-AT", "name": "Deutsch (Österreich)", "nativeName": "Deutsch (Österreich)", "primary": false},
        "de-CH": {"tag": "de-CH", "name": "Deutsch (Schweiz)", "nativeName": "Deutsch (Schweiz)", "primary": false},
        "fr-FR": {"tag": "fr-FR", "name": "Französisch (Frankreich)", "nativeName": "Français (France)", "primary": true},
        "fr-CA": {"tag": "fr-CA", "name": "Französisch (Kanada)", "nativeName": "Français (Canada)", "primary": false},
        "fr-BE": {"tag": "fr-BE", "name": "Französisch (Belgien)", "nativeName": "Français (Belgique)", "primary": false},
        "fr-CH": {"tag": "fr-CH", "name": "Französisch (Schweiz)", "nativeName": "Français (Suisse)", "primary": false},
        "fr-LU": {"tag": "fr-LU", "name": "Französisch (Luxemburg)", "nativeName": "Français (Luxembourg)", "primary": false},
        "fr-MC": {"tag": "fr-MC", "name": "Französisch (Monaco)", "nativeName": "Français (Monaco)", "primary": false},
        "ko-KR": {"tag": "ko-KR", "name": "Koreanisch (Südkorea)", "nativeName": "한국어 (대한민국)", "primary": true},
        "it-IT": {"tag": "it-IT", "name": "Italienisch (Italien)", "nativeName": "Italiano (Italia)", "primary": true},
        "it-CH": {"tag": "it-CH", "name": "Italienisch (Schweiz)", "nativeName": "Italiano (Svizzera)", "primary": false},
        "nl-NL": {"tag": "nl-NL", "name": "Niederländisch (Niederlande)", "nativeName": "Nederlands (Nederland)", "primary": true},
        "nl-BE": {"tag": "nl-BE", "name": "Niederländisch (Belgien)", "nativeName": "Nederlands (België)", "primary": false},
        "pl-PL": {"tag": "pl-PL", "name": "Polnisch (Polen)", "nativeName": "Polski (Polska)", "primary": false},
        "vi-VN": {"tag": "vi-VN", "name": "Vietnamesisch (Vietnam)", "nativeName": "Tiếng Việt (Việt Nam)", "primary": false},
        "tr-TR": {"tag": "tr-TR", "name": "Türkisch (Türkei)", "nativeName": "Türkçe (Türkiye)", "primary": false},
        "th-TH": {"tag": "th-TH", "name": "Thailändisch (Thailand)", "nativeName": "ไทย (ประเทศไทย)", "primary": false},
        "el-GR": {"tag": "el-GR", "name": "Griechisch (Griechenland)", "nativeName": "Ελληνικά (Ελλάδα)", "primary": false},
        "cs-CZ": {"tag": "cs-CZ", "name": "Tschechisch (Tschechische Republik)", "nativeName": "Čeština (Česká republika)", "primary": false},
        "sv-SE": {"tag": "sv-SE", "name": "Schwedisch (Schweden)", "nativeName": "Svenska (Sverige)", "primary": false},
        "sv-FI": {"tag": "sv-FI", "name": "Schwedisch (Finnland)", "nativeName": "Svenska (Finland)", "primary": false},
        "hu-HU": {"tag": "hu-HU", "name": "Ungarisch (Ungarn)", "nativeName": "Magyar (Magyarország)", "primary": false},
        "fi-FI": {"tag": "fi-FI", "name": "Finnisch (Finnland)", "nativeName": "Suomi (Suomi)", "primary": false},
        "da-DK": {"tag": "da-DK", "name": "Dänisch (Dänemark)", "nativeName": "Dansk (Danmark)", "primary": false},
        "nb-NO": {"tag": "nb-NO", "name": "Norwegisch Bokmål (Norwegen)", "nativeName": "Norsk Bokmål (Norge)", "primary": false},
        "nn-NO": {"tag": "nn-NO", "name": "Norwegisch Nynorsk (Norwegen)", "nativeName": "Norsk Nynorsk (Norge)", "primary": false},
        "he-IL": {"tag": "he-IL", "name": "Hebräisch (Israel)", "nativeName": "עברית (ישראל)", "primary": false},
        "id-ID": {"tag": "id-ID", "name": "Indonesisch (Indonesien)", "nativeName": "Bahasa Indonesia (Indonesia)", "primary": false},
        "ms-MY": {"tag": "ms-MY", "name": "Malaiisch (Malaysia)", "nativeName": "Bahasa Melayu (Malaysia)", "primary": false},
        "ms-BN": {"tag": "ms-BN", "name": "Malaiisch (Brunei)", "nativeName": "Bahasa Melayu (Brunei)", "primary": false},
        "ro-RO": {"tag": "ro-RO", "name": "Rumänisch (Rumänien)", "nativeName": "Română (România)", "primary": false},
        "bg-BG": {"tag": "bg-BG", "name": "Bulgarisch (Bulgarien)", "nativeName": "Български (България)", "primary": false},
        "uk-UA": {"tag": "uk-UA", "name": "Ukrainisch (Ukraine)", "nativeName": "Українська (Україна)", "primary": false},
        "sk-SK": {"tag": "sk-SK", "name": "Slowakisch (Slowakei)", "nativeName": "Slovenčina (Slovensko)", "primary": false},
        "sl-SI": {"tag": "sl-SI", "name": "Slowenisch (Slowenien)", "nativeName": "Slovenščina (Slovenija)", "primary": false},
        "hr-HR": {"tag": "hr-HR", "name": "Kroatisch (Kroatien)", "nativeName": "Hrvatski (Hrvatska)", "primary": false},
        "ca-ES": {"tag": "ca-ES", "name": "Katalanisch (Katalonien)", "nativeName": "Català (Catalunya)", "primary": false},
        "lt-LT": {"tag": "lt-LT", "name": "Litauisch (Litauen)", "nativeName": "Lietuvių (Lietuva)", "primary": false},
        "lv-LV": {"tag": "lv-LV", "name": "Lettisch (Lettland)", "nativeName": "Latviešu (Latvija)", "primary": false},
        "et-EE": {"tag": "et-EE", "name": "Estnisch (Estland)", "nativeName": "Eesti (Eesti)", "primary": false },
        "sq-AL": {"tag": "sq-AL", "name": "Albanisch (Albanien)", "nativeName": "Shqip (Shqipëri)", "primary": false},
        "mk-MK": {"tag": "mk-MK", "name": "Mazedonisch (Nordmazedonien)", "nativeName": "Македонски (Македонија)", "primary": false},
        "be-BY": {"tag": "be-BY", "name": "Weißrussisch (Weißrussland)", "nativeName": "Беларуская (Беларусь)", "primary": false},
        "is-IS": {"tag": "is-IS", "name": "Isländisch (Island)", "nativeName": "Íslenska (Ísland)", "primary": false},
        "gl-ES": {"tag": "gl-ES", "name": "Galicisch (Galicien)", "nativeName": "Galego (Galicia)", "primary": false},
        "eu-ES": {"tag": "eu-ES", "name": "Baskisch (Baskenland)", "nativeName": "Euskara (Euskal Herria)", "primary": false},
        "af-ZA": {"tag": "af-ZA", "name": "Afrikaans (Südafrika)", "nativeName": "Afrikaans (Suid-Afrika)", "primary": false},
        "sw-KE": {"tag": "sw-KE", "name": "Suaheli (Kenia)", "nativeName": "Kiswahili (Kenya)", "primary": false},
        "ta-IN": {"tag": "ta-IN", "name": "Tamil (Indien)", "nativeName": "தமிழ் (இந்தியா)", "primary": false},
        "te-IN": {"tag": "te-IN", "name": "Telugu (Indien)", "nativeName": "తెలుగు (భారతదేశం)", "primary": false},
        "kn-IN": {"tag": "kn-IN", "name": "Kannada (Indien)", "nativeName": "ಕನ್ನಡ (ಭಾರತ)", "primary": false},
        "mr-IN": {"tag": "mr-IN", "name": "Marathi (Indien)", "nativeName": "मराठी (भारत)", "primary": false},
        "gu-IN": {"tag": "gu-IN", "name": "Gujarati (Indien)", "nativeName": "ગુજરાતી (ભારત)", "primary": false},
        "pa-IN": {"tag": "pa-IN", "name": "Punjabi (Indien)", "nativeName": "ਪੰਜਾਬੀ (ਭਾਰਤ)", "primary": false},
        "kok-IN": {"tag": "kok-IN", "name": "Konkani (Indien)", "nativeName": "कोंकणी (भारत)", "primary": false},
        "sa-IN": {"tag": "sa-IN", "name": "Sanskrit (Indien)", "nativeName": "संस्कृत (भारत)", "primary": false},
        "ur-PK": {"tag": "ur-PK", "name": "Urdu (Pakistan)", "nativeName": "اردو (پاکستان)", "primary": false},
        "fa-IR": {"tag": "fa-IR", "name": "Persisch (Iran)", "nativeName": "فارسی (ایران)", "primary": false},
        "syr-SY": {"tag": "syr-SY", "name": "Syrisch (Syrien)", "nativeName": "ܣܘܪܝܝܐ (ܣܘܪܝܐ)", "primary": false},
        "div-MV": {"tag": "div-MV", "name": "Dhivehi (Malediven)", "nativeName": "ދިވެހި (މޯލްޑިވްސް)", "primary": false},
        "ka-GE": {"tag": "ka-GE", "name": "Georgisch (Georgien)", "nativeName": "ქართული (საქართველო)", "primary": false}
}

const { getTag, getTags, getPrimaryTags } = createTagUtils(tags)
export {
    getTag, getTags,getPrimaryTags
}
export * from './types'    