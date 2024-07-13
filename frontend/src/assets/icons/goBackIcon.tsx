import React from 'react';

const goBackIcon = ({
  className,
  fill = 'none',
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
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.25 12.2754L19.25 12.2754"
        stroke="#130F26"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.2988 18.299L4.24883 12.275L10.2988 6.25"
        stroke="#130F26"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default goBackIcon;
