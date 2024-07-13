import React from 'react';
import { HTMLAttributes } from 'react';
interface AnalyticCardI extends HTMLAttributes<HTMLDivElement> {}
const Card = ({ children, ...props }: AnalyticCardI) => {
  return (
    <div
      {...props}
      className={`  border-1 border-solid border-[#D9D9D9] rounded-[10px]   ${props.className}`}
    >
      {children}
    </div>
  );
};

export default Card;
