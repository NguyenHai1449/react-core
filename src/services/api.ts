import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://example.com'
});

axiosClient.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response;
  },
  (error: any) => {
    const originalRequest = error.config;
    const { status } = error.response;
    if (
      status === 401 &&
      originalRequest.url === 'http://127.0.0.1:3000/v1/auth/token'
    ) {
      // router.push('/login');
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const access_token = localStorage.getItem('token');
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
      return axiosClient(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
