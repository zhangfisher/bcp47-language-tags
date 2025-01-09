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
    'ko'
]
export default defineConfig([
    {
        entry: [
            'src/index.ts'     
        ],
        outDir: 'dist',
        minify: true,
        dts: true,        
        clean: true,  
        format: ['cjs', 'esm']
    },
    ...languages.map(lng=>{
        return {
            entry: [
                `src/${lng}.ts`
            ],
            outDir: 'dist',
            minify: false,
            dts: true,        
            clean: true, 
            cjsInterop: true,
            format: ['cjs', 'esm']
        } as Options
    }) 
] )