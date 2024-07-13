import React, { HTMLAttributes, MouseEvent } from 'react';
interface PopupI extends HTMLAttributes<HTMLElement> {
  onClickViewConfig: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickViewTable?: (event: MouseEvent<HTMLButtonElement>) => void;
}
const ConfigPopup = ({
  onClickViewConfig,
  onClickViewTable,
  ...props
}: PopupI) => {
  return (
    <div
      {...props}
      className={`w-[150px] h-[70px]  text-[#FFF] items-center rounded-[10px]  absolute pt-[5px] flex flex-col ${props.className}`}
    >
      <button
        className="bg-[#1F49E2] rounded-[10px] mb-[20px] px-[10px]"
        onClick={onClickViewConfig}
      >
        Configure item
      </button>
      <button
        className="bg-[#1F49E2] rounded-[10px] px-[10px]"
        onClick={onClickViewTable}
      >
        {' '}
        View saved item
      </button>
    </div>
  );
};

export default ConfigPopup;
