import Popover from '@mui/material/Popover';
import React, { useState } from 'react';
import { allIcons } from '../assets/icons';

function MultipleSelect({
  data,
  handleSelect,
  handleClose,
  fieldName,
  locationKey,
  className,
  fill,
  displayName,
}: {
  data: Array<Record<string, string>>;
  handleSelect: any;
  handleClose: any;
  fieldName: string;
  locationKey: string;
  className: string;
  fill?: string;
  displayName?: string;
}) {
  const [selectedData, setSelectedData] = useState<
    Array<{
      key: string;
      value: string;
      fieldName: string;
      locationKey: string;
    }>
  >([]);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handelDataSelect = (selected: {
    key?: string;
    value?: string;
    fieldName?: string;
    locationKey?: string;
  }) => {
    if (selected.key == 'reset') {
      setAnchorEl(null);

      return setSelectedData(() => []);
    } else if (selected.key == 'apply') {
      handleSelect({
        fieldName,
        value: selectedData.map((d) => d.key),
      });
      setSelectedData(() => []);
      setAnchorEl(null);
      return;
    } else {
      const selectedIndex = selectedData.findIndex(
        (item) => item.key === selected.key,
      );
      if (selectedIndex === -1) {
        setSelectedData((prevSelected) => [...prevSelected, selected] as any);
      } else {
        setSelectedData((prevSelected) =>
          prevSelected.filter((item) => item.key !== selected.key),
        );
      }
    }
  };

  return (
    <div
      className={`w-[100%]    self-center  flex    h-[100%]  relative ${className}`}
    >
      <span onClick={handleClick}>
        {displayName || fieldName || 'Select'}
        <span
          className={`absolute inset-y-0  flex right-[5px]  items-center self-center group-hover:cursor-pointer transition-transform duration-300 transform ${open ? 'rotate-180' : 'rotate-0'}`}
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
        <span
          className="flex text-[12px]   sticky   top-[10px] left-[90%] mr-[10px] z-[9999] justify-center align-middle items-center rounded-full flex-col bg-blue-700  w-[25px] h-[25px] text-center cursor-pointer opacity-[0.8] hover:opacity-[1] text-white"
          onClick={() => setAnchorEl(null)}
        >
          {allIcons.close({
            className: 'text-white',
            fill: '#fff',
            width: '10px',
            height: '10px',
          })}
        </span>
        <div className="w-48 relative flex flex-col mr-auto ml-auto rounded-lg py-[10px] max-h-[300px] px-[10px] my-[5px]">
          {data?.map((item, index) => (
            <div
              key={index}
              onClick={() =>
                handelDataSelect({
                  ...item,
                  fieldName,
                  locationKey,
                })
              }
              className="relative cursor-pointer flex flex-row group items-center hover:drop-shadow-2xl gap-x-[10px] hover:bg-blue-800 group w-full px-[10px] rounded-xl transition-colors ease-linear duration-1000"
            >
              <input
                type="checkbox"
                checked={selectedData.some(
                  (selected) => selected.key === item.key,
                )}
                onChange={() =>
                  handelDataSelect({
                    ...item,
                    fieldName,
                    locationKey,
                  })
                }
                className="flex h-[35px] py-[10px] cursor-pointer group-hover:cursor-pointer"
              />
              <label className="text-black text-base font-normal leading-tight py-[10px] group-hover:text-white">
                {item.value}
              </label>
            </div>
          ))}

          <div className="flex flex-row w-[100%] justify-center align-middle space-x-10 text-white text-center items-center cursor-pointer my-[20px] sticky bottom-[10px]">
            <span
              className="flex flex-col text-[12px] bg-blue-700 rounded w-[50px] h-[20px] text-center opacity-[0.8] hover:opacity-[1]"
              onClick={() => handelDataSelect({ key: 'reset', value: 'Reset' })}
            >
              Reset
            </span>
            <span
              className="flex text-[12px] flex-col bg-blue-700 rounded w-[50px] h-[20px] text-center cursor-pointer opacity-[0.8] hover:opacity-[1]"
              onClick={() => handelDataSelect({ key: 'apply', value: 'Apply' })}
            >
              Apply
            </span>
          </div>
        </div>
      </Popover>
    </div>
  );
}

export default MultipleSelect;
