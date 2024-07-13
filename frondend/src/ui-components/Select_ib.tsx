import clsx from 'clsx';
import { ChangeEvent, ReactNode } from 'react';

function Select({
  label,
  children,
  requiredLabel,
  readOnly,
  onChange,
}: {
  label?: string;
  children?: ReactNode;
  requiredLabel?: boolean;
  readOnly?: boolean;
  onChange?: (e: ChangeEvent<HTMLSelectElement> | undefined) => void;
}) {
  return (
    <div className="flex flex-col gap-[11px]">
      <div className="text-[13px] text-left font-normal leading-[17.7px]">
        {label}
        {requiredLabel ? <span className="text-red-600"> *</span> : null}
      </div>

      <select
        onChange={onChange}
        className={clsx(
          'bg-white w-full border-beige-1 text-black border-[1px] rounded-[5px] text-[13px] text-left py-[10px] px-[15px leading-[17.7px] font-normal focus:border-black',
          readOnly ? 'cursor-pointer pointer-events-none outline-none' : '',
        )}
      >
        {children}
      </select>
    </div>
  );
}

export default Select;
