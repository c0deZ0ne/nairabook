import React, { useEffect, useState } from 'react';
import { allIcons } from '../assets/icons';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, store } from '../redux/store';
import { logout } from '../features/auth/authSlice';
import { SystemRoles } from '../types';
import SelectButton from './select';
import roleIcon from '../assets/icons/role.svg';
import { useChangeRoleMutation } from '../features/auth/authApi';
import { openModal } from '../features/modal/modalSlice';
import AppLoading from './appLoading';
const UserModal = ({ profilePix, handleClose }: any) => {
  const {
    firstName,
    lastName,

    userName,
    roles,
  } = useSelector((state: RootState) => state.persistUser);
  
  const dispatch = useDispatch();
  const [selectedRole, setSelectedRole] = useState(null);
 

  const handleAccountSwitch = async (data: any) => {
    setSelectedRole(data.value);
  };

  const handleLogout = () => {
    dispatch(openModal({ element: AppLoading() }));
    dispatch(logout({}));
  };
 
  return (
    <div className=" relative flex items-center  font-Open Sans w-[100%] h-[100%] border rounded-md flex-col">
      <div className="w-[270px]  h-[100%] py-[20px] align-middle   flex flex-col  ">
        <div
          className="flex top-[10px] right-[10px] font-semibold absolute"
          onClick={(e) => handleClose(e)}
        >
          {allIcons.close({ width: '10px', className: 'cursor-pointer' })}
        </div>
        <div className="flex flex-col   items-center ">
          <img
            src={profilePix}
            alt="profile picture"
            className="w-[45px] h-[45px] rounded-full object-cover my-[12px] "
          />
          <span
            className={
              'font-[700] text-[13px]  truncate text-ellipsis max-w-[150px] '
            }
          >
            {`${firstName} ${lastName}`}
          </span>
          <span className={'font-[600] text-[12px]'}>{userName}</span>
        </div>
        <div className=" px-[10px] flex flex-col space-y-2 pt-[10px]  font-[400]  w-[100%] text-[12px]">
          <Link
            className=" bg-slate-200 text-black border-none  relative  cursor-pointer flex flex-row items-center hover:drop-shadow-2xl gap-x-[10px] hover:bg-blue-800 group w-full px-[10px] rounded-md transition-colors ease-linear duration-1000 hover:text-white h-[35px]"
            to={`/profile/${roles.includes(SystemRoles.Administrator) || roles.includes(SystemRoles.SuperAdmin) ? 'admin' : 'client'}/user`}
          >
            {allIcons.reportIcon({ fill: '#000' })} {'Profile Settings'}
          </Link>
          <span className=" relative bg-slate-200 text-black cursor-pointer flex flex-row items-center hover:drop-shadow-2xl hover:bg-blue-800 group w-full px-[10px] rounded-md transition-colors ease-linear duration-1000 hover:text-white h-[35px]">
            <img
              src={roleIcon}
              alt="Role icon"
              srcSet=""
              width={'20px'}
              className={'mr-[-3px]'}
            />

           
          </span>
          <span
            className=" relative bg-slate-200 text-black cursor-pointer flex flex-row items-center hover:drop-shadow-2xl gap-x-[10px] hover:bg-blue-800 group w-full px-[10px] rounded-md transition-colors ease-linear duration-1000 hover:text-white h-[35px]"
            onClick={() => handleLogout()}
          >
            {' '}
            {allIcons.Logout({ fill: 'red' })} {'Logout'}
          </span>
        </div>
      </div>{' '}
    </div>
  );
};

export default UserModal;
