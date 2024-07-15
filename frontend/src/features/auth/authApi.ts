import {
  IAuthenticatedUser,
  IChangePasswordWithOtp,
  IPasswordRequestOtp,
  ISidBarItems,
  IchangePassword,
} from '../../types';
import { apiSlice } from '../../redux/apiSlice';
import {
  resetAuth,
  setUser,
  SwitchCurrentRole,
  setUserSide,
} from './authSlice';
import { AppError, AppSuccess } from '../../ui-components/alert/alerts';
import { AppData, sideBarData } from '../../data';
import { closeModal, openModal } from '../modal/modalSlice';
import AppLoading from '../../ui-components/appLoading';

export const authApi: any = apiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    registerAccount: builder.mutation({
      query: (credentials: { username: string; password: string }) => ({
        url: 'api/Auth/register',
        method: 'POST',
        body: { ...credentials },
      }),
      async onQueryStarted(args: any, { queryFulfilled, dispatch }: any) {
        dispatch(openModal({ element: AppLoading() }));
        try {
          const { data } = await queryFulfilled;
          const newData: IAuthenticatedUser = {
            ...data?.data,
            isAuthenticated: false,
            userName: args?.username,
          };
          
            dispatch(
              AppSuccess({
                message: data.message,
                url: '/auth/login',
                isTimed: 2000,
              }),
            );
          return newData;
        } catch (error: any) {
          dispatch(resetAuth());
          dispatch(AppError(error));
        }
      },
    }),
    login: builder.mutation({
      query: (credentials: { username: string; password: string }) => ({
        url: 'api/Auth/login',
        method: 'POST',
        body: { ...credentials },
      }),
      async onQueryStarted(args: any, { queryFulfilled, dispatch }: any) {
        dispatch(openModal({ element: AppLoading() }));
        try {
          const { data, message } = await queryFulfilled;
          const newData: IAuthenticatedUser = {
            ...data?.data,
          };
          dispatch(setUser({ ...newData, isAuthenticated: true,sideBar:sideBarData.User }));
          dispatch(
            AppSuccess({
              message: message || data?.message,
              url: '/profile/client/books',
              isTimed: 2000,
            }),
          );
          return newData;
        } catch (error: any) {
          dispatch(resetAuth());
          dispatch(AppError(error));
        }
      },
    }),
    changePassword: builder.mutation({
      query: (credentials: IchangePassword) => ({
        url: 'api/Auth/change-password',
        method: 'POST',
        body: { ...credentials },
      }),
      async onQueryStarted(args: any, { queryFulfilled, dispatch }: any) {
        dispatch(openModal({ element: AppLoading() }));

        try {
          const { data } = await queryFulfilled;
          const newData: IAuthenticatedUser = {
            ...data?.data,
            isAuthenticated: false,
          };
          dispatch(
            AppSuccess({
              message: 'Password was changed successfully',
              url: '/auth/login',
              isTimed: 2000,
            }),
          );
          return newData;
        } catch (error: any) {
          dispatch(AppError(error));
        }
      },
    }),
    requestPasswordOtp: builder.mutation({
      query: (credentials: IPasswordRequestOtp) => ({
        url: 'api/Auth/forgot-password',
        method: 'POST',
        body: { ...credentials },
      }),
      async onQueryStarted(args: any, { queryFulfilled, dispatch }: any) {
        dispatch(openModal({ element: AppLoading() }));

        try {
          const { data, message } = await queryFulfilled;
          const newData: IAuthenticatedUser = {
            ...data?.data,
            isAuthenticated: false,
          };
          dispatch(setUser({ ...data.data, isAuthenticated: false }));
          dispatch(
            AppSuccess({
              message: message || data?.message,
              url: '/auth/reset-password',
              isTimed: 2000,
            }),
          );
          return newData;
        } catch (error: any) {
          dispatch(resetAuth());
          dispatch(AppError(error));
        }
      },
    }),

    changePasswordWithOtp: builder.mutation({
      query: (credentials: IChangePasswordWithOtp) => ({
        url: 'api/Auth/reset-password',
        method: 'POST',
        body: { ...credentials },
      }),
      async onQueryStarted(args: any, { queryFulfilled, dispatch }: any) {
        dispatch(openModal({ element: AppLoading() }));
        try {
          const { data, message } = await queryFulfilled;
          const newData: IAuthenticatedUser = {
            ...data?.data,
            isAuthenticated: false,
          };
          dispatch(
            AppSuccess({
              message: message || data?.message,
              url: '/auth/login',
              isTimed: 2000,
            }),
          );
          return newData;
        } catch (error: any) {
          dispatch(AppError(error));
        }
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterAccountMutation,
  useChangePasswordMutation,
  useDesktopLoginMutation,
  useRequestPasswordOtpMutation,
  useChangePasswordWithOtpMutation,
  useRefreshAccessTokenMutation,
  useChangeRoleMutation,
} = authApi;
