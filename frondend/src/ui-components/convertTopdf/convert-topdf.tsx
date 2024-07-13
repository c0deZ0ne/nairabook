import React from 'react';
import { PrintToPDF } from '../../utils';

function ConvertTopdf({ data }: any) {
  return (
    <span
      onClick={() => PrintToPDF({ key: data?.key })}
      className="h-[35px]  w-[125px] self-end  mx-[22px] justify-center my-[10px] align-middle items-center flex-row  relative top-[0px] right-[0%]  hover:text-blue-700 cursor-pointer border py-[10px]  flex  bg-white rounded-[5px] text-[13px] text-center "
    >
      save as pdf
    </span>
  );
}

export default ConvertTopdf;
