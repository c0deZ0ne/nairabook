import { useDispatch } from 'react-redux';
import { closeModal } from '../features/modal/modalSlice';
import React from 'react';
import { ButtonProps } from '../types';
import { useNavigate } from 'react-router-dom';
export const Button: React.FC<ButtonProps> = ({
  value,
  style,
  className,
  props,
  url,
  handleClick,
  isLoading,
}: ButtonProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigate = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    if (url) {
      dispatch(closeModal());
      navigate(url ? url : '#');
    } else {
      return handleClick ? handleClick(url ? url : e) : null;
    }
  };

  return (
    <button
      value={value}
      onClick={(e) => handleNavigate(e)}
      style={{
        ...style,
        alignItems: 'center',
        display: 'flex',
        justifyItems: 'center',
        alignContent: 'center',
      }}
      className={` rounded-md items-center justify-center cursor-pointer outline-none border-none active:outline-none active:border-none focus:fill-none focus:outline-none active:opacity-[0.5] ${className} `}
      {...props}
    >
      {isLoading ? <>{'loading...'}</> : value}
    </button>
  );
};
