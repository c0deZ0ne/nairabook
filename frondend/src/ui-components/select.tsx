import React, { useState, Fragment, useEffect } from 'react';
import SelectPop from './selectPopUps';

import { Popover } from '@mui/material';

function SelectButton({
  items = [],
  handleSelect,
  isRadio,
  fieldName,
  locationKey,
  className,
  fill,
  readOnly = false,
  readValue,
  textFill = '#0000',
  placeholder,
  value,
}: {
  items?: Array<any>;
  handleSelect: any;
  isRadio: boolean;
  fieldName: string | undefined;
  locationKey: string;
  className: string;
  fill: string;
  readOnly?: boolean;
  readValue?: string | number;
  textFill?: string;
  placeholder?: string;
  value: any;
}) {
  const [selectedData, setselectedData] = useState(
    'Test' || readValue || fieldName || 'Select',
  );
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const intermidiateselect = (data: { key: string; value: any }) => {
    setselectedData(data.value);
    handleSelect({ ...data, name: fieldName, locationKey });
    handleClose();
  };

  useEffect(() => {
    setselectedData(value);
  }, [value]);
  return (
    <div className="flex flex-col h-[100%] w-[100%] ">
      <div
        className="relative w-[100%]  flex h-[100%]  flex-row cursor-pointer self-center justify-between  items-center align-middle"
        aria-describedby={id}
        aria-disabled={readOnly}
        onClick={(e: any) => handleClick(e)}
      >
        <span
          className={`items-start px-[10px]  rounded-lg text-[12px] font-Open Sans text-${textFill}`}
        >
          {readOnly ? readValue : selectedData}
        </span>
        <span
          className={`absolute inset-y-0  flex right-[5px] items-center self-center  pointer-events-none transition-transform duration-300 transform ${open ? 'rotate-180' : 'rotate-0'}`}
          style={{ transformOrigin: 'center', translate: 0 }}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            opacity={0.7}
            className="flex self-center"
          >
            <path
              d="M2.65067 4.84119C2.83329 4.6549 3.11907 4.63796 3.32045 4.79038L3.37814 4.84119L7.5 9.04589L11.6219 4.84119C11.8045 4.6549 12.0903 4.63796 12.2916 4.79038L12.3493 4.84119C12.532 5.02747 12.5486 5.31898 12.3991 5.5244L12.3493 5.58325L7.86374 10.1588C7.68111 10.3451 7.39534 10.362 7.19396 10.2096L7.13626 10.1588L2.65067 5.58325C2.44978 5.37834 2.44978 5.0461 2.65067 4.84119Z"
              fill={fill || 'black'}
            />
          </svg>
        </span>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        className="custom-popover"
        anchorOrigin={{
          vertical: 40,
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div className="w-[100%] max-h-[150px] flex items-center flex-col align-middle  justify-items-center my-[20px]">
          <SelectPop
            data={items}
            handleSelect={intermidiateselect}
            handleClose={handleClose}
            fieldName={fieldName}
            locationKey={locationKey}
            isRadio={isRadio}
            placeholder={placeholder}
            selectedValue={undefined}
          />
        </div>
      </Popover>
    </div>
  );
}

export default SelectButton;
