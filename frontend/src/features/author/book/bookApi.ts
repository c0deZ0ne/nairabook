import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../../redux/apiSlice";
import { IBook } from "../../../types";
import { AppError, AppSuccess } from "../../../ui-components/alert/alerts";
import AppLoading from "../../../ui-components/appLoading";
import { handleCreateBook, handleDeleteBook, handleEditBook } from "../../auth/authSlice";
import { closeModal, openModal } from "../../modal/modalSlice";
import { buildURL } from "../../../utils";

  export const authApi: any = apiSlice.injectEndpoints({
    endpoints: (builder: any) => ({
      
      getAllBooks: builder.query({
        query: (query: {
          filter: string;
          pageNumber: string;
          pageSize: number;
          DocType: string | number;
          starDate: string;
          endDate: string;
        }) =>
          (() =>
            buildURL(`api/user/book/`, {
              ...query,
            } as unknown as Record<string, string>))(),
  
        async onQueryStarted(args:any, { queryFulfilled, dispatch }:any) {
          dispatch(openModal({ element: AppLoading() }));
          try {
            const { data }: any = await queryFulfilled;
            console.log(data)
            dispatch(closeModal())
            return data;
          } catch (error) {}
        },
      }),
      createBook: builder.mutation({
        query: (credentials: IBook) => ({
          url: 'api/user/book/create',
          method: 'POST',
          body: { ...credentials },
        }),
        async onQueryStarted(args: any, { queryFulfilled, dispatch }: any) {
          dispatch(openModal({ element: AppLoading() }));
          try {
            const { data } = await queryFulfilled;
            dispatch(handleCreateBook(data?.data));
              dispatch(
                AppSuccess({
                  message: data.message,
                  isTimed: 2000,
                }),
              );
            return data;
          } catch (error: any) {
            dispatch(AppError(error));
          }
        },
      }),
      
      updateBook: builder.mutation({
        query: (credentials: IBook) => ({
          url: `api/user/book/update/${credentials.id}`,
          method: 'PATCH',
          body: { ...credentials },
        }),
        async onQueryStarted(args: any, { queryFulfilled, dispatch }: any) {
          dispatch(openModal({ element: AppLoading() }));
          try {
            const { data } = await queryFulfilled;
            dispatch(handleEditBook(data?.data));
              dispatch(
                AppSuccess({
                  message: data.message,
                  isTimed: 2000,
                }),
              );
            return data;
          } catch (error: any) {
            dispatch(AppError(error));
          }
        },
      }),
      deleteBook: builder.mutation({
        query: (credentials: IBook) => ({
          url: `api/user/book/delete/${credentials.id}`,
          method: 'POST',
          body: { ...credentials },
        }),
        async onQueryStarted(args: any, { queryFulfilled, dispatch }: any) {
          dispatch(openModal({ element: AppLoading() }));
          try {
            const { data } = await queryFulfilled;
            dispatch(handleDeleteBook(args));
              dispatch(
                AppSuccess({
                  message: data.message,
                  isTimed: 2000,
                }),
              );
            return data;
          } catch (error: any) {
            dispatch(AppError(error));
          }
        },
      }),
   
    }),
  });
  
  export const {
    useCreateBookMutation,
    useUpdateBookMutation,
    useDeleteBookMutation,
    useGetAllBooksQuery,
  } = authApi;
  