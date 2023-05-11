import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { getRootPath, getSrcPath, createViteProxy } from './build';
import { getEnvConfig } from './.env-config';

export default defineConfig(({ mode, command }) => {
  // process.cwd() 项目目录
  const viteEnv = loadEnv(mode, process.cwd()); // 获取env配置{ VITE_HTTP_PROXY: 'true', VITE_ENV_TYPE: 'dev' }
  const rootPath = getRootPath();
  console.log(rootPath, 'rootPath')
  const srcPath = getSrcPath();
  const isOpenProxy = viteEnv.VITE_HTTP_PROXY === 'true';
  const envConfig = getEnvConfig(viteEnv as any);

  return {
      plugins: [vue(), vueJsx()],
      resolve: {
        alias: {
          '~': rootPath,
          '@': srcPath
        }
      },
      server: {
        host: '0.0.0.0',
        port: Number(viteEnv.VITE_SERVER_PORT),
        open: true,
        proxy: createViteProxy(isOpenProxy, envConfig)
      },
  }
})