import { resolve } from 'path'
import tailwindcss from 'tailwindcss'
import tailwindcssNesting from 'tailwindcss/nesting'
import autoprefixer from 'autoprefixer'
import postcssImport from 'postcss-import'
import postcssNesting from 'postcss-nesting'
import postcssCustomMedia from 'postcss-custom-media'
import postcssCustomSelectors from 'postcss-custom-selectors'
import postcssHasPseudo from 'css-has-pseudo'
import FastGlob from 'fast-glob'

export default {
    css: {
        postcss: {
            plugins: [postcssImport, tailwindcssNesting(postcssNesting), postcssCustomMedia, postcssCustomSelectors, tailwindcss, autoprefixer, postcssHasPseudo]
        }
    },
    resolve: {
        alias: {
            '/src': resolve(process.cwd(), 'src')
        }
    },
    root: resolve(process.cwd(), 'src'),
    publicDir: resolve(process.cwd(), 'public'),
    envDir: process.cwd(),
    build: {
        emptyOutDir: false,
        outDir: resolve(process.cwd(), 'dist'),
        rollupOptions: {
            input: FastGlob.sync(['./src/styles/*.css']).map(entry => resolve(process.cwd(), entry)),
            output: {
                assetFileNames: `[name].[ext]`,
                chunkFileNames: `[name].js`,
            }
        }
    }

}
