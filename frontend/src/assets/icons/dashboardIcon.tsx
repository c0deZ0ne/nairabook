import React from 'react';

const DashboardIcon = ({
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
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
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
          <use xlinkHref="#image0_4050_6765" transform="scale(0.01)" />
        </pattern>
        <image
          enableBackground={fill}
          id="image0_4050_6765"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEE0lEQVR4nO2dTchVRRjHT2mJGtpCCUQpXloEVwjyi0CEvtS2pdUqhaCQE0S4EMHIpZC5lcRV0MIwNy36EMRVZrlLsBZG0FsRVERFaYY/GRjrku+988w9c+ade87/B7N9Zub53TnnzLkzc6pKCCGEEEIIIYQQQogOA9wNbAN2A/tUGM7Bbp+b5W1LuA14BvgY+BsR4irwEbDT5S61jE3A58EmiFGcBzakkvEc8OfIqoSVK8CupjJqc3XCyp5JZTwBXDNXI6y4nD4WK+Mu4AdzFSKW74ClMUJej65CxHLAKuMO4Bdj0L+AS8AFFS74XLicWPjZ5dp677A8MbwCLDEPu54ALAFe9TkKEb6XAG8aAj2dpXdTjJ8QhnjDEuhUIMinWXrUAfyEcBwnLUHOBYIcztKbDmC42pyzBLkYCHIwS286gMtVIJcXLUEkpI9C3MQIeAo45t+KftH4XU9hTIUQ4D7g7REvLOuqQxQtBFjkHggCz+d11SGKFQKsAM4G4jokpG0hwGrgG2zUsbIj2vEacDpxuXeqRgiwGPjMKKNtIe+SnsG0CXE37xjqqiV6LwTYCFyXkEJGCHCGeOoUo2FEe/p7yQIenLCDddUSfRcy6T+OddUSfRcy6RquumqJvgv5vUAhLwJvJS6rihcCLJtQhkMz9RaE3M/kHPd/fcaWHVWBlDJCVpKfP6oCKUXI7fOwOv5yVSBFCPExLpOX96sCKUnIUfJSG9o0A6xLXBZPi5Dt5OO6e8VvaFOv5yF3ArPk4UywU30X4uO8QJ7R8bCE2IQsMMhtyglLW3x7+j1CfKwHgF9ph6/df/URbZEQnwi3RfifxDJ+A9ZaZUjIrcl4MuFImZ1kR6tGyK0JWQt82VDGWeCeWBkSMn531svAj5EivnJ7UppswO/1xNC4rte9pX1nzPa5WT/j32ba+lUgUyNkxGK6dcAW4KGYp6eSmVohXYW+CAHW+KemcWVNAe3sjZABDWfRmdopIUNISMZf3oAwEjK0F6TtU+aONBUCbE7QjhXFX7KMv94cDBomK0cdEnITCcnPoBqDhEjIXOiSdRONkPwMqjFIiITM2yVrppAT5mYM2xParmP+H3vFf0hIYUhIYUhIR4XoiL/Cjvh7LxDkfKoGdx3C57ycTHVM7M4sPZpigGdTHRP7uCHQFX9YsA5SnnuJ017jQcqPVomPGndfkdFR4/w7Ubzkc2LhJ2BhUMjQYV+iXfbHDrvvW25Qn/k2tAx1LilbIoafsOO2jD8SJWNIyp6IioRtC95LE8kYkqKPgqXBPXU930jGkJT17qsIiRrWRz5xi8iTyPjfhyV3AB/q3mIeER803ddilbMc2OrOanffUgIOqXDI52KXz82yViUIIYQQQgghhBBCCFHNLzcAXwz3pDOo+AUAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
};

export default DashboardIcon;
