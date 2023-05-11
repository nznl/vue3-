
/*
 * @Author: 
 * @Date: 2023-05-10 10:33:05
 * @Description: axios请求配置
 * 
 * Copyright (c) 2023 by KYNY, All Rights Reserved. 
 */

import axios from 'axios';
import qs from 'qs';
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getEnvConfig } from '~/.env-config';

const isHttpProxy = import.meta.env.VITE_HTTP_PROXY === 'true';
const envConfig = getEnvConfig(import.meta.env as any);

export class Http {

  private readonly instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);
    this.setIntercept();
  }

  // 请求、响应拦截设置
  setIntercept() {
    // 请求拦截
    this.instance.interceptors.request.use(async config => {
      console.log(config, 'config');
      if (config.headers) {
        config.data = qs.stringify(config.data); //
        // 设置token
        const TOKEN = "token"; // 与后台约定设置何种name，一般为auth, token, access_tokne
        config.headers[TOKEN] = "**";
      }
      return config;
    }, error => Promise.reject(error));

    // 响应拦截
    this.instance.interceptors.response.use(async (response: AxiosResponse): Promise<any> => {
      const { status } = response;
      // 其他错误处理
      if (status === 200) {
        return response.data;
      } else if (status === 403) {
        // 需要token的api，没有token处理方案
      } else {
        console.log(response.statusText);
      }
    }, error => Promise.reject(error));
  }

async get<T>(url: string, params?: any, config?: AxiosRequestConfig): Promise<any> {
    const response = await this.instance.get<T>(url, { params, ...config });
    return response;
}

async post<T>(url: string, data?: any, config?:AxiosRequestConfig): Promise<any> {
    const response = await this.instance.post<T>(url, data, config);
    return response;
  }
}

export const http = new Http({ 
  baseURL: isHttpProxy ? envConfig.proxy : envConfig.url,
  timeout: 50000,
  headers: {
    "Content-Type": 'application/x-www-form-urlencoded'
  }
})