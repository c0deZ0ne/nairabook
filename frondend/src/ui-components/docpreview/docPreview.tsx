import React, { useState } from 'react';
import AppLoading from '../appLoading';
import { allIcons } from '../../assets/icons';
import { Modal } from '@mui/material';

interface DocPreviewProps {
  url: string;
  loading: boolean;
  handleClose: () => void;
  open: boolean;
}

const DocPreview: React.FC<DocPreviewProps> = ({
  url,
  loading,
  handleClose,
  open,
}) => {
  const [error, setError] = useState<boolean>(false);

  const handleIframeError = (errorData: any) => {
    setError(true);
  };
  return (
    <Modal
      open={open}
      hideBackdrop={false}
      onClose={handleClose}
      className="custom-modalPop  text-white  w-[1000px] h-[80vh] mr-[152px] ml-auto top-[50px] absolute mt-auto mb-auto"
    >
      <div className="relative flex w-[100%] h-[100%] custom-popover mr-auto ml-auto flex-col bg-white">
        <div
          onClick={handleClose}
          className="flex  font-semibold fixed  right-[150px] top-[10px]  z-30 w-[30px] h-[30px] backdrop-blur-[0.2] bg-slate-500  cursor-pointer  flex-row items-center justify-center rounded-full  hover:bg-gray-400  self-center mt-auto mb-auto"
        >
          {allIcons.close({ width: '10px', fill: 'white' })}
        </div>

        {loading && <AppLoading />}
        {!loading && error && (
          <div className="flex items-center justify-center w-full h-full text-red-500">
            Error loading document. Please try again later.
          </div>
        )}
        {!loading && !error && (
          <iframe
            src={url}
            onErrorCapture={handleIframeError}
            onError={(d) => handleIframeError(d)}
            className="w-full h-full"
          />
        )}
      </div>
    </Modal>
  );
};

export default DocPreview;
