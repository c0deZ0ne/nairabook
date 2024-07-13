import React from 'react';
import OrbitLogo from '../../assets/icons/home_logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div
      className={
        'w-[100%] bg-Splenzert-primary-white h-[70px] flex flex-row items-center justify-between px-[52px] text-[20px] '
      }
    >
      <Link to={'/'}>Nairabook</Link>

      <a
        href={'/'}
        className={
          'text-Splenzert-secondary-dark_blue  active:text-Splenzert-primary-blue hover:text-Splenzert-secondary-dark_blue font-[600] font-[Open Sans] '
        }
      >
        Our policy
      </a>
      <a
        href={'/'}
        className={
          'text-Splenzert-secondary-dark_blue  active:text-Splenzert-primary-blue hover:text-Splenzert-secondary-dark_blue font-[600] font-[Open Sans] '
        }
      >
        Login
      </a>
    </div>
  );
};

export default Header;
