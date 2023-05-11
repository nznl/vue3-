
type ServiceEnv = Record<EnvType, EnvConfig>;

const serviceEnvConfig: ServiceEnv = {
  dev: {
    url: 'https://cs.yujiaojiaoyu.com',
    proxy: '/api'
  },

  test: {
    url: '123',
    proxy: '/api'
  },

  release: {
    url: '123',
    proxy: '/api'
  },

  prod: {
    url: '123',
    proxy: '/api'
  }
}

export function getEnvConfig(env: { VITE_ENV_TYPE: EnvType, [key: string]: any}) {
  const { VITE_ENV_TYPE = 'dev' } = env;
  const envConfig = serviceEnvConfig[VITE_ENV_TYPE];
  return envConfig;
}