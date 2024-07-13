import React from 'react';
import { ISvgProps } from '../../types';

const CompletedIcon = ({
  className,
  fill = '#009A44',
  opacity,
  width = '11px',
  height = '10px',
}: ISvgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="5.75" cy="5" r="5" fill={fill} />
    </svg>
  );
};

export default CompletedIcon;
