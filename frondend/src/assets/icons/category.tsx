import React from 'react';
import { ISvgProps } from '../../types';

const CategoryIcon = ({
  className,
  fill = 'black',
  opacity,
  width = '11px',
  height = '20px',
}: ISvgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.5 10C0.5 8.49988 0.540156 8 5.5 8C10.4598 8 10.5 8.49988 10.5 10C10.5 11.5001 10.5158 12 5.5 12C0.484182 12 0.5 11.5001 0.5 10Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.5 17C0.5 15.4999 0.540156 15 5.5 15C10.4598 15 10.5 15.4999 10.5 17C10.5 18.5001 10.5158 19 5.5 19C0.484182 19 0.5 18.5001 0.5 17Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.5 3C0.5 1.49988 0.540156 1 5.5 1C10.4598 1 10.5 1.49988 10.5 3C10.5 4.50012 10.5158 5 5.5 5C0.484182 5 0.5 4.50012 0.5 3Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CategoryIcon;
