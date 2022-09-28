import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers';
import {defineConfig} from "vite";
import mockServer from 'vite-plugin-mock-server';

const localEnabled = process.env.USE_MOCK || false;

// @ts-ignore module import problem
const mockPlugin = localEnabled ? mockServer({
  mockRootDir: './src/mock',
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
