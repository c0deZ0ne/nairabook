// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, store } from '../../redux/store';
import { IAuthenticatedUser, IBook } from '../../types';
import { apiClient, apiSlice, multipartFormSlice } from '../../redux/apiSlice';
import { AppError } from '../../ui-components/alert/alerts';
import { closeModal } from '../modal/modalSlice';

const initialState: IAuthenticatedUser = {
  clientId: null,
  email: '',
  firstName: '',
  imageContent: '',
  imagename: '',
  isChangePasswordRequired: false,
  jobTitle: '',
  lastName: '',
  middleName: '',
  pWord: null,
  permissions: [],
  phoneNumber: '',
  roles: [],
  userName: '',
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
  sideBar: [],
  books: [],
  authorId: '',
  name: '',
  fullName: '',
  currentRole: ''
};
// Auth Slice
export const authSlice = createSlice({
  name: 'persistUser',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IAuthenticatedUser>) => {
      state = action.payload;
      return state;
    },

   
   

    setAccessToken: (state, action: PayloadAction<{ accessToken: string }>) => {
      state = { ...state, accessToken: action.payload.accessToken };
      return state;
    },

  
    SwitchCurrentRole: (
      state,
      action: PayloadAction<{ currentRole: string; accessToken: string }>,
    ) => {
      state = {
        ...state,
        currentRole: action.payload.currentRole,
        accessToken: action.payload.accessToken,
      };
      return state;
    },
    resetAuth: (state) => {
      state = initialState;
      localStorage.clear();
      apiSlice.util.resetApiState();
      multipartFormSlice.util.resetApiState();
      return state;
    },

    logout: (state, action) => {
      apiClient
        .get('api/Auth/logout', {
          headers: { Authorization: `Bearer ${state?.accessToken}` },
        })
        .then(() => {
          store.dispatch(closeModal());
        })
        .then(() => {
          apiSlice.util.resetApiState();
          multipartFormSlice.util.resetApiState();
          state = initialState;
          localStorage.clear();
          window.location.href = '#/auth/login';
          return state;
        })
        .then(() => {
          window.location.href = '#/auth/login';
        })
        .catch((error) => {
          AppError(error);
        });
    },
    setUserSide: (state, action) => {
      const newSate = { ...state, sideBar: action.payload };
      return newSate;
    },
    handleSideClick: (state, action) => {
      const updatedSideData = state.sideBar.map((curr) => {
        if (!curr.children) {
          return {
            ...curr,
            isActive: curr.path == action.payload.path,
          };
        } else {
          return {
            ...curr,
            children: curr?.children
              ? curr.children?.map((child) => ({
                  ...child,
                  isActive: child.path == action.payload.path,
                }))
              : undefined,
          };
        }
      });
      return { ...state, sideBar: updatedSideData };
    },

    handleEditBook: (state, action) => {
      const bookState = state.books.map((book) => {
        if (book.id == action.payload.id) {
          return action.payload;
        } else {
          return book;
        }
      });
      state.books = bookState;
      return state;
    },
    handleCreateBook: (state, action: PayloadAction<IBook>) => {
      const bookState = state.books;
      const newBookState = bookState.toSpliced(0, 0, {
        ...action.payload,
      
      });
      state.books = newBookState;
      return state;
    },
    handleDeleteBook: (state, action: PayloadAction<IBook>) => {
      const bookState = state.books;
      const newBookState = bookState.filter(
        (book) => book.id !== action.payload.id,
      );
      state.books = newBookState;
      return state;
    },
  },
});

export const {
  setUser,
  resetAuth,
  setUserSide,
  logout,
  SwitchCurrentRole,
  setAccessToken,
  handleSideClick,
  handleEditBook,
  handleCreateBook,
  handleDeleteBook,
} = authSlice.actions;

export const selectUser = (state: RootState) => state.persistUser;

export const authReducer = authSlice.reducer;
