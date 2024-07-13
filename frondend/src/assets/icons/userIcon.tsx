import React from 'react';

const UserIcon = ({
  className,
  fill = '',
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
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="16" height="16" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
          fill={fill}
        >
          <use xmlnsXlink="#image0_4050_5097" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_4050_5097"
          width="100"
          height="100"
          xmlnsXlink="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default UserIcon;
