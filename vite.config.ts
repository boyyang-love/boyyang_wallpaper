import {defineConfig} from 'vite'
import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron-renderer'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    base: './',
    plugins: [
        vue(
            {
                script: {
                    defineModel: true,
                    propsDestructure: true,
                },
            },
        ),
        electron(
            [
                {
                    // Main-Process entry file of the Electron App.
                    entry: 'electron/main.ts',
                },
                {
                    entry: 'electron/preload',
                    vite: {
                        build: {
                            outDir: path.join(__dirname, 'dist-electron/preload'),
                        },
                    },
                    onstart(options) {
                        // Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete,
                        // instead of restarting the entire Electron App.
                        options.reload()
                    },
                },
            ],
        ),
        renderer(),
    ],
    resolve: {
        alias: {
            '@': path.join(__dirname, './src'),
        },
    },
    server: {
        host: '0.0.0.0',
        port: 3000,
    },
})
