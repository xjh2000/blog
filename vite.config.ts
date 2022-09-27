import vue from '@vitejs/plugin-vue'
import {ConfigEnv, UserConfigExport} from "vite";
import {viteMockServe} from "vite-plugin-mock";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers';

const localEnabled = process.env.USE_MOCK || false;
const mockPlugin = localEnabled ? viteMockServe({
  // default
  mockPath: 'mock',
  localEnabled: true,
}) : {} as Plugin;

// https://vitejs.dev/config/
export default ({command}: ConfigEnv): UserConfigExport => {
  return {
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
  }
}
