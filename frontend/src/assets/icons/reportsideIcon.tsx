import React from 'react';
import { ISvgProps } from '../../types';

const ReportSideIcon = ({
  width,
  height,
  className,
  fill = '#fff',
}: ISvgProps) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.492 0.789062H5.753C2.678 0.789062 0.75 2.96606 0.75 6.04806V14.3621C0.75 17.4441 2.669 19.6211 5.753 19.6211H14.577C17.662 19.6211 19.581 17.4441 19.581 14.3621V10.3341"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.82763 8.9205L14.3006 1.4475C15.2316 0.5175 16.7406 0.5175 17.6716 1.4475L18.8886 2.6645C19.8196 3.5955 19.8196 5.1055 18.8886 6.0355L11.3796 13.5445C10.9726 13.9515 10.4206 14.1805 9.84463 14.1805H6.09863L6.19263 10.4005C6.20663 9.8445 6.43363 9.3145 6.82763 8.9205Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      />
      <path
        d="M13.165 2.60254L17.731 7.16854"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      />
    </svg>
  );
};

export default ReportSideIcon;