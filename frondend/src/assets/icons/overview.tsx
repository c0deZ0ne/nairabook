import React from 'react';

const OverviewIcon = ({
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
      className={`${className}`}
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 4.33333C2 2.58319 2.01874 2 4.33333 2C6.64793 2 6.66667 2.58319 6.66667 4.33333C6.66667 6.08348 6.67405 6.66667 4.33333 6.66667C1.99262 6.66667 2 6.08348 2 4.33333Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.33301 4.33333C9.33301 2.58319 9.35175 2 11.6663 2C13.9809 2 13.9997 2.58319 13.9997 4.33333C13.9997 6.08348 14.0071 6.66667 11.6663 6.66667C9.32563 6.66667 9.33301 6.08348 9.33301 4.33333Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 11.6668C2 9.91669 2.01874 9.3335 4.33333 9.3335C6.64793 9.3335 6.66667 9.91669 6.66667 11.6668C6.66667 13.417 6.67405 14.0002 4.33333 14.0002C1.99262 14.0002 2 13.417 2 11.6668Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.33301 11.6668C9.33301 9.91669 9.35175 9.3335 11.6663 9.3335C13.9809 9.3335 13.9997 9.91669 13.9997 11.6668C13.9997 13.417 14.0071 14.0002 11.6663 14.0002C9.32563 14.0002 9.33301 13.417 9.33301 11.6668Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default OverviewIcon;
