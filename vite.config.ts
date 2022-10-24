import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {VitePWA} from "vite-plugin-pwa";

// @ts-ignore
import manifestJson from './public/manifest.json'

// https://vitejs.dev/config/
export default defineConfig({
  preview: {
    port: 8080
  },
  plugins: [
    vue(),
    VitePWA(
      {
        manifest: manifestJson,
      }
    )
  ]
})
