import vue from '@vitejs/plugin-vue'
import {viteMockServe} from 'vite-plugin-mock';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers';
import {defineConfig} from "vite";

const localEnabled = process.env.USE_MOCK || false;
const mockPlugin = localEnabled ? viteMockServe({
  // default
  mockPath: 'mock',
  localEnabled: true,
}) : {} as Plugin;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    mockPlugin,
    AutoImport({
      resolvers: [AntDesignVueResolver()],
    }),
    Components({
      resolvers: [
        AntDesignVueResolver()
      ]
    })
  ]
});
