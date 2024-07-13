import React from 'react';
import { ISvgProps } from '../../types';

const EyeIcon = ({
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
      className=""
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.9128 12.0531C15.9128 13.7991 14.4968 15.2141 12.7508 15.2141C11.0048 15.2141 9.58984 13.7991 9.58984 12.0531C9.58984 10.3061 11.0048 8.89111 12.7508 8.89111C14.4968 8.89111 15.9128 10.3061 15.9128 12.0531Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.748 19.355C16.556 19.355 20.039 16.617 22 12.053C20.039 7.48898 16.556 4.75098 12.748 4.75098H12.752C8.944 4.75098 5.461 7.48898 3.5 12.053C5.461 16.617 8.944 19.355 12.752 19.355H12.748Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EyeIcon;
