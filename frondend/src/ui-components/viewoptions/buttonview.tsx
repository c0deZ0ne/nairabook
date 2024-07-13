import React from 'react';
import { ButtonViewI } from '../../types';
const ButtonView = ({ img, active, ...props }: ButtonViewI) => {
  return (
    <button
      {...props}
      className={`w-[60px] h-[30px] border rounded-[10px] bg-[#FFF] flex justify-center items-center ${active ? ' shadow-lg' : ''} ${props.className}`}
    >
      <img src={img} alt="" width={20} height={20} />
    </button>
  );
};

export default ButtonView;
