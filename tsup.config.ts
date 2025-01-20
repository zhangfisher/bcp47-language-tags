import { defineConfig, Options } from 'tsup' 

const languages = [
    'en',
    'zh',
    'de',
    'fr',
    'es',
    'jp',
    'ru',
    'it',
    'ko',
    'ar',
    'pt',
    'nl'
]

const mapTo = [
    "baidu",
    "tencent",
    "xunfei",
    "youdao",
    "iso639-1",
    "iso639-2",
    "iso639-3"
]

export default defineConfig([
    {
        entry: [
            'src/index.ts'     
        ],
        outDir: 'dist',
        minify: true,
        dts   : true,        
        clean : true,  
        cjsInterop: true,
        format: ['cjs', 'esm']
    },
    ...languages.map(lng=>{
        return {
            entry: [
                `src/${lng}.ts`
            ],
            outDir    : 'dist',
            minify    : true,
            dts       : true,    
            cjsInterop: true,
            format    : ['cjs', 'esm']
        } as Options
    }),
    ...mapTo.map(to=>{
        return {
            entry: [
                `src/mapper/${to}.ts`
            ],
            outDir    : 'dist',
            minify    : true,
            dts       : true,  
            cjsInterop: true,
            format    : ['cjs', 'esm']
        } as Options
    }) 
] )