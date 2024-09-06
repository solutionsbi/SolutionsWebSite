import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

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
})
