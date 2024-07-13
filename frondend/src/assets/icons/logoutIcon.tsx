import React from 'react';

const LogoutIcon = ({
  className,
  fill = '#fff',
  opacity,
  width,
  height,
}: {
  className?: string;
  width?: string;
  opacity?: string;
  height?: string;
  fill?: string;
}) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 13.8157H3.33333C2.97971 13.8157 2.64057 13.6865 2.39052 13.4566C2.14048 13.2267 2 12.9149 2 12.5897V4.00773C2 3.68258 2.14048 3.37074 2.39052 3.14082C2.64057 2.91091 2.97971 2.78174 3.33333 2.78174H6"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.666 11.3639L13.9993 8.29888L10.666 5.23389"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 8.29883H6"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LogoutIcon;
