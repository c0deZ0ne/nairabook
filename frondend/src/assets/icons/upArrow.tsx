import React from 'react';
import { ISvgProps } from '../../types';

const UpArrow = ({
  className,
  fill = '#989C9F',
  opacity,
  width = '10px',
  height = '5px',
}: ISvgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 5L5 -4.37114e-07L0 5" fill={fill} />
    </svg>
  );
};

export default UpArrow;
