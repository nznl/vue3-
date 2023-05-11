type EnvType = 'dev' | 'test' | 'release' | 'prod';
/** env环境配置 */
interface EnvConfig {
  /** 后端的请求地址 */
  url: string;
  /** 代理标识, 用于拦截地址转发代理(如："/api"，这个和后端路径有无 "/api" 路径没有任何关系) */
  proxy: string;
  /** 认证后端的请求地址 */
  // authUrl: string;
  // /** 认证代理标识, 用于拦截地址转发代理(如："/api"，这个和后端路径有无 "/api" 路径没有任何关系) */
  // authProxy: string;
  // /** 是否开启直达单点登陆 */
  // ssoDirectEnable: boolean;
  // /** 服务监视地址 */
  // bootAdminServiceUrl: string;
  // /** 单点登陆服务url,这里省略了target_uri，动态添加target_uri */
  // ssoLoginUrl: string;
  // /** 单点退出url */
  // ssoLogoutUrl: string;
  // /** 流程服务地址 */
  // wfServiceUrl: string;
  // /** 报表服务地址 */
  // reportServiceUrl: string;
  // /** swagger服务地址 */
  // swaggerServiceUrl: string;
  // /** knif4j服务地址 */
  // knif4jServiceUrl: string;
  // videoUrl: string;
  // videoProxy: string;
}

interface ImportMetaEnv {
  /** 项目基本地址 */
  readonly VITE_BASE_URL: string;
  /** 项目名称 */
  readonly VITE_APP_NAME: string;
  /** 项目标题 */
  readonly VITE_APP_TITLE: string;
  /** 项目描述 */
  readonly VITE_APP_DESC: string;
  /** 路由首页的路径 */
  readonly VITE_ROUTE_HOME_PATH: Exclude<AuthRoute.RoutePath, '/not-found-page' | '/:pathMatch(.*)*'>;
  /** vite环境类型 */
  readonly VITE_ENV_TYPE?: EnvType;
  /** 开启请求代理 */
  readonly VITE_HTTP_PROXY?: 'true' | 'false';
  /** 是否开启打包文件大小结果分析 */
  readonly VITE_VISUALIZER?: 'true' | 'false';
  /** 是否开启打包压缩 */
  readonly VITE_COMPRESS?: 'true' | 'false';
  /** 压缩算法类型 */
  readonly VITE_COMPRESS_TYPE?: 'gzip' | 'brotliCompress' | 'deflate' | 'deflateRaw';
  /** hash路由模式 */
  readonly VITE_HASH_ROUTE?: 'true' | 'false';
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
