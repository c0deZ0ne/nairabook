import React from 'react';
import { Link } from 'react-router-dom';

function card({ data }: { data: any }) {
  const index = data.index;
  return (
    <>
      <Link to={`${data.overviewType}`} className="w-[100%]">
        <div className="w-[100%] h-[100%] justify-evenly self-center relative bg-white flex flex-col align-middle  items-center rounded-md  cursor-pointer">
          <span className="w-44 text-center text-black text-sm font-bold font-['Open Sans'] leading-none">
            {data.title}
          </span>
          <span
            className={`w-44   text-center ${index === 0 ? ' text-blue-700' : index == 1 ? 'text-green-600' : index == 2 ? 'text-yellow-500' : 'text-red-600'} text-[35px] font-semibold font-['Open Sans'] leading-10`}
          >
            {data.value}
          </span>
        </div>
      </Link>
    </>
  );
}

export default card;
