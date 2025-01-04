import { defineConfig } from 'tsup'

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
    {
        entry: [
            'src/en.ts',
        ],
        outDir: 'dist',
        minify: true,
        dts: true,        
        clean: true,  
        format: ['cjs', 'esm']
    }, {
        entry: [
            'src/zh.ts'
        ],
        outDir: 'dist',
        minify: false,
        dts: true,        
        clean: true, 
        cjsInterop: true,
        format: ['cjs', 'esm']
    }
] )