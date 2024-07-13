import React from 'react';
import { AnalyticsProps } from '../../types';

import { HTMLAttributes } from 'react';

interface AnaliticalI {
  text?: string;
  digit: number | string;
  fill: string;
  background?: string;
}
interface AnalyticCardI extends HTMLAttributes<HTMLDivElement> {
  data: AnaliticalI;
}
export const TrackCard = ({ data, ...props }: AnalyticCardI) => {
  const { text, digit, fill, background } = data;
  return (
    <div
      style={{ backgroundColor: `#${background}` }}
      {...props}
      className={`w-[100%] h-[100%] relative bg-white  justify-center  items-center rounded-md drop-shadow  ${props.className}`}
    >
      <div>
        <p
          className={` text-center text-black text-sm font-bold font-['Open Sans'] leading-none`}
        >
          {text}
        </p>
        <p
          className="text-[#${fill}]  text-[35px] font-bold  text-center"
          style={{ color: `#${fill}` }}
        >
          {digit}
        </p>
      </div>
    </div>
  );
};

export const TrackCardCompany = ({ data, ...props }: AnalyticCardI) => {
  const { text, digit, fill, background } = data;
  return (
    <div
      style={{ backgroundColor: `#${background}` }}
      {...props}
      className={`w-[100%] h-[100%] relative bg-white  justify-center  items-center rounded-md drop-shadow  ${props.className}`}
    >
      <div>
        <p
          className={` text-center text-black  font-['Open Sans'] leading-none`}
        >
          {text}
        </p>
        <p
          className="text-[#${fill}]  text-[35px] font-bold  text-center"
          style={{ color: `#${fill}` }}
        >
          {digit}
        </p>
      </div>
    </div>
  );
};
