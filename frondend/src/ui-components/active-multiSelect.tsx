import Popover from '@mui/material/Popover';
import React, { useState } from 'react';
import { allIcons } from '../assets/icons';

interface ActiveMultipleSelectProps {
  data: {
    key: string;
    value: string;
    fieldName: string;
    locationKey: string;
    isChecked: boolean;
  }[];

  handleSelect: (selectedData: ActiveMultipleSelectProps['data']) => void;
  handleClose?: () => void;
  fieldName: string;
  locationKey: string;
  className: string;
  fill?: string;
  displayName?: string;
  emptyState?: string;
}

function ActiveMultipleSelect({
  data,
  handleSelect,
  handleClose,
  fieldName,
  locationKey,
  className,
  fill,
  displayName,
  emptyState,
}: ActiveMultipleSelectProps) {
  const [selectedData, setSelectedData] = useState(data);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget as HTMLButtonElement);
  };

  const handleDataSelect = (selected: {
    key?: string;
    value?: string;
    fieldName?: string;
    locationKey?: string;
    isChecked?: boolean;
  }) => {
    if (selected.key === 'reset') {
      setAnchorEl(null);
    } else if (selected.key === 'apply') {
      handleSelect(selectedData);
      setAnchorEl(null);
    } else {
      setSelectedData((prev) => {
        return prev.map((current) => {
          if (current.key === selected.key) {
            return { ...current, isChecked: !current.isChecked };
          }
          return current;
        });
      });
    }
  };

  return (
    <div className={`w-[100%] self-center flex h-[100%] relative ${className}`}>
      <span onClick={handleClick}>
        {displayName || fieldName || 'Select'}
        <span
          className={`absolute inset-y-0 flex right-[5px] items-center self-center group-hover:cursor-pointer transition-transform duration-300 transform ${
            open ? 'rotate-180' : 'rotate-0'
          }`}
          style={{ transformOrigin: 'center' }}
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
      </span>

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
        {selectedData.length === 0 ? (
          <div className="w-[150px] h-[150px] items-center justify-center flex">
            <span
              className="absolute top-[5px] right-[10px] cursor-pointer"
              onClick={() => setAnchorEl(null)}
            >
              {allIcons.close({ width: '10px', height: '10px' })}
            </span>
            {emptyState || 'No Data'}
          </div>
        ) : (
          <>
            <span
              className="flex text-[12px] sticky left-[85%] top-[8px] z-[9999] justify-center align-middle items-center rounded-full flex-col bg-blue-700 w-[25px] h-[25px] text-center cursor-pointer opacity-[0.8] hover:opacity-[1] text-white"
              onClick={() => setAnchorEl(null)}
            >
              {allIcons.close({
                className: 'text-white',
                fill: '#fff',
                width: '10px',
                height: '10px',
              })}
            </span>
            <div className="w-48 relative flex flex-col mr-auto ml-auto overflow-y-auto px-[10px] my-[5px] gap-y-[5px] top-[10px] bg-gray-100 py-[10px] h-[200px]">
              {selectedData.map((item, index) => (
                <div
                  key={index}
                  onClick={() =>
                    handleDataSelect({
                      ...item,
                      fieldName,
                      locationKey,
                    })
                  }
                  className={`relative flex flex-row group items-center hover:drop-shadow-2xl gap-x-[10px] ${
                    item.isChecked ? 'bg-blue-300' : ''
                  } hover:bg-blue-800 hover:cursor-pointer group w-full px-[10px] transition-colors ease-linear duration-1000`}
                >
                  <input
                    type="checkbox"
                    checked={item.isChecked}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDataSelect({
                        ...item,
                        fieldName,
                        locationKey,
                      });
                    }}
                    className="flex h-[35px] py-[10px] cursor-pointer group-hover:cursor-pointer"
                  />
                  <label className="text-black text-base font-normal leading-tight py-[10px] group-hover:text-white group-hover:cursor-pointer">
                    {item.value}
                  </label>
                </div>
              ))}
            </div>
          </>
        )}
        <div className="flex flex-row w-[100%] justify-center align-middle space-x-10 text-white text-center items-center cursor-pointer my-[20px]">
          <span
            className="flex text-[12px] flex-col bg-blue-700 rounded w-[50px] h-[20px] text-center cursor-pointer opacity-[0.8] hover:opacity-[1]"
            onClick={() => handleDataSelect({ key: 'apply', value: 'apply' })}
          >
            Apply
          </span>
        </div>
      </Popover>
    </div>
  );
}

export default ActiveMultipleSelect;
