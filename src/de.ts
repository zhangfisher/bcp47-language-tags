import { createTagUtils } from './utils'

export const tags = {
        "zh-CN": {"tag": "zh-CN", "name": "Chinesisch (Vereinfacht)", "nativeName": "简体中文", "default": true},
        "zh-TW": {"tag": "zh-TW", "name": "Chinesisch (Traditionell - Taiwan)", "nativeName": "繁體中文 (臺灣)"},
        "zh-HK": {"tag": "zh-HK", "name": "Chinesisch (Traditionell - Hongkong)", "nativeName": "繁體中文（香港）"},
        "zh-MO": {"tag": "zh-MO", "name": "Chinesisch (Traditionell - Macau)", "nativeName": "繁體中文 (Traditional Chinese - Macau)"},
        "zh-SG": {"tag": "zh-SG", "name": "Chinesisch (Vereinfacht - Singapur)", "nativeName": "简体中文 (Simplified Chinese - Singapore)"},      
        "zh-CHS": {"tag": "zh-CHS", "name": "Chinesisch (Vereinfacht)", "nativeName": "简体中文"},
        "zh-CHT": {"tag": "zh-CHT", "name": "Chinesisch (Traditionell)", "nativeName": "繁體中文 (Traditional Chinese)"},
        "en-US": {"tag": "en-US", "name": "Englisch (Vereinigte Staaten)", "nativeName": "English (United States)", "default": true},
        "en-GB": {"tag": "en-GB", "name": "Englisch (Vereinigtes Königreich)", "nativeName": "English (United Kingdom)"},
        "en-CA": {"tag": "en-CA", "name": "Englisch (Kanada)", "nativeName": "English (Canada)"},
        "en-AU": {"tag": "en-AU", "name": "Englisch (Australien)", "nativeName": "English (Australia)"},
        "en-IN": {"tag": "en-IN", "name": "Englisch (Indien)", "nativeName": "English (India)"},
        "en-ZA": {"tag": "en-ZA", "name": "Englisch (Südafrika)", "nativeName": "English (South Africa)"},
        "en-NZ": {"tag": "en-NZ", "name": "Englisch (Neuseeland)", "nativeName": "English (New Zealand)"},
        "en-IE": {"tag": "en-IE", "name": "Englisch (Irland)", "nativeName": "English (Ireland)"},
        "en-PH": {"tag": "en-PH", "name": "Englisch (Philippinen)", "nativeName": "English (Philippines)"},
        "en-ZW": {"tag": "en-ZW", "name": "Englisch (Simbabwe)", "nativeName": "English (Zimbabwe)"},
        "en-BZ": {"tag": "en-BZ", "name": "Englisch (Belize)", "nativeName": "English (Belize)"},
        "en-CB": {"tag": "en-CB", "name": "Englisch (Karibik)", "nativeName": "English (Caribbean)"},
        "en-JM": {"tag": "en-JM", "name": "Englisch (Jamaika)", "nativeName": "English (Jamaica)"},
        "en-TT": {"tag": "en-TT", "name": "Englisch (Trinidad und Tobago)", "nativeName": "English (Trinidad and Tobago)"},
        "hi-IN": {"tag": "hi-IN", "name": "Hindi (Indien)", "nativeName": "हिन्दी (Hindi)"},
        "es-ES": {"tag": "es-ES", "name": "Spanisch (Spanien)", "nativeName": "Español (España)", "default": true},
        "es-MX": {"tag": "es-MX", "name": "Spanisch (Mexiko)", "nativeName": "Español (México)"},
        "es-AR": {"tag": "es-AR", "name": "Spanisch (Argentinien)", "nativeName": "Español (Argentina)"},
        "es-CO": {"tag": "es-CO", "name": "Spanisch (Kolumbien)", "nativeName": "Español (Colombia)"},
        "es-PE": {"tag": "es-PE", "name": "Spanisch (Peru)", "nativeName": "Español (Perú)"},
        "es-VE": {"tag": "es-VE", "name": "Spanisch (Venezuela)", "nativeName": "Español (Venezuela)"},
        "es-CL": {"tag": "es-CL", "name": "Spanisch (Chile)", "nativeName": "Español (Chile)"},
        "es-EC": {"tag": "es-EC", "name": "Spanisch (Ecuador)", "nativeName": "Español (Ecuador)"},
        "es-GT": {"tag": "es-GT", "name": "Spanisch (Guatemala)", "nativeName": "Español (Guatemala)"},
        "es-CU": {"tag": "es-CU", "name": "Spanisch (Kuba)", "nativeName": "Español (Cuba)"},
        "es-BO": {"tag": "es-BO", "name": "Spanisch (Bolivien)", "nativeName": "Español (Bolivia)"},
        "es-DO": {"tag": "es-DO", "name": "Spanisch (Dominikanische Republik)", "nativeName": "Español (República Dominicana)"},
        "es-HN": {"tag": "es-HN", "name": "Spanisch (Honduras)", "nativeName": "Español (Honduras)"},
        "es-PY": {"tag": "es-PY", "name": "Spanisch (Paraguay)", "nativeName": "Español (Paraguay)"},
        "es-SV": {"tag": "es-SV", "name": "Spanisch (El Salvador)", "nativeName": "Español (El Salvador)"},
        "es-NI": {"tag": "es-NI", "name": "Spanisch (Nicaragua)", "nativeName": "Español (Nicaragua)"},
        "es-PR": {"tag": "es-PR", "name": "Spanisch (Puerto Rico)", "nativeName": "Español (Puerto Rico)"},
        "es-UY": {"tag": "es-UY", "name": "Spanisch (Uruguay)", "nativeName": "Español (Uruguay)"},
        "es-PA": {"tag": "es-PA", "name": "Spanisch (Panama)", "nativeName": "Español (Panamá)"},
        "es-CR": {"tag": "es-CR", "name": "Spanisch (Costa Rica)", "nativeName": "Español (Costa Rica)"},
        "ar-EG": {"tag": "ar-EG", "name": "Arabisch (Ägypten)", "nativeName": "العربية (مصر)", "default": true},
        "ar-SA": {"tag": "ar-SA", "name": "Arabisch (Saudi-Arabien)", "nativeName": "العربية (السعودية)"},
        "ar-DZ": {"tag": "ar-DZ", "name": "Arabisch (Algerien)", "nativeName": "العربية (الجزائر)"},
        "ar-MA": {"tag": "ar-MA", "name": "Arabisch (Marokko)", "nativeName": "العربية (المغرب)"},
        "ar-IQ": {"tag": "ar-IQ", "name": "Arabisch (Irak)", "nativeName": "العربية (العراق)"},
        "ar-SD": {"tag": "ar-SD", "name": "Arabisch (Sudan)", "nativeName": "العربية (السودان)"},
        "ar-YE": {"tag": "ar-YE", "name": "Arabisch (Jemen)", "nativeName": "العربية (اليمن)"},
        "ar-SY": {"tag": "ar-SY", "name": "Arabisch (Syrien)", "nativeName": "العربية (سوريا)"},
        "ar-TN": {"tag": "ar-TN", "name": "Arabisch (Tunesien)", "nativeName": "العربية (تونس)"},
        "ar-LY": {"tag": "ar-LY", "name": "Arabisch (Libyen)", "nativeName": "العربية (ليبيا)"},
        "ar-JO": {"tag": "ar-JO", "name": "Arabisch (Jordanien)", "nativeName": "العربية (الأردن)"},
        "ar-LB": {"tag": "ar-LB", "name": "Arabisch (Libanon)", "nativeName": "العربية (لبنان)"},
        "ar-KW": {"tag": "ar-KW", "name": "Arabisch (Kuwait)", "nativeName": "العربية (الكويت)"},
        "ar-AE": {"tag": "ar-AE", "name": "Arabisch (Vereinigte Arabische Emirate)", "nativeName": "العربية (الإمارات)"},
        "ar-BH": {"tag": "ar-BH", "name": "Arabisch (Bahrain)", "nativeName": "العربية (البحرين)"},
        "ar-QA": {"tag": "ar-QA", "name": "Arabisch (Katar)", "nativeName": "العربية (قطر)"},
        "ar-OM": {"tag": "ar-OM", "name": "Arabisch (Oman)", "nativeName": "العربية (عمان)"},
        "pt-BR": {"tag": "pt-BR", "name": "Portugiesisch (Brasilien)", "nativeName": "Português (Brasil)"},
        "pt-PT": {"tag": "pt-PT", "name": "Portugiesisch (Portugal)", "nativeName": "Português (Portugal)", "default": true},
        "ru-RU": {"tag": "ru-RU", "name": "Russisch (Russland)", "nativeName": "Русский (Россия)", "default": true},
        "ja-JP": {"tag": "ja-JP", "name": "Japanisch (Japan)", "nativeName": "日本語 (日本)", "default": true},
        "de-DE": {"tag": "de-DE", "name": "Deutsch (Deutschland)", "nativeName": "Deutsch (Deutschland)", "default": true},
        "de-AT": {"tag": "de-AT", "name": "Deutsch (Österreich)", "nativeName": "Deutsch (Österreich)"},
        "de-CH": {"tag": "de-CH", "name": "Deutsch (Schweiz)", "nativeName": "Deutsch (Schweiz)"},
        "fr-FR": {"tag": "fr-FR", "name": "Französisch (Frankreich)", "nativeName": "Français (France)", "default": true},
        "fr-CA": {"tag": "fr-CA", "name": "Französisch (Kanada)", "nativeName": "Français (Canada)"},
        "fr-BE": {"tag": "fr-BE", "name": "Französisch (Belgien)", "nativeName": "Français (Belgique)"},
        "fr-CH": {"tag": "fr-CH", "name": "Französisch (Schweiz)", "nativeName": "Français (Suisse)"},
        "fr-LU": {"tag": "fr-LU", "name": "Französisch (Luxemburg)", "nativeName": "Français (Luxembourg)"},
        "fr-MC": {"tag": "fr-MC", "name": "Französisch (Monaco)", "nativeName": "Français (Monaco)"},
        "ko-KR": {"tag": "ko-KR", "name": "Koreanisch (Südkorea)", "nativeName": "한국어 (대한민국)"},
        "it-IT": {"tag": "it-IT", "name": "Italienisch (Italien)", "nativeName": "Italiano (Italia)", "default": true },
        "it-CH": {"tag": "it-CH", "name": "Italienisch (Schweiz)", "nativeName": "Italiano (Svizzera)"},
        "nl-NL": {"tag": "nl-NL", "name": "Niederländisch (Niederlande)", "nativeName": "Nederlands (Nederland)"},
        "nl-BE": {"tag": "nl-BE", "name": "Niederländisch (Belgien)", "nativeName": "Nederlands (België)"},
        "pl-PL": {"tag": "pl-PL", "name": "Polnisch (Polen)", "nativeName": "Polski (Polska)"},
        "vi-VN": {"tag": "vi-VN", "name": "Vietnamesisch (Vietnam)", "nativeName": "Tiếng Việt (Việt Nam)"},
        "tr-TR": {"tag": "tr-TR", "name": "Türkisch (Türkei)", "nativeName": "Türkçe (Türkiye)"},
        "th-TH": {"tag": "th-TH", "name": "Thailändisch (Thailand)", "nativeName": "ไทย (ประเทศไทย)"},
        "el-GR": {"tag": "el-GR", "name": "Griechisch (Griechenland)", "nativeName": "Ελληνικά (Ελλάδα)"},
        "cs-CZ": {"tag": "cs-CZ", "name": "Tschechisch (Tschechische Republik)", "nativeName": "Čeština (Česká republika)"},
        "sv-SE": {"tag": "sv-SE", "name": "Schwedisch (Schweden)", "nativeName": "Svenska (Sverige)", "default": true},
        "sv-FI": {"tag": "sv-FI", "name": "Schwedisch (Finnland)", "nativeName": "Svenska (Finland)"},
        "hu-HU": {"tag": "hu-HU", "name": "Ungarisch (Ungarn)", "nativeName": "Magyar (Magyarország)"},
        "fi-FI": {"tag": "fi-FI", "name": "Finnisch (Finnland)", "nativeName": "Suomi (Suomi)"},
        "da-DK": {"tag": "da-DK", "name": "Dänisch (Dänemark)", "nativeName": "Dansk (Danmark)"},
        "nb-NO": {"tag": "nb-NO", "name": "Norwegisch Bokmål (Norwegen)", "nativeName": "Norsk Bokmål (Norge)"},
        "nn-NO": {"tag": "nn-NO", "name": "Norwegisch Nynorsk (Norwegen)", "nativeName": "Norsk Nynorsk (Norge)"},
        "he-IL": {"tag": "he-IL", "name": "Hebräisch (Israel)", "nativeName": "עברית (ישראל)"},
        "id-ID": {"tag": "id-ID", "name": "Indonesisch (Indonesien)", "nativeName": "Bahasa Indonesia (Indonesia)"},
        "ms-MY": {"tag": "ms-MY", "name": "Malaiisch (Malaysia)", "nativeName": "Bahasa Melayu (Malaysia)"},
        "ms-BN": {"tag": "ms-BN", "name": "Malaiisch (Brunei)", "nativeName": "Bahasa Melayu (Brunei)"},
        "ro-RO": {"tag": "ro-RO", "name": "Rumänisch (Rumänien)", "nativeName": "Română (România)"},
        "bg-BG": {"tag": "bg-BG", "name": "Bulgarisch (Bulgarien)", "nativeName": "Български (България)"},
        "uk-UA": {"tag": "uk-UA", "name": "Ukrainisch (Ukraine)", "nativeName": "Українська (Україна)"},
        "sk-SK": {"tag": "sk-SK", "name": "Slowakisch (Slowakei)", "nativeName": "Slovenčina (Slovensko)"},
        "sl-SI": {"tag": "sl-SI", "name": "Slowenisch (Slowenien)", "nativeName": "Slovenščina (Slovenija)"},
        "hr-HR": {"tag": "hr-HR", "name": "Kroatisch (Kroatien)", "nativeName": "Hrvatski (Hrvatska)"},
        "ca-ES": {"tag": "ca-ES", "name": "Katalanisch (Katalonien)", "nativeName": "Català (Catalunya)"},
        "lt-LT": {"tag": "lt-LT", "name": "Litauisch (Litauen)", "nativeName": "Lietuvių (Lietuva)"},
        "lv-LV": {"tag": "lv-LV", "name": "Lettisch (Lettland)", "nativeName": "Latviešu (Latvija)"},
        "et-EE": {"tag": "et-EE", "name": "Estnisch (Estland)", "nativeName": "Eesti (Eesti)"},        
        "sq-AL": {"tag": "sq-AL", "name": "Albanisch (Albanien)", "nativeName": "Shqip (Shqipëri)"},
        "mk-MK": {"tag": "mk-MK", "name": "Mazedonisch (Nordmazedonien)", "nativeName": "Македонски (Македонија)"},
        "be-BY": {"tag": "be-BY", "name": "Weißrussisch (Weißrussland)", "nativeName": "Беларуская (Беларусь)"},
        "is-IS": {"tag": "is-IS", "name": "Isländisch (Island)", "nativeName": "Íslenska (Ísland)"},
        "gl-ES": {"tag": "gl-ES", "name": "Galicisch (Galicien)", "nativeName": "Galego (Galicia)"},
        "eu-ES": {"tag": "eu-ES", "name": "Baskisch (Baskenland)", "nativeName": "Euskara (Euskal Herria)"},
        "af-ZA": {"tag": "af-ZA", "name": "Afrikaans (Südafrika)", "nativeName": "Afrikaans (Suid-Afrika)"},
        "sw-KE": {"tag": "sw-KE", "name": "Suaheli (Kenia)", "nativeName": "Kiswahili (Kenya)"},
        "ta-IN": {"tag": "ta-IN", "name": "Tamil (Indien)", "nativeName": "தமிழ் (இந்தியா)"},
        "te-IN": {"tag": "te-IN", "name": "Telugu (Indien)", "nativeName": "తెలుగు (భారతదేశం)"},
        "kn-IN": {"tag": "kn-IN", "name": "Kannada (Indien)", "nativeName": "ಕನ್ನಡ (ಭಾರತ)"},
        "mr-IN": {"tag": "mr-IN", "name": "Marathi (Indien)", "nativeName": "मराठी (भारत)"},
        "gu-IN": {"tag": "gu-IN", "name": "Gujarati (Indien)", "nativeName": "ગુજરાતી (ભારત)"},
        "pa-IN": {"tag": "pa-IN", "name": "Punjabi (Indien)", "nativeName": "ਪੰਜਾਬੀ (ਭਾਰਤ)"},
        "kok-IN": {"tag": "kok-IN", "name": "Konkani (Indien)", "nativeName": "कोंकणी (भारत)"},
        "sa-IN": {"tag": "sa-IN", "name": "Sanskrit (Indien)", "nativeName": "संस्कृत (भारत)"},
        "ur-PK": {"tag": "ur-PK", "name": "Urdu (Pakistan)", "nativeName": "اردو (پاکستان)"},
        "fa-IR": {"tag": "fa-IR", "name": "Persisch (Iran)", "nativeName": "فارسی (ایران)"},
        "syr-SY": {"tag": "syr-SY", "name": "Syrisch (Syrien)", "nativeName": "ܣܘܪܝܝܐ (ܣܘܪܝܐ)"},
        "div-MV": {"tag": "div-MV", "name": "Dhivehi (Malediven)", "nativeName": "ދިވެހި (މޯލްޑިވްސް)"},
        "ka-GE": {"tag": "ka-GE", "name": "Georgisch (Georgien)", "nativeName": "ქართული (საქართველო)"},      
}

const { getTag, getTags, getDefaultTags } = createTagUtils(tags)
export {
    getTag, getTags,getDefaultTags
}
export * from './types'    