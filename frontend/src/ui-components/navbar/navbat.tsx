import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthUserDetails from './auth-user-details';
import { Link } from 'react-router-dom';
import Popover from '@mui/material/Popover';
import { RootState } from '../../redux/store';
import UserModal from '../userProfilePopup';
import { handleSideClick } from '../../features/auth/authSlice';
import { BiLogIn, BiRegistered } from 'react-icons/bi';

const Navbar = () => {
  const profile =
    "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='100%' height='100%' fill='%23999'%3E%3C/rect%3E%3Ctext x='50%' y='50%' fill='%23fff' text-anchor='middle' font-size='24px' font-family='Arial' dy='.3em'%3E400x300%3C/text%3E%3C/svg%3E";
  const { name, imageContent, currentRole, isAuthenticated } = useSelector(
    (state: RootState) => state.persistUser,
  );
  const dispatch = useDispatch();
  const navBarItem = [
    {
      icon: BiLogIn,
      title: !isAuthenticated ? 'login' : 'Books',
      path: !isAuthenticated ? '/auth/login' : '/',
    },
    !isAuthenticated
      ? {
          icon: BiRegistered,
          title: 'Register',
          path: 'auth/register',
          onClick: () => dispatch(handleSideClick({ path: '', title: '' })),
        }
      : undefined,
  ];

  const base64Image = imageContent
    ? `data:image/png;base64,${imageContent}`
    : profile;

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <div
        className={
          'w-[100%] bg-gradient-to-r from-blue-50 to-blue-100 h-[70px] flex flex-row items-center justify-between px-[20px] relative'
        }
      >
        <Link
          to={!isAuthenticated ? '/auth/login' : '/'}
          className="text-[1.8em]"
        >
          Nairabook
        </Link>
        <div
          className={
            ' h-[100%]  md:w-[300px]  relative   flex flex-row justify-end '
          }
        >
          <div className="md:w-[136px] md:gap-[32px] h-[100%] flex flex-row align-middle items-center">
            {navBarItem.map((d, i) => (
              <>
                {d ? (
                  <div key={i} onClick={d.onClick}>
                    <Link to={d.path || '#'}>{d.title}</Link>
                  </div>
                ) : (
                  ''
                )}
              </>
            ))}
          </div>
          {isAuthenticated ? (
            <Link
              to={'/profile/client/books'}
              className={'flex  flex-row ml-[15px] '}
            >
              <AuthUserDetails
                name={`${name}` || 'update profile'}
                profilePix={base64Image}
                title={currentRole}
              />
            </Link>
          ) : null}
        </div>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        className=" border-none custom-popover-second-level"
        elevation={0}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 100,
        }}
        transformOrigin={{
          vertical: -50,
          horizontal: -150,
        }}
      >
        <div className="w-[100%] h-[100%] flex items-center flex-col align-middle  justify-items-center  border-none rounded-xl">
          <UserModal
            handleClick={handleClick}
            handleClose={handleClose}
            profilePix={base64Image}
          />
        </div>
      </Popover>
    </>
  );
};

export default Navbar;
