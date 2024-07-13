import React from 'react';
import { ISvgProps } from '../../types';

const FilterIcon = ({
  className,
  fill = '#989C9F',
  opacity,
  width = '12px',
  height = '12px',
}: ISvgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.75 6.6875L0.625 2H0V0.75H11.25V2H10.625L7.5 6.6875V12H3.75V6.6875ZM2.1275 2L5 6.30875V10.75H6.25V6.30875L9.1225 2H2.1275Z"
        fill={fill}
      />
    </svg>
  );
};

export default FilterIcon;
