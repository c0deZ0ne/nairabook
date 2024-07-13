import React from 'react';
import { ISvgProps } from '../../types';

const DownloadIcon = ({
  className,
  fill = '#130F26',
  opacity,
  width = '25px',
  height = '24px',
}: ISvgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12.8711 15.436L12.8711 3.39502"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.7891 12.5083L12.8731 15.4363L9.95706 12.5083"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5041 8.12793H18.4371C20.4721 8.12793 22.1211 9.77693 22.1211 11.8129V16.6969C22.1211 18.7269 20.4761 20.3719 18.4461 20.3719L7.30609 20.3719C5.27109 20.3719 3.62109 18.7219 3.62109 16.6869V11.8019C3.62109 9.77293 5.26709 8.12793 7.29609 8.12793L8.23809 8.12793"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DownloadIcon;
