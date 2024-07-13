import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiUrl } from '../data';
import axios from 'axios';
import { RootState, store } from './store';
import { setAccessToken, logout } from '../features/auth/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: apiUrl,
  prepareHeaders: (headers, { getState }) => {
    const stateData: RootState = getState() as RootState;
    if (stateData.persistUser.accessToken) {
      headers.set(
        'Authorization',
        `Bearer ${stateData.persistUser.accessToken}`,
      );
    }
    if (stateData.persistUser.clientId) {
      headers.set('ClientId', `${stateData.persistUser.clientId}`);
    }
    return headers;
  },
  mode: 'cors',
});

const baseQueryWithReauth: typeof baseQuery = async (
  args,
  api,
  extraOptions,
) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 428) {
    const refreshResult: any = await baseQuery(
      {
        url: 'api/auth/refresh-token',
        method: 'POST',
        body: { token: store.getState()?.persistUser?.refreshToken },
      },
      api,
      {
        ...extraOptions,
        skip: true,
        headers: { Authorization: store.getState()?.persistUser?.refreshToken },
      },
    );

    if (refreshResult?.data) {
      api.dispatch({
        type: 'persistUser/setAccessToken',
        payload: { accessToken: refreshResult?.data?.data?.accessToken },
      });
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch({ type: 'persistUser/logout' });
    }
  }
  return result;
};

export const apiSlice = createApi({
  reducerPath: 'form',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['form'],
  endpoints: (builder) => ({}),
});

export const apiClient = axios.create({
  baseURL: apiUrl,
});

export const multipartFormSlice = createApi({
  reducerPath: 'multipartForm',
  baseQuery: async ({ baseUrl = apiUrl, url, method, body, headers }) => {
    const fullUrl = `${baseUrl}${url}`;
    try {
      const response = await axios({
        method,
        url: fullUrl,
        data: body,
        headers,
      });
      return { data: response.data };
    } catch (error: any) {
      throw { message: error?.response?.data?.message };
    }
  },
  tagTypes: ['multipartForm'],
  endpoints: (builder) => ({}),
});

// Axios interceptor for adding access token to request headers
axios.interceptors.request.use((config) => {
  const stateData: RootState = config.headers.reduxState as RootState;
  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 428 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const response = await axios.post(
          `${apiUrl}api/auth/refresh-token`,
          {
            token: store.getState()?.persistUser?.refreshToken,
          },
          {
            headers: {
              Authorization: store.getState()?.persistUser?.accessToken,
            },
          },
        );

        store.dispatch(
          setAccessToken({ accessToken: response?.data?.data?.accessToken }),
        );
        originalRequest.headers.Authorization = `Bearer ${response?.data?.data?.accessToken}`;
        return await axios(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    } else {
      return Promise.reject(error);
    }
  },
);
