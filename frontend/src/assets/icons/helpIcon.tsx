import React from 'react';

const HelpIcon = ({
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
        d="M8.00065 14.2131C11.6825 14.2131 14.6673 11.4686 14.6673 8.0831C14.6673 4.69761 11.6825 1.95312 8.00065 1.95312C4.31875 1.95312 1.33398 4.69761 1.33398 8.0831C1.33398 11.4686 4.31875 14.2131 8.00065 14.2131Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 5.63086V8.08285"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 10.5352H8.00667"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HelpIcon;
