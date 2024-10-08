import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

// Convert import.meta.url to a file path
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: true, // Allow Vite to be accessed externally (e.g., from your host machine).
        port: 3000, // Make sure the port matches your Docker configuration.
        watch: {
            usePolling: true, // Necessary for some environments like Docker where file changes might not be detected.
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@components': path.resolve(__dirname, './src/components'),
            '@sections': path.resolve(__dirname, './src/Pages/Sections'),
            '@pages': path.resolve(__dirname, './src/Pages'),
        },
    },
})
