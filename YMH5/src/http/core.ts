import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import qs from 'qs';
import { getCurrentInstance } from 'vue';
import { store } from '../store';
import httpFilterConfig from './httpFilterConfig';

axios.defaults.timeout = 5000;

/* eslint-disable no-undef */
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '/dev' : '/';

axios.interceptors.request.use(
  (request: AxiosRequestConfig) => {
    request.headers.d = 1;
    const token = store.getters.token;
    if (token) request.headers.t = token;
    if (request.responseType) request.headers.responseType = request.responseType;
    if (request.headers['Content-Type'] === 'multipart/form-data;') {
      return request;
    }
    if (request.method === 'post' || request.method === 'put') {
      request.data = qs.stringify(request.data);
    }
    return request;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data) {
      if (response.headers.id) {
        store.commit('app/setToken', response.headers.id);
      }
      const app = getCurrentInstance();
      const config = httpFilterConfig[(response.config && response.config.url) || ''];
      const noErrTip = config && config.noErrTip === true;
      const defaultErrTipTxt = (config && config.errTxt) || '';
      if (!noErrTip && response.data.status === false && response.data.data) {
        app?.appContext.config.globalProperties.$toast.fail(response.data.data || defaultErrTipTxt);
      }
      return response.data;
    } else {
      return Promise.reject(response);
    }
  },
  err => {
    return Promise.reject(err);
  }
);

export default axios;
