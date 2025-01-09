import { createTagUtils } from './utils'

export const tags = {
        "zh-CN": {"tag": "zh-CN", "name": "الصينية المبسطة", "nativeName": "简体中文", "primary": true },
        "zh-TW": {"tag": "zh-TW", "name": "الصينية التقليدية - تايوان", "nativeName": "繁體中文 (臺灣)", "primary": false },
        "zh-HK": {"tag": "zh-HK", "name": "الصينية التقليدية - هونغ كونغ", "nativeName": "繁體中文（香港）", "primary": false },
        "zh-MO": {"tag": "zh-MO", "name": "الصينية التقليدية - ماكاو", "nativeName": "繁體中文 (Traditional Chinese - Macau)", "primary": false },
        "zh-SG": {"tag": "zh-SG", "name": "الصينية المبسطة - سنغافورة", "nativeName": "简体中文 (Simplified Chinese - Singapore)", "primary": false },      
        "zh-CHS": {"tag": "zh-CHS", "name": "الصينية المبسطة", "nativeName": "简体中文", "primary": false },
        "zh-CHT": {"tag": "zh-CHT", "name": "الصينية التقليدية", "nativeName": "繁體中文 (Traditional Chinese)", "primary": false },
        "en-US": {"tag": "en-US", "name": "الإنجليزية (الولايات المتحدة)", "nativeName": "English (United States)", "primary": true },
        "en-GB": {"tag": "en-GB", "name": "الإنجليزية (المملكة المتحدة)", "nativeName": "English (United Kingdom)", "primary": false },
        "en-CA": {"tag": "en-CA", "name": "الإنجليزية (كندا)", "nativeName": "English (Canada)", "primary": false },
        "en-AU": {"tag": "en-AU", "name": "الإنجليزية (أستراليا)", "nativeName": "English (Australia)", "primary": false },
        "en-IN": {"tag": "en-IN", "name": "الإنجليزية (الهند)", "nativeName": "English (India)", "primary": false },
        "en-ZA": {"tag": "en-ZA", "name": "الإنجليزية (جنوب أفريقيا)", "nativeName": "English (South Africa)", "primary": false },
        "en-NZ": {"tag": "en-NZ", "name": "الإنجليزية (نيوزيلندا)", "nativeName": "English (New Zealand)", "primary": false },
        "en-IE": {"tag": "en-IE", "name": "الإنجليزية (أيرلندا)", "nativeName": "English (Ireland)", "primary": false },
        "en-PH": {"tag": "en-PH", "name": "الإنجليزية (الفلبين)", "nativeName": "English (Philippines)", "primary": false },
        "en-ZW": {"tag": "en-ZW", "name": "الإنجليزية (زيمبابوي)", "nativeName": "English (Zimbabwe)", "primary": false },
        "en-BZ": {"tag": "en-BZ", "name": "الإنجليزية (بليز)", "nativeName": "English (Belize)", "primary": false },
        "en-CB": {"tag": "en-CB", "name": "الإنجليزية (الكاريبي)", "nativeName": "English (Caribbean)", "primary": false },
        "en-JM": {"tag": "en-JM", "name": "الإنجليزية (جامايكا)", "nativeName": "English (Jamaica)", "primary": false },
        "en-TT": {"tag": "en-TT", "name": "الإنجليزية (ترينيداد وتوباغو)", "nativeName": "English (Trinidad and Tobago)", "primary": false },
        "hi-IN": {"tag": "hi-IN", "name": "الهندية (الهند)", "nativeName": "हिन्दी (Hindi)", "primary": false },
        "es-ES": {"tag": "es-ES", "name": "الإسبانية (إسبانيا)", "nativeName": "Español (España)", "primary": true },
        "es-MX": {"tag": "es-MX", "name": "الإسبانية (المكسيك)", "nativeName": "Español (México)", "primary": false },
        "es-AR": {"tag": "es-AR", "name": "الإسبانية (الأرجنتين)", "nativeName": "Español (Argentina)", "primary": false },
        "es-CO": {"tag": "es-CO", "name": "الإسبانية (كولومبيا)", "nativeName": "Español (Colombia)", "primary": false },
        "es-PE": {"tag": "es-PE", "name": "الإسبانية (بيرو)", "nativeName": "Español (Perú)", "primary": false },
        "es-VE": {"tag": "es-VE", "name": "الإسبانية (فنزويلا)", "nativeName": "Español (Venezuela)", "primary": false },
        "es-CL": {"tag": "es-CL", "name": "الإسبانية (تشيلي)", "nativeName": "Español (Chile)", "primary": false },
        "es-EC": {"tag": "es-EC", "name": "الإسبانية (الإكوادور)", "nativeName": "Español (Ecuador)", "primary": false },
        "es-GT": {"tag": "es-GT", "name": "الإسبانية (غواتيمالا)", "nativeName": "Español (Guatemala)", "primary": false },
        "es-CU": {"tag": "es-CU", "name": "الإسبانية (كوبا)", "nativeName": "Español (Cuba)", "primary": false },
        "es-BO": {"tag": "es-BO", "name": "الإسبانية (بوليفيا)", "nativeName": "Español (Bolivia)", "primary": false },
        "es-DO": {"tag": "es-DO", "name": "الإسبانية (جمهورية الدومينيكان)", "nativeName": "Español (República Dominicana)", "primary": false },
        "es-HN": {"tag": "es-HN", "name": "الإسبانية (هندوراس)", "nativeName": "Español (Honduras)", "primary": false },
        "es-PY": {"tag": "es-PY", "name": "الإسبانية (باراغواي)", "nativeName": "Español (Paraguay)", "primary": false },
        "es-SV": {"tag": "es-SV", "name": "الإسبانية (السلفادور)", "nativeName": "Español (El Salvador)", "primary": false },
        "es-NI": {"tag": "es-NI", "name": "الإسبانية (نيكاراغوا)", "nativeName": "Español (Nicaragua)", "primary": false },
        "es-PR": {"tag": "es-PR", "name": "الإسبانية (بورتوريكو)", "nativeName": "Español (Puerto Rico)", "primary": false },
        "es-UY": {"tag": "es-UY", "name": "الإسبانية (أوروغواي)", "nativeName": "Español (Uruguay)", "primary": false },
        "es-PA": {"tag": "es-PA", "name": "الإسبانية (بنما)", "nativeName": "Español (Panamá)", "primary": false },
        "es-CR": {"tag": "es-CR", "name": "الإسبانية (كوستاريكا)", "nativeName": "Español (Costa Rica)", "primary": false },
        "ar-EG": {"tag": "ar-EG", "name": "العربية (مصر)", "nativeName": "العربية (مصر)", "primary": true },
        "ar-SA": {"tag": "ar-SA", "name": "العربية (السعودية)", "nativeName": "العربية (السعودية)", "primary": false },
        "ar-DZ": {"tag": "ar-DZ", "name": "العربية (الجزائر)", "nativeName": "العربية (الجزائر)", "primary": false },
        "ar-MA": {"tag": "ar-MA", "name": "العربية (المغرب)", "nativeName": "العربية (المغرب)", "primary": false },
        "ar-IQ": {"tag": "ar-IQ", "name": "العربية (العراق)", "nativeName": "العربية (العراق)", "primary": false },
        "ar-SD": {"tag": "ar-SD", "name": "العربية (السودان)", "nativeName": "العربية (السودان)", "primary": false },
        "ar-YE": {"tag": "ar-YE", "name": "العربية (اليمن)", "nativeName": "العربية (اليمن)", "primary": false },
        "ar-SY": {"tag": "ar-SY", "name": "العربية (سوريا)", "nativeName": "العربية (سوريا)", "primary": false },
        "ar-TN": {"tag": "ar-TN", "name": "العربية (تونس)", "nativeName": "العربية (تونس)", "primary": false },
        "ar-LY": {"tag": "ar-LY", "name": "العربية (ليبيا)", "nativeName": "العربية (ليبيا)", "primary": false },
        "ar-JO": {"tag": "ar-JO", "name": "العربية (الأردن)", "nativeName": "العربية (الأردن)", "primary": false },
        "ar-LB": {"tag": "ar-LB", "name": "العربية (لبنان)", "nativeName": "العربية (لبنان)", "primary": false },
        "ar-KW": {"tag": "ar-KW", "name": "العربية (الكويت)", "nativeName": "العربية (الكويت)", "primary": false },
        "ar-AE": {"tag": "ar-AE", "name": "العربية (الإمارات)", "nativeName": "العربية (الإمارات)", "primary": false },
        "ar-BH": {"tag": "ar-BH", "name": "العربية (البحرين)", "nativeName": "العربية (البحرين)", "primary": false },
        "ar-QA": {"tag": "ar-QA", "name": "العربية (قطر)", "nativeName": "العربية (قطر)", "primary": false },
        "ar-OM": {"tag": "ar-OM", "name": "العربية (عمان)", "nativeName": "العربية (عمان)", "primary": false },
        "pt-BR": {"tag": "pt-BR", "name": "البرتغالية (البرازيل)", "nativeName": "Português (Brasil)", "primary": false },
        "pt-PT": {"tag": "pt-PT", "name": "البرتغالية (البرتغال)", "nativeName": "Português (Portugal)", "primary": true },
        "ru-RU": {"tag": "ru-RU", "name": "الروسية (روسيا)", "nativeName": "Русский (Россия)", "primary": true },
        "ja-JP": {"tag": "ja-JP", "name": "اليابانية (اليابان)", "nativeName": "日本語 (日本)", "primary": true },
        "de-DE": {"tag": "de-DE", "name": "الألمانية (ألمانيا)", "nativeName": "Deutsch (Deutschland)", "primary": true },
        "de-AT": {"tag": "de-AT", "name": "الألمانية (النمسا)", "nativeName": "Deutsch (Österreich)", "primary": false },
        "de-CH": {"tag": "de-CH", "name": "الألمانية (سويسرا)", "nativeName": "Deutsch (Schweiz)", "primary": false },
        "fr-FR": {"tag": "fr-FR", "name": "الفرنسية (فرنسا)", "nativeName": "Français (France)", "primary": true },
        "fr-CA": {"tag": "fr-CA", "name": "الفرنسية (كندا)", "nativeName": "Français (Canada)", "primary": false },
        "fr-BE": {"tag": "fr-BE", "name": "الفرنسية (بلجيكا)", "nativeName": "Français (Belgique)", "primary": false },
        "fr-CH": {"tag": "fr-CH", "name": "الفرنسية (سويسرا)", "nativeName": "Français (Suisse)", "primary": false },
        "fr-LU": {"tag": "fr-LU", "name": "الفرنسية (لوكسمبورغ)", "nativeName": "Français (Luxembourg)", "primary": false },
        "fr-MC": {"tag": "fr-MC", "name": "الفرنسية (موناكو)", "nativeName": "Français (Monaco)", "primary": false },
        "ko-KR": {"tag": "ko-KR", "name": "الكورية (كوريا الجنوبية)", "nativeName": "한국어 (대한민국)", "primary": true },
        "it-IT": {"tag": "it-IT", "name": "الإيطالية (إيطاليا)", "nativeName": "Italiano (Italia)", "primary": true },
        "it-CH": {"tag": "it-CH", "name": "الإيطالية (سويسرا)", "nativeName": "Italiano (Svizzera)", "primary": false },
        "nl-NL": {"tag": "nl-NL", "name": "الهولندية (هولندا)", "nativeName": "Nederlands (Nederland)", "primary": true },
        "nl-BE": {"tag": "nl-BE", "name": "الهولندية (بلجيكا)", "nativeName": "Nederlands (België)", "primary": false },
        "pl-PL": {"tag": "pl-PL", "name": "البولندية (بولندا)", "nativeName": "Polski (Polska)", "primary": false },
        "vi-VN": {"tag": "vi-VN", "name": "الفيتنامية (فيتنام)", "nativeName": "Tiếng Việt (Việt Nam)", "primary": false },
        "tr-TR": {"tag": "tr-TR", "name": "التركية (تركيا)", "nativeName": "Türkçe (Türkiye)", "primary": false },
        "th-TH": {"tag": "th-TH", "name": "التايلاندية (تايلاند)", "nativeName": "ไทย (ประเทศไทย)", "primary": false },
        "el-GR": {"tag": "el-GR", "name": "اليونانية (اليونان)", "nativeName": "Ελληνικά (Ελλάδα)", "primary": false },
        "cs-CZ": {"tag": "cs-CZ", "name": "التشيكية (جمهورية التشيك)", "nativeName": "Čeština (Česká republika)", "primary": false },
        "sv-SE": {"tag": "sv-SE", "name": "السويدية (السويد)", "nativeName": "Svenska (Sverige)", "primary": false },
        "sv-FI": {"tag": "sv-FI", "name": "السويدية (فنلندا)", "nativeName": "Svenska (Finland)", "primary": false },
        "hu-HU": {"tag": "hu-HU", "name": "الهنغارية (هنغاريا)", "nativeName": "Magyar (Magyarország)", "primary": false },
        "fi-FI": {"tag": "fi-FI", "name": "الفنلندية (فنلندا)", "nativeName": "Suomi (Suomi)", "primary": false },
        "da-DK": {"tag": "da-DK", "name": "الدنماركية (الدنمارك)", "nativeName": "Dansk (Danmark)", "primary": false },
        "nb-NO": {"tag": "nb-NO", "name": "النرويجية بوكمال (النرويج)", "nativeName": "Norsk Bokmål (Norge)", "primary": false },
        "nn-NO": {"tag": "nn-NO", "name": "النرويجية نينورسك (النرويج)", "nativeName": "Norsk Nynorsk (Norge)", "primary": false },
        "he-IL": {"tag": "he-IL", "name": "العبرية (إسرائيل)", "nativeName": "עברית (ישראל)", "primary": false },
        "id-ID": {"tag": "id-ID", "name": "الإندونيسية (إندونيسيا)", "nativeName": "Bahasa Indonesia (Indonesia)", "primary": false },
        "ms-MY": {"tag": "ms-MY", "name": "الملايو (ماليزيا)", "nativeName": "Bahasa Melayu (Malaysia)", "primary": false },
        "ms-BN": {"tag": "ms-BN", "name": "الملايو (بروناي)", "nativeName": "Bahasa Melayu (Brunei)", "primary": false },       
        "ro-RO": {"tag": "ro-RO", "name": "الرومانية (رومانيا)", "nativeName": "Română (România)", "primary": false },
        "bg-BG": {"tag": "bg-BG", "name": "البلغارية (بلغاريا)", "nativeName": "Български (България)", "primary": false },
        "uk-UA": {"tag": "uk-UA", "name": "الأوكرانية (أوكرانيا)", "nativeName": "Українська (Україна)", "primary": false },
        "sk-SK": {"tag": "sk-SK", "name": "السلوفاكية (سلوفاكيا)", "nativeName": "Slovenčina (Slovensko)", "primary": false },
        "sl-SI": {"tag": "sl-SI", "name": "السلوفينية (سلوفينيا)", "nativeName": "Slovenščina (Slovenija)", "primary": false },
        "hr-HR": {"tag": "hr-HR", "name": "الكرواتية (كرواتيا)", "nativeName": "Hrvatski (Hrvatska)", "primary": false },
        "ca-ES": {"tag": "ca-ES", "name": "الكتالونية (كاتالونيا)", "nativeName": "Català (Catalunya)", "primary": false },
        "lt-LT": {"tag": "lt-LT", "name": "الليتوانية (ليتوانيا)", "nativeName": "Lietuvių (Lietuva)", "primary": false },
        "lv-LV": {"tag": "lv-LV", "name": "اللاتفية (لاتفيا)", "nativeName": "Latviešu (Latvija)", "primary": false },
        "et-EE": {"tag": "et-EE", "name": "الإستونية (إستونيا)", "nativeName": "Eesti (Eesti)", "primary": false },
        "sq-AL": {"tag": "sq-AL", "name": "الألبانية (ألبانيا)", "nativeName": "Shqip (Shqipëri)", "primary": false },
        "mk-MK": {"tag": "mk-MK", "name": "المقدونية (مقدونيا الشمالية)", "nativeName": "Македонски (Македонија)", "primary": false },
        "be-BY": {"tag": "be-BY", "name": "البيلاروسية (بيلاروسيا)", "nativeName": "Беларуская (Беларусь)", "primary": false },
        "is-IS": {"tag": "is-IS", "name": "الأيسلندية (أيسلندا)", "nativeName": "Íslenska (Ísland)", "primary": false },
        "gl-ES": {"tag": "gl-ES", "name": "الجاليكية (غاليسيا)", "nativeName": "Galego (Galicia)", "primary": false },
        "eu-ES": {"tag": "eu-ES", "name": "الباسكية (بلاد الباسك)", "nativeName": "Euskara (Euskal Herria)", "primary": false },
        "af-ZA": {"tag": "af-ZA", "name": "الأفريكانية (جنوب أفريقيا)", "nativeName": "Afrikaans (Suid-Afrika)", "primary": false },
        "sw-KE": {"tag": "sw-KE", "name": "السواحيلية (كينيا)", "nativeName": "Kiswahili (Kenya)", "primary": false },
        "ta-IN": {"tag": "ta-IN", "name": "التاميلية (الهند)", "nativeName": "தமிழ் (இந்தியா)", "primary": false },
        "te-IN": {"tag": "te-IN", "name": "التيلوجو (الهند)", "nativeName": "తెలుగు (భారతదేశం)", "primary": false },
        "kn-IN": {"tag": "kn-IN", "name": "الكانادا (الهند)", "nativeName": "ಕನ್ನಡ (ಭಾರತ)", "primary": false },
        "mr-IN": {"tag": "mr-IN", "name": "الماراثية (الهند)", "nativeName": "मराठी (भारत)", "primary": false },
        "gu-IN": {"tag": "gu-IN", "name": "الغوجاراتية (الهند)", "nativeName": "ગુજરાતી (ભારત)", "primary": false },
        "pa-IN": {"tag": "pa-IN", "name": "البنجابية (الهند)", "nativeName": "ਪੰਜਾਬੀ (ਭਾਰਤ)", "primary": false },
        "kok-IN": {"tag": "kok-IN", "name": "الكونكانية (الهند)", "nativeName": "कोंकणी (भारत)", "primary": false },
        "sa-IN": {"tag": "sa-IN", "name": "السنسكريتية (الهند)", "nativeName": "संस्कृत (भारत)", "primary": false },
        "ur-PK": {"tag": "ur-PK", "name": "الأردية (باكستان)", "nativeName": "اردو (پاکستان)", "primary": false },
        "fa-IR": {"tag": "fa-IR", "name": "الفارسية (إيران)", "nativeName": "فارسی (ایران)", "primary": false },
        "syr-SY": {"tag": "syr-SY", "name": "السريانية (سوريا)", "nativeName": "ܣܘܪܝܝܐ (ܣܘܪܝܐ)", "primary": false },
        "div-MV": {"tag": "div-MV", "name": "الديفيهية (المالديف)", "nativeName": "ދިވެހި (މޯލްޑިވްސް)", "primary": false },
        "ka-GE": {"tag": "ka-GE", "name": "الجورجية (جورجيا)", "nativeName": "ქართული (საქართველო)", "primary": false },      
}


const { getTag, getTags, getPrimaryTags } = createTagUtils(tags)
export {
    getTag, getTags,getPrimaryTags
}
export * from './types'    