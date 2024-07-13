import React from 'react';

const ImportantIcon = ({
  className,
  fill = '#B41E1E',
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
      width="4"
      height="16"
      viewBox="0 0 4 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.91008 10.6445H1.18157L0.712818 0.722656H3.37883L2.91008 10.6445ZM0.595631 13.7891C0.595631 13.2552 0.73235 12.8809 1.00579 12.666C1.28574 12.4447 1.62753 12.334 2.03118 12.334C2.42831 12.334 2.76685 12.4447 3.0468 12.666C3.32675 12.8809 3.46672 13.2552 3.46672 13.7891C3.46672 14.3099 3.32675 14.6875 3.0468 14.9219C2.76685 15.1497 2.42831 15.2637 2.03118 15.2637C1.62753 15.2637 1.28574 15.1497 1.00579 14.9219C0.73235 14.6875 0.595631 14.3099 0.595631 13.7891Z"
        fill={fill}
      />
    </svg>
  );
};

export default ImportantIcon;
