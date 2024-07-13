import { Modal } from '@mui/material';
import React, { FC, ReactElement, createContext, useContext } from 'react';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

interface ModalContextProps {
  isOpen: boolean;
  element: JSX.Element | FC | null;
  openModal: (content: ReactElement) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider: FC<{ children: ReactElement }> = ({ children }) => {
  const { isOpen, element, openModal, closeModal } = useSelector(
    (state: RootState) => state.modal,
  );

  return (
    <ModalContext.Provider value={{ isOpen, element, openModal, closeModal }}>
      <Modal
        open={isOpen}
        onClose={() => closeModal()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="custom-popover"
      >
        <>{element}</>
      </Modal>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextProps => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
