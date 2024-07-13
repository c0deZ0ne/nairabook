import React, { ImgHTMLAttributes } from 'react';

// Define the props interface

interface ImageWithFallbackProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc: string;
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackSrc,
  ...props
}) => {
  const handleError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    event.currentTarget.src = fallbackSrc;
  };

  return <img src={src} alt={alt} onError={handleError} {...props} />;
};

export default ImageWithFallback;
