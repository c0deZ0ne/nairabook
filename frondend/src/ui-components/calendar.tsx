import dayjs from 'dayjs';
import React, { useState, useEffect } from 'react';
import { Popover } from '@mui/material';
import { nanoid } from '@reduxjs/toolkit';
import SelectButton from './select';
import { getYears } from '../utils';

function SelectCalendar({
  onChange,
  fieldName,
  locationKey,
  className,
  placeholder,
  value,
}: {
  onChange?: any;
  fieldName?: any;
  locationKey: string | number | undefined;
  readOnly?: string | number | undefined;
  className?: string;
  placeholder?: string;
  value: any;
}) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const [selectedMonth, setSelectedMonth] = useState(dayjs().month());
  const [selectedYear, setSelectedYear] = useState(dayjs().year());
  const [currentMonthDays, setCurrentMonth] = useState<any[]>([]);
  const [active, setActive] = useState<any>(dayjs().date());
  const [activeShortHand, setActiveShortHand] = useState('Today');
  const [currentDate, setCurrentDate] = useState(
    dayjs(new Date(value)).year(selectedYear).month(selectedMonth),
  );
  const [hasSelected, setAsSelected] = useState(false);

  useEffect(() => {
    if (value) {
      const valueDate = dayjs(new Date(value));
      setCurrentDate(() => valueDate);
      setSelectedMonth(valueDate.month());
      setSelectedYear(valueDate.year());
      setActive(valueDate.date());
    }
  }, [value]);

  useEffect(() => {
    setCurrentDate(dayjs().year(selectedYear).month(selectedMonth));
  }, [selectedMonth, selectedYear]);

  useEffect(() => {
    getDays();
  }, [currentDate]);

  const yearOptions =
    getYears().map((d, index) => ({
      name: d,
      value: d,
      key: d,
    })) || [];

  const monthOptions = Array.from({ length: 12 }, (_, index) => ({
    key: dayjs().month(index).format('MMM'),
    value: dayjs().month(index).format('MMM'),
  }));

  const handleMonthChange = (event: any) => {
    const selectedMonthIndex = monthOptions.findIndex(
      (option) => option.value === event.value,
    );
    setSelectedMonth(selectedMonthIndex);
  };

  const handleYearChange = (event: any) => {
    setSelectedYear(parseInt(event.value, 10));
  };

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const shortHands = [
    'Today',
    'Yesterday',
    'Last 7 Days',
    'Last Week',
    'Last 2 Weeks',
    'This Month',
    'Last Month',
    'Last 2 Months',
  ];

  const handleDateSelect = (
    dayObj: { day: number; isCurrentMonth: boolean } | null,
  ) => {
    if (dayObj && dayObj.isCurrentMonth) {
      setActive(dayObj?.day);
      const newDate = currentDate.date(dayObj.day);
      setCurrentDate(newDate);
      onChange({
        fieldName,
        locationKey,
        key: 'Date',
        value: newDate,
      });
      setAsSelected(true);
    }
  };

  const getDays = () => {
    const daysInMonth = currentDate.daysInMonth();
    const firstDay = currentDate.startOf('month').day();
    const lastDay = currentDate.endOf('month').day();

    const monthDays = Array.from(
      { length: daysInMonth + firstDay + (6 - lastDay) },
      (_, index) => {
        const prevMonthDays = currentDate
          .subtract(1, 'month')
          .endOf('month')
          .date();
        const currentMonthStart = firstDay;

        if (index < currentMonthStart) {
          return {
            day: prevMonthDays - (currentMonthStart - index) + 1,
            isCurrentMonth: false,
          };
        } else if (
          index >= currentMonthStart &&
          index < daysInMonth + currentMonthStart
        ) {
          return {
            day: index - currentMonthStart + 1,
            isCurrentMonth: true,
          };
        } else {
          return {
            day: index - (daysInMonth + currentMonthStart) + 1,
            isCurrentMonth: false,
          };
        }
      },
    );
    setCurrentMonth(monthDays);
  };

  const handleShortHand = (shorthand: string) => {
    switch (shorthand) {
      case 'Today':
        const today = dayjs();
        setSelectedMonth(today.month());
        setSelectedYear(today.year());
        setActive(today.date());
        setCurrentDate(today);
        break;
      case 'Yesterday':
        const yesterday = dayjs().subtract(1, 'day');
        setSelectedMonth(yesterday.month());
        setSelectedYear(yesterday.year());
        setActive(yesterday.date());
        setCurrentDate(yesterday);
        break;
      case 'Last 7 Days':
        const last7Days = dayjs().subtract(7, 'day');
        setSelectedMonth(last7Days.month());
        setSelectedYear(last7Days.year());
        setActive(last7Days.date());
        setCurrentDate(last7Days);
        break;
      case 'Last Month':
        const lastMonth = dayjs().subtract(1, 'month');
        setSelectedMonth(lastMonth.month());
        setSelectedYear(lastMonth.year());
        setActive(lastMonth.date());
        setCurrentDate(lastMonth);
        break;
      case 'Last 2 Months':
        const last2Months = dayjs().subtract(2, 'month');
        setSelectedMonth(last2Months.month());
        setSelectedYear(last2Months.year());
        setActive(last2Months.date());
        setCurrentDate(last2Months);
        break;
      case 'Last Week':
        const lastWeek = dayjs().subtract(1, 'week');
        setSelectedMonth(lastWeek.month());
        setSelectedYear(lastWeek.year());
        setActive(lastWeek.date());
        setCurrentDate(lastWeek);
        break;
      case 'Last 2 Weeks':
        const last2Weeks = dayjs().subtract(2, 'week');
        setSelectedMonth(last2Weeks.month());
        setSelectedYear(last2Weeks.year());
        setActive(last2Weeks.date());
        setCurrentDate(last2Weeks);
        break;
      default:
        break;
    }
    setActiveShortHand(shorthand);
  };

  useEffect(() => {
    if (hasSelected) {
      onChange({
        fieldName,
        locationKey,
        key: 'Date',
        value: currentDate.format('DD MMMM YYYY'),
      });
    }
  }, [currentDate]);

  return (
    <div className="relative w-[100%] flex h-[100%] align-middle  flex-row font-Open Sans group ">
      <span className="appearance-none bg-transparent backdrop-blur-none    flex-row  w-[100%] relative flex focus:outline-none focus:border-[1px] rounded-[8px]">
        <span
          className=" flex flex-row font-Open Sans truncate w-[150px]  justify-start cursor-pointer items-center text-[12px]"
          style={{ fontFamily: ' Open Sans ' }}
          onClick={(e: any) => handleClick(e)}
        >
          {hasSelected
            ? currentDate.format('DD MMM YYYY')
            : fieldName == 'Date'
              ? currentDate.format('DD MMM YYYY')
              : placeholder
                ? placeholder
                : fieldName
                  ? fieldName?.replace('_', ' ')
                  : dayjs(value).format('DD MMMM YYYY')}
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
          <div className="w-[333px] h-[269] flex items-center flex-col align-middle  justify-items-center pb-3">
            <div className="flex flex-col w-[100%]">
              <span className="flex w-[100%] h-[33px] bg-blue-700  text-center mr-auto ml-auto flex-row justify-center text-[13px] align-middle mt-auto mb-auto">
                <span className="flex mt-auto mb-auto text-white">
                  {dayjs(value).format('DD MMMM YYYY') ||
                    currentDate.format('DD MMMM YYYY')}
                </span>
                <label className="flex ml-5  w-[80px]">
                  <SelectButton
                    items={monthOptions}
                    handleSelect={(data: any) => handleMonthChange(data)}
                    isRadio={true}
                    fieldName={'Month'}
                    locationKey={'Month'}
                    fill="#fff"
                    className={'text-white'}
                    textFill="white"
                    placeholder={placeholder}
                    value={'Month'}
                  />
                </label>
                <label className="flex ml-5 w-[80px] ">
                  <SelectButton
                    items={yearOptions}
                    handleSelect={handleYearChange}
                    isRadio={true}
                    fieldName={'Year'}
                    locationKey={'Year'}
                    fill="white"
                    className={'text-white'}
                    textFill="white"
                    placeholder={placeholder}
                    value={'Year'}
                  />
                </label>
              </span>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(7, 1fr)',
                  gap: '8px',
                  width: 301.85,
                  height: 200.18,
                  marginRight: 'auto',
                  marginLeft: 'auto',
                }}
                className="flex flex-row flex-wrap w-[100%] h-[300px] justify-center align-middle gap-[8px]  overflow-y-auto"
              >
                {dayNames.map((dayName) => (
                  <div
                    key={dayName}
                    style={{ fontWeight: 'bold', textAlign: 'center' }}
                    className="flex  text-[12px] text-blue-700 mr-auto ml-auto my-3"
                  >
                    {dayName}
                  </div>
                ))}
                {currentMonthDays?.map((dayObj: any) => (
                  <div
                    key={nanoid(6)}
                    style={{
                      border: 'none',
                      padding: '0px',
                      textAlign: 'center',
                      fontSize: 12,
                    }}
                    className={`flex ${active === dayObj?.day && active !== null && dayObj.isCurrentMonth ? 'bg-blue-700 rounded text-white cursor-pointer' : null} 
                     ${!dayObj?.isCurrentMonth ? 'text-gray-400 cursor-not-allowed' : ' cursor-pointer'} justify-center align-middle`}
                    onClick={() => handleDateSelect(dayObj)}
                  >
                    {dayObj?.day}
                  </div>
                ))}
              </div>
              <span className="flex w-[100%] h-[33px] my-[10px]  text-center text-black text-xs mr-auto ml-auto flex-col justify-center text-[13px] bg-gray-100 rounded-bl-lg rounded-br-lg">
                {dayjs(value).format('DD MMMM YYYY') ||
                  currentDate.format('DD MMMM YYYY')}
              </span>{' '}
              <footer className="flex flex-row flex-wrap w-[100%] justify-center align-middle gap-[8px] ">
                {shortHands.map((custom) => (
                  <span
                    key={custom}
                    className={`text-[10px]  text-nowrap h-[20px] w-[20%] ${activeShortHand == custom ? 'bg-blue-700 rounded text-white' : ''} text-black  font-normal text-center rounded border border-neutral-300 flex flex-col justify-center align-middle items-center `}
                    onClick={() => handleShortHand(custom)}
                  >
                    {custom}
                  </span>
                ))}
                <div
                  className="w-40 h-6 bg-blue-700 text-white rounded text-[13px] text-center "
                  onClick={() => handleClose()}
                >
                  Apply
                </div>
                <div
                  className="w-40 h-6 bg-white rounded text-[13px] border text-center  "
                  onClick={() => handleClose()}
                >
                  Cancel
                </div>
              </footer>
            </div>
          </div>
        </Popover>
      </span>

      <span
        className={`absolute inset-y-0  flex right-[5px] items-center  pointer-events-none transition-transform duration-300 transform ${open ? 'rotate-180' : 'rotate-0'}`}
        style={{ transformOrigin: 'center', translate: 0 }}
        aria-describedby={id}
        onClick={handleClick}
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          opacity={0.7}
        >
          <path
            d="M2.65067 4.84119C2.83329 4.6549 3.11907 4.63796 3.32045 4.79038L3.37814 4.84119L7.5 9.04589L11.6219 4.84119C11.8045 4.6549 12.0903 4.63796 12.2916 4.79038L12.3493 4.84119C12.532 5.02747 12.5486 5.31898 12.3991 5.5244L12.3493 5.58325L7.86374 10.1588C7.68111 10.3451 7.39534 10.362 7.19396 10.2096L7.13626 10.1588L2.65067 5.58325C2.44978 5.37834 2.44978 5.0461 2.65067 4.84119Z"
            fill="black"
          />
        </svg>
      </span>
    </div>
  );
}

export default SelectCalendar;
