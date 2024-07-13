import { combineReducers, configureStore } from '@reduxjs/toolkit';
import modalReducer from '../features/modal/modalSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authSlice } from '../features/auth/authSlice';
import { apiSlice, multipartFormSlice } from './apiSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, authSlice.reducer);

const rootReducer = combineReducers({
  persistUser: persistedReducer,
  modal: modalReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
  [multipartFormSlice.reducerPath]: multipartFormSlice.reducer,
});
export const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      apiSlice.middleware,
      multipartFormSlice.middleware,
    ),
  devTools: import.meta.env.VITE_NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
