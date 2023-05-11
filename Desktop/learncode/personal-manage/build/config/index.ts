import type { ProxyOptions } from 'vite';

// 设置网络代理

export function createViteProxy(isOpenProxy: boolean, envConfig: EnvConfig) {
  const proxy = {
    [envConfig.proxy]: {
      target: envConfig.url,
      changeOrigin: true,
      rewrite: path => path.replace(new RegExp(`^${envConfig.proxy}`), '') // 路径重写
    }
  }
  return proxy;
}