import React from 'react';
import { Link } from 'react-router-dom';

interface CardAndListViewProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  members: any[];
  className?: string;
}
const CardAndListView = ({ members, className }: CardAndListViewProps) => {
  return (
    <div
      className={`flex justify-between  px-[20px] items-center ${className}`}
    >
      <p className="text-[12px] font-semibold">{members.length} items</p>
      <div className="flex items-center gap-x-[10px]">
        <Link to={'/profile/admin/employement'}>
          <button className="w-[70px] h-[30px] rounded-[10px] bg-[#1E49E2] text-[#FFF] text-[12px] font-semibold shadow-lg">
            View
          </button>
        </Link>
        <button className="w-[70px] h-[30px] rounded-[10px] bg-[#1E49E2] text-[#FFF] text-[12px] font-semibold">
          Delete
        </button>
      </div>
    </div>
  );
};

export default CardAndListView;
