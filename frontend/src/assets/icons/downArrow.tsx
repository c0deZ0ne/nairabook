import React from 'react';
import { ISvgProps } from '../../types';

const DownArrow = ({
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
      className={className}
    >
      <path d="M0 0L5 5L10 0" fill={fill} />
    </svg>
  );
};

export default DownArrow;
