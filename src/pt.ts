import { createTagUtils } from './utils'

export const tags = {
        "zh-CN": {"tag": "zh-CN", "name": "Chinês (Simplificado)", "nativeName": "简体中文", "primary": true },
        "zh-TW": {"tag": "zh-TW", "name": "Chinês (Tradicional - Taiwan)", "nativeName": "繁體中文(臺灣)", "primary": false },
        "zh-HK": {"tag": "zh-HK", "name": "Chinês (Tradicional - Hong Kong)", "nativeName": "繁體中文(香港)", "primary": false },
        "zh-MO": {"tag": "zh-MO", "name": "Chinês (Tradicional - Macau)", "nativeName": "繁體中文(Traditional Chinese - Macau)", "primary": false },
        "zh-SG": {"tag": "zh-SG", "name": "Chinês (Simplificado - Singapura)", "nativeName": "简体中文(Simplified Chinese - Singapore)", "primary": false },      
        "zh-CHS": {"tag": "zh-CHS", "name": "Chinês (Simplificado)", "nativeName": "简体中文", "primary": false },
        "zh-CHT": {"tag": "zh-CHT", "name": "Chinês (Tradicional)", "nativeName": "繁體中文(Traditional Chinese)", "primary": false },
        "en-US": {"tag": "en-US", "name": "Inglês (Estados Unidos)", "nativeName": "English (United States)", "primary": true },
        "en-GB": {"tag": "en-GB", "name": "Inglês (Reino Unido)", "nativeName": "English (United Kingdom)", "primary": false },
        "en-CA": {"tag": "en-CA", "name": "Inglês (Canadá)", "nativeName": "English (Canada)", "primary": false },
        "en-AU": {"tag": "en-AU", "name": "Inglês (Austrália)", "nativeName": "English (Australia)", "primary": false },
        "en-IN": {"tag": "en-IN", "name": "Inglês (Índia)", "nativeName": "English (India)", "primary": false },
        "en-ZA": {"tag": "en-ZA", "name": "Inglês (África do Sul)", "nativeName": "English (South Africa)", "primary": false },
        "en-NZ": {"tag": "en-NZ", "name": "Inglês (Nova Zelândia)", "nativeName": "English (New Zealand)", "primary": false },
        "en-IE": {"tag": "en-IE", "name": "Inglês (Irlanda)", "nativeName": "English (Ireland)", "primary": false },
        "en-PH": {"tag": "en-PH", "name": "Inglês (Filipinas)", "nativeName": "English (Philippines)", "primary": false },
        "en-ZW": {"tag": "en-ZW", "name": "Inglês (Zimbábue)", "nativeName": "English (Zimbabwe)", "primary": false },
        "en-BZ": {"tag": "en-BZ", "name": "Inglês (Belize)", "nativeName": "English (Belize)", "primary": false },
        "en-CB": {"tag": "en-CB", "name": "Inglês (Caribe)", "nativeName": "English (Caribbean)", "primary": false },
        "en-JM": {"tag": "en-JM", "name": "Inglês (Jamaica)", "nativeName": "English (Jamaica)", "primary": false },
        "en-TT": {"tag": "en-TT", "name": "Inglês (Trinidad e Tobago)", "nativeName": "English (Trinidad and Tobago)", "primary": false },
        "hi-IN": {"tag": "hi-IN", "name": "Hindi (Índia)", "nativeName": "हिन्दी (Hindi)", "primary": false },
        "es-ES": {"tag": "es-ES", "name": "Espanhol (Espanha)", "nativeName": "Español (España)", "primary": true },
        "es-MX": {"tag": "es-MX", "name": "Espanhol (México)", "nativeName": "Español (México)", "primary": false },
        "es-AR": {"tag": "es-AR", "name": "Espanhol (Argentina)", "nativeName": "Español (Argentina)", "primary": false },
        "es-CO": {"tag": "es-CO", "name": "Espanhol (Colômbia)", "nativeName": "Español (Colombia)", "primary": false },
        "es-PE": {"tag": "es-PE", "name": "Espanhol (Peru)", "nativeName": "Español (Perú)", "primary": false },
        "es-VE": {"tag": "es-VE", "name": "Espanhol (Venezuela)", "nativeName": "Español (Venezuela)", "primary": false },
        "es-CL": {"tag": "es-CL", "name": "Espanhol (Chile)", "nativeName": "Español (Chile)", "primary": false },
        "es-EC": {"tag": "es-EC", "name": "Espanhol (Equador)", "nativeName": "Español (Ecuador)", "primary": false },
        "es-GT": {"tag": "es-GT", "name": "Espanhol (Guatemala)", "nativeName": "Español (Guatemala)", "primary": false },
        "es-CU": {"tag": "es-CU", "name": "Espanhol (Cuba)", "nativeName": "Español (Cuba)", "primary": false },
        "es-BO": {"tag": "es-BO", "name": "Espanhol (Bolívia)", "nativeName": "Español (Bolivia)", "primary": false },
        "es-DO": {"tag": "es-DO", "name": "Espanhol (República Dominicana)", "nativeName": "Español (República Dominicana)", "primary": false },
        "es-HN": {"tag": "es-HN", "name": "Espanhol (Honduras)", "nativeName": "Español (Honduras)", "primary": false },
        "es-PY": {"tag": "es-PY", "name": "Espanhol (Paraguai)", "nativeName": "Español (Paraguay)", "primary": false },
        "es-SV": {"tag": "es-SV", "name": "Espanhol (El Salvador)", "nativeName": "Español (El Salvador)", "primary": false },
        "es-NI": {"tag": "es-NI", "name": "Espanhol (Nicarágua)", "nativeName": "Español (Nicaragua)", "primary": false },
        "es-PR": {"tag": "es-PR", "name": "Espanhol (Porto Rico)", "nativeName": "Español (Puerto Rico)", "primary": false },
        "es-UY": {"tag": "es-UY", "name": "Espanhol (Uruguai)", "nativeName": "Español (Uruguay)", "primary": false },
        "es-PA": {"tag": "es-PA", "name": "Espanhol (Panamá)", "nativeName": "Español (Panamá)", "primary": false },
        "es-CR": {"tag": "es-CR", "name": "Espanhol (Costa Rica)", "nativeName": "Español (Costa Rica)", "primary": false },
        "ar-EG": {"tag": "ar-EG", "name": "Árabe (Egito)", "nativeName": "العربية (مصر)", "primary": true },
        "ar-SA": {"tag": "ar-SA", "name": "Árabe (Arábia Saudita)", "nativeName": "العربية (السعودية)", "primary": false },
        "ar-DZ": {"tag": "ar-DZ", "name": "Árabe (Argélia)", "nativeName": "العربية (الجزائر)", "primary": false },
        "ar-MA": {"tag": "ar-MA", "name": "Árabe (Marrocos)", "nativeName": "العربية (المغرب)", "primary": false },
        "ar-IQ": {"tag": "ar-IQ", "name": "Árabe (Iraque)", "nativeName": "العربية (العراق)", "primary": false },
        "ar-SD": {"tag": "ar-SD", "name": "Árabe (Sudão)", "nativeName": "العربية (السودان)", "primary": false },
        "ar-YE": {"tag": "ar-YE", "name": "Árabe (Iêmen)", "nativeName": "العربية (اليمن)", "primary": false },
        "ar-SY": {"tag": "ar-SY", "name": "Árabe (Síria)", "nativeName": "العربية (سوريا)", "primary": false },
        "ar-TN": {"tag": "ar-TN", "name": "Árabe (Tunísia)", "nativeName": "العربية (تونس)", "primary": false },
        "ar-LY": {"tag": "ar-LY", "name": "Árabe (Líbia)", "nativeName": "العربية (ليبيا)", "primary": false },
        "ar-JO": {"tag": "ar-JO", "name": "Árabe (Jordânia)", "nativeName": "العربية (الأردن)", "primary": false },
        "ar-LB": {"tag": "ar-LB", "name": "Árabe (Líbano)", "nativeName": "العربية (لبنان)", "primary": false },
        "ar-KW": {"tag": "ar-KW", "name": "Árabe (Kuwait)", "nativeName": "العربية (الكويت)", "primary": false },
        "ar-AE": {"tag": "ar-AE", "name": "Árabe (Emirados Árabes Unidos)", "nativeName": "العربية (الإمارات)", "primary": false },
        "ar-BH": {"tag": "ar-BH", "name": "Árabe (Bahrein)", "nativeName": "العربية (البحرين)", "primary": false },
        "ar-QA": {"tag": "ar-QA", "name": "Árabe (Catar)", "nativeName": "العربية (قطر)", "primary": false },
        "ar-OM": {"tag": "ar-OM", "name": "Árabe (Omã)", "nativeName": "العربية (عمان)", "primary": false },
        "pt-BR": {"tag": "pt-BR", "name": "Português (Brasil)", "nativeName": "Português (Brasil)", "primary": false },
        "pt-PT": {"tag": "pt-PT", "name": "Português (Portugal)", "nativeName": "Português (Portugal)", "primary": true },
        "ru-RU": {"tag": "ru-RU", "name": "Russo (Rússia)", "nativeName": "Русский (Россия)", "primary": true },
        "ja-JP": {"tag": "ja-JP", "name": "Japonês (Japão)", "nativeName": "日本語 (日本)", "primary": true },
        "de-DE": {"tag": "de-DE", "name": "Alemão (Alemanha)", "nativeName": "Deutsch (Deutschland)", "primary": true },
        "de-AT": {"tag": "de-AT", "name": "Alemão (Áustria)", "nativeName": "Deutsch (Österreich)", "primary": false },
        "de-CH": {"tag": "de-CH", "name": "Alemão (Suíça)", "nativeName": "Deutsch (Schweiz)", "primary": false },
        "fr-FR": {"tag": "fr-FR", "name": "Francês (França)", "nativeName": "Français (France)", "primary": true },
        "fr-CA": {"tag": "fr-CA", "name": "Francês (Canadá)", "nativeName": "Français (Canada)", "primary": false },
        "fr-BE": {"tag": "fr-BE", "name": "Francês (Bélgica)", "nativeName": "Français (Belgique)", "primary": false },
        "fr-CH": {"tag": "fr-CH", "name": "Francês (Suíça)", "nativeName": "Français (Suisse)", "primary": false },
        "fr-LU": {"tag": "fr-LU", "name": "Francês (Luxemburgo)", "nativeName": "Français (Luxembourg)", "primary": false },
        "fr-MC": {"tag": "fr-MC", "name": "Francês (Mônaco)", "nativeName": "Français (Monaco)", "primary": false },
        "ko-KR": {"tag": "ko-KR", "name": "Coreano (Coreia do Sul)", "nativeName": "한국어 (대한민국)", "primary": true },
        "it-IT": {"tag": "it-IT", "name": "Italiano (Itália)", "nativeName": "Italiano (Italia)", "primary": true },
        "it-CH": {"tag": "it-CH", "name": "Italiano (Suíça)", "nativeName": "Italiano (Svizzera)", "primary": false },
        "nl-NL": {"tag": "nl-NL", "name": "Holandês (Países Baixos)", "nativeName": "Nederlands (Nederland)", "primary": true },
        "nl-BE": {"tag": "nl-BE", "name": "Holandês (Bélgica)", "nativeName": "Nederlands (België)", "primary": false },
        "pl-PL": {"tag": "pl-PL", "name": "Polonês (Polônia)", "nativeName": "Polski (Polska)", "primary": false },
        "vi-VN": {"tag": "vi-VN", "name": "Vietnamita (Vietnã)", "nativeName": "Tiếng Việt (Việt Nam)", "primary": false },
        "tr-TR": {"tag": "tr-TR", "name": "Turco (Turquia)", "nativeName": "Türkçe (Türkiye)", "primary": false },
        "th-TH": {"tag": "th-TH", "name": "Tailandês (Tailândia)", "nativeName": "ไทย (ประเทศไทย)", "primary": false },
        "el-GR": {"tag": "el-GR", "name": "Grego (Grécia)", "nativeName": "Ελληνικά (Ελλάδα)", "primary": false },
        "cs-CZ": {"tag": "cs-CZ", "name": "Tcheco (República Tcheca)", "nativeName": "Čeština (Česká republika)", "primary": false },
        "sv-SE": {"tag": "sv-SE", "name": "Sueco (Suécia)", "nativeName": "Svenska (Sverige)", "primary": false },
        "sv-FI": {"tag": "sv-FI", "name": "Sueco (Finlândia)", "nativeName": "Svenska (Finland)", "primary": false },
        "hu-HU": {"tag": "hu-HU", "name": "Húngaro (Hungria)", "nativeName": "Magyar (Magyarország)", "primary": false },
        "fi-FI": {"tag": "fi-FI", "name": "Finlandês (Finlândia)", "nativeName": "Suomi (Suomi)", "primary": false },
        "da-DK": {"tag": "da-DK", "name": "Dinamarquês (Dinamarca)", "nativeName": "Dansk (Danmark)", "primary": false },
        "nb-NO": {"tag": "nb-NO", "name": "Norueguês Bokmål (Noruega)", "nativeName": "Norsk Bokmål (Norge)", "primary": false },
        "nn-NO": {"tag": "nn-NO", "name": "Norueguês Nynorsk (Noruega)", "nativeName": "Norsk Nynorsk (Norge)", "primary": false },
        "he-IL": {"tag": "he-IL", "name": "Hebraico (Israel)", "nativeName": "עברית (ישראל)", "primary": false },
        "id-ID": {"tag": "id-ID", "name": "Indonésio (Indonésia)", "nativeName": "Bahasa Indonesia (Indonesia)", "primary": false },
        "ms-MY": {"tag": "ms-MY", "name": "Malaio (Malásia)", "nativeName": "Bahasa Melayu (Malaysia)", "primary": false },
        "ms-BN": {"tag": "ms-BN", "name": "Malaio (Brunei)", "nativeName": "Bahasa Melayu (Brunei)", "primary": false },
        "ro-RO": {"tag": "ro-RO", "name": "Romeno (Romênia)", "nativeName": "Română (România)", "primary": false },        
        "bg-BG": {"tag": "bg-BG", "name": "Búlgaro (Bulgária)", "nativeName": "Български (България)", "primary": false },
        "uk-UA": {"tag": "uk-UA", "name": "Ucraniano (Ucrânia)", "nativeName": "Українська (Україна)", "primary": false },
        "sk-SK": {"tag": "sk-SK", "name": "Eslovaco (Eslováquia)", "nativeName": "Slovenčina (Slovensko)", "primary": false },
        "sl-SI": {"tag": "sl-SI", "name": "Esloveno (Eslovênia)", "nativeName": "Slovenščina (Slovenija)", "primary": false },
        "hr-HR": {"tag": "hr-HR", "name": "Croata (Croácia)", "nativeName": "Hrvatski (Hrvatska)", "primary": false },
        "ca-ES": {"tag": "ca-ES", "name": "Catalão (Catalunha)", "nativeName": "Català (Catalunya)", "primary": false },
        "lt-LT": {"tag": "lt-LT", "name": "Lituano (Lituânia)", "nativeName": "Lietuvių (Lietuva)", "primary": false },
        "lv-LV": {"tag": "lv-LV", "name": "Letão (Letônia)", "nativeName": "Latviešu (Latvija)", "primary": false },
        "et-EE": {"tag": "et-EE", "name": "Estoniano (Estônia)", "nativeName": "Eesti (Eesti)", "primary": false },
        "sq-AL": {"tag": "sq-AL", "name": "Albanês (Albânia)", "nativeName": "Shqip (Shqipëri)", "primary": false },
        "mk-MK": {"tag": "mk-MK", "name": "Macedônio (Macedônia do Norte)", "nativeName": "Македонски (Македонија)", "primary": false },
        "be-BY": {"tag": "be-BY", "name": "Bielorrusso (Bielorrússia)", "nativeName": "Беларуская (Беларусь)", "primary": false },
        "is-IS": {"tag": "is-IS", "name": "Islandês (Islândia)", "nativeName": "Íslenska (Ísland)", "primary": false },
        "gl-ES": {"tag": "gl-ES", "name": "Galego (Galícia)", "nativeName": "Galego (Galicia)", "primary": false },
        "eu-ES": {"tag": "eu-ES", "name": "Basco (País Basco)", "nativeName": "Euskara (Euskal Herria)", "primary": false },
        "af-ZA": {"tag": "af-ZA", "name": "Africâner (África do Sul)", "nativeName": "Afrikaans (Suid-Afrika)", "primary": false },
        "sw-KE": {"tag": "sw-KE", "name": "Suaíli (Quênia)", "nativeName": "Kiswahili (Kenya)", "primary": false },
        "ta-IN": {"tag": "ta-IN", "name": "Tâmil (Índia)", "nativeName": "தமிழ் (இந்தியா)", "primary": false },
        "te-IN": {"tag": "te-IN", "name": "Telugu (Índia)", "nativeName": "తెలుగు (భారతదేశం)", "primary": false },
        "kn-IN": {"tag": "kn-IN", "name": "Canarim (Índia)", "nativeName": "ಕನ್ನಡ (ಭಾರತ)", "primary": false },
        "mr-IN": {"tag": "mr-IN", "name": "Marata (Índia)", "nativeName": "मराठी (भारत)", "primary": false },
        "gu-IN": {"tag": "gu-IN", "name": "Guzerate (Índia)", "nativeName": "ગુજરાતી (ભારત)", "primary": false },
        "pa-IN": {"tag": "pa-IN", "name": "Panjabi (Índia)", "nativeName": "ਪੰਜਾਬੀ (ਭਾਰਤ)", "primary": false },
        "kok-IN": {"tag": "kok-IN", "name": "Concani (Índia)", "nativeName": "कोंकणी (भारत)", "primary": false },
        "sa-IN": {"tag": "sa-IN", "name": "Sânscrito (Índia)", "nativeName": "संस्कृत (भारत)", "primary": false },
        "ur-PK": {"tag": "ur-PK", "name": "Urdu (Paquistão)", "nativeName": "اردو (پاکستان)", "primary": false },
        "fa-IR": {"tag": "fa-IR", "name": "Persa (Irã)", "nativeName": "فارسی (ایران)", "primary": false },
        "syr-SY": {"tag": "syr-SY", "name": "Siríaco (Síria)", "nativeName": "ܣܘܪܝܝܐ (ܣܘܪܝܐ)", "primary": false },
        "div-MV": {"tag": "div-MV", "name": "Divehi (Maldivas)", "nativeName": "ދިވެހި (މޯލްޑިވްސް)", "primary": false },
        "ka-GE": {"tag": "ka-GE", "name": "Georgiano (Geórgia)", "nativeName": "ქართული (საქართველო)", "primary": false },      
}


const { getTag, getTags, getPrimaryTags } = createTagUtils(tags)
export {
    getTag, getTags,getPrimaryTags
}
export * from './types'    