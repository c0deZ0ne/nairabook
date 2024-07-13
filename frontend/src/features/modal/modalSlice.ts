import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import { FC, ReactElement } from 'react';

interface ModalContextProps {
  isOpen: boolean;
  element: JSX.Element | FC | null;
  openModal: (content?: ReactElement) => void;
  closeModal: () => void;
}
const initialState: ModalContextProps = {
  isOpen: false,
  element: null,
  openModal: () => null,
  closeModal: () => null,
};

interface IOpenModal {
  element: JSX.Element | FC;
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<IOpenModal>) => {
      state.element = action.payload.element;
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.element = null;
    },
  },
});
export const { openModal, closeModal } = modalSlice.actions;
export const modalSelector = (state: RootState) => state.modal;
export default modalSlice.reducer;
