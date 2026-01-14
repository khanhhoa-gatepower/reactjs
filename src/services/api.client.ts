/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";
import type { NavigateFunction } from "react-router-dom";
import { useAuthStore } from "../stores/auth.store";

// Singleton instance for navigation
let navigate: NavigateFunction | null = null;
export const setNavigator = (nav: NavigateFunction) => {
  navigate = nav;
};

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 120000,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "69420",
  },
});

// Flag to prevent multiple refresh token requests
let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value?: unknown) => void;
  reject: (reason?: any) => void;
}> = [];

const processQueue = (error: any = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve();
    }
  });
  failedQueue = [];
};

const requestHandler = (config: InternalAxiosRequestConfig) => {
  const { accessToken } = useAuthStore.getState();
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
};

const handleLogout = async () => {
  const { logout } = useAuthStore.getState();
  logout();
  if (navigate) {
    navigate("/login", {
      replace: true,
    });
  }
};

const responseErrorHandler = async (err: AxiosError) => {
  const status = err?.response?.status;
  const originalRequest = err.config;

  if (status === 401 && originalRequest) {
    const { refreshToken, setTokens } = useAuthStore.getState();

    if (!refreshToken) {
      handleLogout();
      return Promise.reject(err);
    }
    return axios
      .post(`${import.meta.env.VITE_API_URL}/refreshToken`, {
        refreshToken,
      })
      .then((res) => {
        if (res.status === 200) {
          const data = res.data.data;
          setTokens(data.token);
          originalRequest.headers.Authorization = `Bearer ${data.token}`;
          return axios(originalRequest);
        } else {
          handleLogout();
          return Promise.reject(err);
        }
      })
      .catch(() => {
        handleLogout();
        return Promise.reject(err);
      });
  }

  if (status === 403) {
    return Promise.reject({
      message: "You do not have permission to perform this action",
      status: 403,
    });
  }
  if (status === 404) {
    return Promise.reject({
      message: "Resource not found",
      status: 404,
    });
  }

  return Promise.reject(
    err.response?.data || {
      message: "An unexpected error occurred",
      status: status || 500,
    }
  );
};

client.interceptors.request.use(
  (config) => {
    return requestHandler(config);
  },
  (error) => Promise.reject(error)
);
client.interceptors.response.use((response) => {
  return response;
}, responseErrorHandler);

export const sendGet = (url: string, params?: any) =>
  client.get(url, { params }).then((res) => res.data);
export const sendPost = (url: string, params?: any, queryParams?: any) =>
  client
    .post(url, params, { params: queryParams })
    .then((res) => res.data);
export const sendPut = (url: string, params?: any) =>
  client.put(url, params).then((res) => res.data);
export const sendPatch = (url: string, params?: any) =>
  client.patch(url, params).then((res) => res.data);
export const sendDelete = (url: string, params?: any) =>
  client.delete(url, { params }).then((res) => res.data);
