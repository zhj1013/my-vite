import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';

export default defineConfig({
    assetsInclude: ['**/*.svg'],
    resolve: {
        extensions: ['.tsx', '.ts', '.json'],
        alias: {
          '@': '/src'
        }
    },
    plugins: [react()],
    build: {
        rollupOptions: {
            input: {
                home: 'index.html'
            },
            output: {
                entryFileNames: 'js/[name].js',
                chunkFileNames: 'js/[name].js',
                assetFileNames: 'assets/[name].[ext]'
            }
        }
    },
    server: {
        port: 5566,
        open: true
    }
})