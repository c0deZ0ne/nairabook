import React from 'react';

const InboxIcon = ({
  className,
  fill = '#130F26',
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
      fill="none"
      xmlns="http://www.w3.org/2000/svg "
      className={`${className}`}
    >
      <path
        d="M17.9033 8.85107L13.46 12.4641C12.6205 13.1301 11.4394 13.1301 10.5999 12.4641L6.11914 8.85107"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.9089 21C19.9502 21.0084 22 18.5095 22 15.4384V8.57001C22 5.49883 19.9502 3 16.9089 3H7.09114C4.04979 3 2 5.49883 2 8.57001V15.4384C2 18.5095 4.04979 21.0084 7.09114 21H16.9089Z"
        stroke={fill}
        strokeWidth="1.5"
        // strokeLinecap='round'
        // strokeLinejoin='round'
      />
    </svg>
  );
};

export default InboxIcon;