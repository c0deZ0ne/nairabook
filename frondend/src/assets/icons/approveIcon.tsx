import React from 'react';
import { ISvgProps } from '../../types';

const ApproveIcon = ({ width, height, className, fill }: ISvgProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="20" height="20" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_6841_44762" transform="scale(0.01)" />
        </pattern>
        <image
          id="image0_6841_44762"
          width="100"
          height="100"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABv0lEQVR4nO3aT2oUQQBG8UJ0KQy69Qhu3QhZBG9g9p4kOYH0AbxADuEFJAiucgsRBIkrwwstPSDKxNaQrq+q3u8E3/Sjp+k/pUiSJEmSJEmSJEmSJG0MeAy8A74A34Fz4OnWO1R+xngCfOJPH4AHHqQNATvgI4e93HLP0Dh8Zvzqde2dQ2BdjB/As9pbu8e6GLPT2lu7x9+vGXtT7a3dwxg5jBHEGEGMEcQYQYwRxBhBjBHEGEGMEcQYQfBxSA6MkQNj5MAYOTBGDoyRA2PkwBg5MEYOjJGDXmMAD0u/3029LS2YPxAGzoDPwDVwAbwoDaC3GLMlxu+ugOMSjB5jzJYzg5ai0HGMR8vfFK1EodcYe8s1gxai0HuM2XwBXw56dBRGiLEHHAHfVkR5VWnfrsv7jBajMGKM1CiMHCMtCsbIiYIxcqJgjJwoGCMnCsbIiYIxcqJgjJwoGCMnCsbIiYIxcqJgjJwoGOP+ze9JVr5PORnmfUYjZwpDP7VtMMpU+zd05w5Rptrbu/UfUabam7v3D1Gm2luHsSLKVHvjcG6JMtXeNizgOfAe+ApcAm9qb5IkSZIkSZIkSZIkSSXGDfXfRNuy+uUdAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};

export default ApproveIcon;
