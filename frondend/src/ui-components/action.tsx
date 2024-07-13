import React from 'react';
import { allIcons } from '../assets/icons';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { SystemRoles } from '../types';

function ActionButton({
  title,
  action,
  type,
  className,
  innerClass,
}: {
  title: string;
  action: Function | any;
  type: string;
  className: string;
  innerClass?: string;
}) {
  const { roles, currentRole } = useSelector(
    (state: RootState) => state.persistUser,
  );
  return (
    <span
      onClick={(e) => action({ type, e })}
      className={`flex ${className}  cursor-pointe   mr-auto ml-auto justify-center align-middle items-center rounded border-[1px]   hover:opacity-[0.9] drop-shadow-lg px-[10px]`}
    >
      <span
        className={`flex  ${innerClass}    rounded border-spacing-1  flex-row items-center align-middle mt-auto mb-0 absolute justify-around px-[10px] gap-x-[5px]`}
      >
        {type == 'upload' && allIcons.uploadIcon()}
        {type == 'acknowledged' && allIcons.acknowledge()}
        {title ? (
          <span className="text-[#000000] flex flex-row ">
            {currentRole == SystemRoles.Reviewer && title == 'upload'
              ? 'Review'
              : `${title}`}
          </span>
        ) : null}
      </span>
    </span>
  );
}

export default ActionButton;
