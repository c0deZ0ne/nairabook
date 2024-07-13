import React from 'react';

const SideBellIcon = ({
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
      className={`${className}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00065 11.8986C11.7601 11.8986 13.4994 11.4163 13.6673 9.4805C13.6673 7.54603 12.4548 7.67042 12.4548 5.2969C12.4548 3.44292 10.6975 1.3335 8.00065 1.3335C5.30383 1.3335 3.54655 3.44292 3.54655 5.2969C3.54655 7.67042 2.33398 7.54603 2.33398 9.4805C2.50262 11.4236 4.24183 11.8986 8.00065 11.8986Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.59388 13.9048C8.68445 14.9146 7.26578 14.9266 6.34766 13.9048"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SideBellIcon;
