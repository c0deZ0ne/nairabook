import React from 'react';
import { ISvgProps } from '../../types';

const ArrangeByIcon = ({ className }: { className: string }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M15.7161 16.2227H8.49609"
        stroke="#130F26"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.7161 12.0371H8.49609"
        stroke="#130F26"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.2521 7.85938H8.49707"
        stroke="#130F26"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.909 2.75C15.909 2.75 8.23198 2.754 8.21998 2.754C5.45998 2.771 3.75098 4.587 3.75098 7.357V16.553C3.75098 19.337 5.47298 21.16 8.25698 21.16C8.25698 21.16 15.933 21.157 15.946 21.157C18.706 21.14 20.416 19.323 20.416 16.553V7.357C20.416 4.573 18.693 2.75 15.909 2.75Z"
        stroke="#130F26"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrangeByIcon;
