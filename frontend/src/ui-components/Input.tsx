import React from 'react';

import clsx from 'clsx';
import { ChangeEvent } from 'react';
import SelectCalendar from './calendar';
function Input({
  type,
  placeholder,
  value,
  label,
  readOnly,
  name,
  fieldName,
  requiredLabel,
  className,
  onChange,
  locationKey,
}: {
  name?: string;
  type?: 'text' | 'calender' | 'number';
  placeholder?: string;
  label?: string;
  requiredLabel?: boolean;
  value?: string | number;
  className?: string;
  readOnly?: boolean;
  fieldName?: string | number | undefined;
  onChange: any;
  locationKey: string | number | undefined;
}) {
  const formattedValue = typeof value === 'number' ? value : value;
  return (
    <span className="flex row w-[100%] h-[100%]">
      {requiredLabel && (
        <div
          className={`text-[12px] text-left font-normal leading-[17.7px] ${readOnly || false}`}
        >
          {label}
          {requiredLabel ? <span className="text-red-600"> *</span> : null}
        </div>
      )}
      {type == 'calender' ? (
        <div className={`flex w-[100%] h-[100%]  `}>
          {readOnly ? (
            <span
              className={clsx(
                'bg-white   text-black  rounded-[5px] text-[12px] text-left py-[10px]  leading-[17.7px] font-normal  w-full h-full',
                readOnly && 'pointer-events-none bg-red-500',
                className,
              )}
            >
              {value || placeholder}
            </span>
          ) : (
            <SelectCalendar
              onChange={onChange}
              fieldName={fieldName}
              locationKey={locationKey}
              placeholder={placeholder}
              value={value}
            />
          )}
        </div>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={formattedValue}
          disabled={readOnly}
          name={name}
          onChange={(e) =>
            onChange({
              name: fieldName,
              fieldName,
              value: e.target.value,
              locationKey,
            }) as any
          }
          readOnly={readOnly}
          className={clsx(
            'bg-white   text-black  rounded-[5px] text-[13px] text-left py-[10px]  font-normal  w-full h-full',
            readOnly ? 'pointer-events-none' : '',
            className,
          )}
        />
      )}
    </span>
  );
}

export default Input;
