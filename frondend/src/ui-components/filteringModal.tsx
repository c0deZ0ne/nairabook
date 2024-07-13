import React, { useState, useEffect } from 'react';
import { allIcons } from '../assets/icons';
import searchIcon from '../assets/images/searchIcon.png';
import AppLoading from './appLoading';
import { useDispatch } from 'react-redux';

interface FilteringModalProps {
  label: string;
  data: any[];
  isFectching?: boolean;
  handleQuerySearch?: (search: any) => any;
  query?: {
    search: string | undefined;
    refetch: string | number;
  };
  handleSubmit?: (selectedIds: number[]) => any;
  handleEntitySelect?: (item: any) => any;
}

const FilteringModal: React.FC<FilteringModalProps> = ({
  isFectching,
  label,
  data,
  handleQuerySearch,
  query,
  handleSubmit,
  handleEntitySelect,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState('select...');
  const [entityIds, setEntityIds] = useState<number[]>([]);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    if (label === 'Company' && handleEntitySelect) {
      handleEntitySelect(entityIds);
    }
  }, [entityIds]);

  const handleSelect = (item: any) => {
    const updatedEntityIds = entityIds.includes(item.id)
      ? entityIds.filter((id) => id !== item.id)
      : [...entityIds, item.id];
    setEntityIds(updatedEntityIds);
  };

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const handleApply = () => {
    if (handleSubmit) {
      handleSubmit(entityIds);
    }
    setShowDropdown(false);
  };

  return (
    <div className="relative">
      <div className="flex justify-start items-center gap-[5px]">
        <span className="text-[13px] font-Open Sans ">{label}</span>
        <div
          onClick={handleDropdown}
          className="w-[120px] flex justify-between cursor-pointer items-center px-[10px] h-[35px] rounded-md border border-gray-300"
        >
          <span
            className={
              selected === 'select...'
                ? 'text-[13px] font-Open Sans'
                : 'text-center text-[13px] font-Open Sans truncate max-w-[200px]'
            }
          >
            {selected}
          </span>
          {showDropdown ? (
            <span>{allIcons.downArrow({})}</span>
          ) : (
            <span>{allIcons.upArrow({})}</span>
          )}
        </div>
      </div>

      {showDropdown && (
        <div className="absolute h-[120px] w-[200px] px-[5px] overflow-y-auto bg-[#fff] z-20 top-[50px] shadow-lg rounded-[10px]">
          <div className="flex cursor-pointer h-[30px] items-center justify-end object-cover my-[10px]">
            {showSearch && (
              <input
                type="search"
                id="search"
                value={query?.search || ''}
                placeholder="search"
                onChange={(e) =>
                  handleQuerySearch &&
                  handleQuerySearch({
                    type: 'queryParam',
                    key: e.target.value,
                  })
                }
                className="flex px-[10px] text-[13px] font-Open Sans py-[5px] outline-none border rounded-md w-[130px] h-[20px] bg-white mx-[10px]"
              />
            )}
            <label
              htmlFor="search"
              className="flex flex-row relative justify-center align-middle items-center w-[50px] h-[10px]"
              onClick={() => setShowSearch((pre) => !pre)}
            >
              <img
                width={'30px'}
                height={'30px'}
                className="bg-cover flex absolute left-50"
                src={searchIcon}
                alt="search icon"
              />
            </label>
          </div>
          {isFectching ? (
            <AppLoading />
          ) : data?.length === 0 ? (
            <p className="flex justify-center items-center">No data</p>
          ) : (
            <div className="mt-[-5px] relative  ">
              <p
                className="pt-[-60px] not-italic text-[13px] font-Open Sans cursor-pointer"
                onClick={() => handleSelect('select...')}
              ></p>

              {data?.map((item) => (
                <div
                  key={item.id}
                  className=" px-[5px] flex items-center  py-[5px] hover:bg-[#1e48e28d] hover:rounded-md hover:text-[#fff] "
                >
                  <input
                    type="checkbox"
                    checked={entityIds.includes(item.id)}
                    onChange={() => handleSelect(item)}
                    className="mr-[10px]"
                  />
                  <p
                    onClick={() => handleSelect(item)}
                    className="truncate max-w-[150px] not-italic text-[13px] font-Open Sans cursor-pointer hover:bg-["
                  >
                    {item?.companyName}
                  </p>
                </div>
              ))}

              <div className=" top-[100px] flex justify-center items-center w-[100%] my-[10px] ">
                <button
                  onClick={handleApply}
                  className=" bg-[#1E49E2] text-[12px] font-Open Sans  text-[#ffff] px-[10px] py-[2px] rounded-md hover:bg-[#1e48e28d] hover:text-[#ffff]"
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FilteringModal;
