// authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, store } from '../../redux/store';
import { IAuthenticatedUser } from '../../types';
import { apiClient, apiSlice, multipartFormSlice } from '../../redux/apiSlice';
import { AppError } from '../../ui-components/alert/alerts';
import AppLoading from '../../ui-components/appLoading';
import { closeModal, openModal } from '../modal/modalSlice';

const initialState: IAuthenticatedUser = {
  clientId: null,
  country: '',
  daysToExpiration: 0,
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
  taxTypes: [],
  userName: '',
  isAuthenticated: false,
  accessToken: null,
  isGroup: false,
  userData: undefined,
  address: '',
  companyEmail: null,
  supervisorEmail: null,
  department: null,
  isUpdatedRequired: false,
  sysConfig: null,
  isOrgActive: false,
  currentRole: '',
  refreshToken: null,
  sideBar: [],
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

    updateUserData: (
      state,
      action: PayloadAction<{ key: string; value: any }>,
    ) => {
      state = {
        ...state,
        isUpdatedRequired: true,
        [action.payload.key]: action.payload.value,
      };
      return state;
    },
    activateOrganisation: (state) => {
      state = { ...state, isOrgActive: true };
      return state;
    },

    setAccessToken: (state, action: PayloadAction<{ accessToken: string }>) => {
      state = { ...state, accessToken: action.payload.accessToken };
      return state;
    },

    setISSaveRequiredFalse: (
      state,
      action: PayloadAction<{ isUpdatedRequired: boolean }>,
    ) => {
      state = { ...state, isUpdatedRequired: action.payload.isUpdatedRequired };
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
  },
});

export const {
  setUser,
  resetAuth,
  setUserSide,
  logout,
  updateUserData,
  setISSaveRequiredFalse,
  SwitchCurrentRole,
  setAccessToken,
  activateOrganisation,
  handleSideClick,
} = authSlice.actions;

export const selectUser = (state: RootState) => state.persistUser;

export const authReducer = authSlice.reducer;
