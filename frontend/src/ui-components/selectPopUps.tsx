import React, { useEffect, useState } from 'react';

function SelectPop({
  data,
  handleSelect,
  handleClose,
  isRadio = false,
  fieldName,
  locationKey,
  placeholder,
  selectedValue,
}: {
  data: Array<Record<string, string>> | [];
  handleSelect: any;
  handleClose: any;
  isRadio: boolean;
  fieldName?: string;
  locationKey: string;
  placeholder?: string;
  selectedValue: any;
}) {
  const [selectedData, setSelectedData] = useState<{
    key: string;
    value: string;
    fieldName?: string;
    locationKey: string;
    placeholder?: string;
  }>();

  const handelDataSelect = (selected: {
    key: string;
    value: string;
    fieldName?: string;
    locationKey: string;
    placeholder?: string;
  }) => {
    setSelectedData({ ...selected });
    handleSelect({ ...selected });
    handleClose();
  };

  return (
    <div className="w-48 flex mr-auto ml-auto flex-col rounded-lg  ">
      <div className="w-48 relative flex  flex-col mr-auto ml-auto px-[10px] rounded-lg ">
        {data.map((item: any, index) => (
          <div
            key={index}
            onClick={() =>
              handelDataSelect({
                ...item,
                fieldName,
                index,
                locationKey,
                value: item?.key,
                special: item.value,
              })
            }
            className=" relative  cursor-pointer flex flex-row items-center hover:shadow-2xl hover:drop-shadow-2xl gap-x-[10px] hover:bg-blue-800 group w-full px-[10px] rounded-xl transition-colors ease-linear duration-1000"
          >
            <input
              type={isRadio ? 'radio' : 'checkbox'}
              value={item?.value as any}
              onChange={() =>
                handelDataSelect({
                  ...item,
                  fieldName,
                  locationKey,
                  value: item?.key,
                  special: item.value,
                })
              }
              checked={selectedData?.key === item?.key}
              name="selectPop"
              id={`radio-${index}`}
              className="flex h-[35px] py-[10px] cursor-pointer group-hover:cursor-pointer"
            />
            <label
              htmlFor={`radio-${index}`}
              className="text-black text-base font-normal leading-tight py-[10px] group-hover:text-white group-hover:cursor-pointer  "
            >
              {item?.value}
            </label>
          </div>
        ))}
      </div>

      {!isRadio && (
        <div className="flex flex-row w-[100%] justify-center align-middle space-x-10 text-white text-center items-center cursor-pointer">
          <span
            className="flex flex-col text-[12px] bg-blue-700 rounded w-[50px] h-[18px] text-center opacity-[0.8] hover:opacity-[1]"
            onClick={() =>
              handelDataSelect({
                key: 'reset',
                value: 'resete',
                fieldName: fieldName,
                locationKey,
                placeholder: placeholder,
              })
            }
          >
            Reset
          </span>
          <span
            className="flex text-[12px] flex-col bg-blue-700 rounded w-[50px] h-[18px] text-center cursor-pointer opacity-[0.8] hover:opacity-[1]"
            onClick={() =>
              handelDataSelect({
                key: 'apply',
                value: 'apply',
                fieldName: fieldName,
                locationKey,
                placeholder: placeholder,
              })
            }
          >
            Apply
          </span>
        </div>
      )}
    </div>
  );
}

export default SelectPop;
