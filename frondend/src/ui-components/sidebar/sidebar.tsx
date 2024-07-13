import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Divider } from '@mui/material';
import SideProfile from './sideprofile';
import { allIcons } from '../../assets/icons';
import { handleSideClick, logout } from '../../features/auth/authSlice';
import { RootState } from '../../redux/store';
import { ISidBarItems } from '../../types';
import { openModal } from '../../features/modal/modalSlice';
import AppLoading from '../appLoading';

const Sidebar = () => {
  const { sideBar } = useSelector((state: RootState) => state.persistUser);
  const dispatch = useDispatch();

  const [sidebarUser, setSideBarData] = useState<ISidBarItems[]>(
    sideBar as ISidBarItems[],
  );
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleItemClick = (item: ISidBarItems) => {
    dispatch(handleSideClick(item));
    if (item.children) {
      setOpenDropdown(openDropdown === item.title ? null : item.title);
    }
  };

  useEffect(() => {
    setSideBarData(sideBar);
  }, [window.location.hash.split('#')[1], sideBar, dispatch, handleItemClick]);

  const handleLogout = () => {
    dispatch(openModal({ element: AppLoading() }));
    dispatch(logout({}));
  };
  const renderMenu = (items: ISidBarItems[]) =>
    items?.map((d: ISidBarItems) => (
      <div key={d.title} className="relative gap-y-[15px]">
        <Link to={d.path} key={d.title}>
          <div
            onClick={() => handleItemClick(d)}
            className={`cursor-pointer py-[12px] pl-[10px] text-nowrap text-white border-l-2 border-transparent flex items-center ${
              d.isActive || d?.path == location?.hash.split('#')[1]
                ? 'bg-[#8913ea83] border-l-white opacity-[1]'
                : ''
            } hover:opacity-[0.9] hover:bg-[#8913ea4c]`}
          >
            <pre
              className="flex items-center font-Open Sans"
              style={{ fontFamily: 'Open Sans', fontSize: '13px' }}
            >
              {React.createElement(allIcons[d.icon], {
                className: `text-outline-none border-none size-[18px] ${d.isActive ? 'text-[white] bg-[#8913ea4c] shadow-sm' : ''}`,
              })}
              <span className="pl-[14px]">{d.title}</span>
            </pre>
          </div>
        </Link>

        {d.children && openDropdown === d.title && (
          <div className="flex w-[94%] h-[150px] overflow-y-auto flex-col bg-[#211df2f0] opacity-[1] relative z-[1000] pl-[28px] py-[10px] gap-y-[5px]">
            {renderMenu(d.children)}
          </div>
        )}
      </div>
    ));

  return (
    <>
      <div className="w-[268px] overflow-x-hidden bg-gradient-to-b from-[#1E49E2] h-[100%] via-[#7213EA] gap-y-[20px] to-[#1E49E2] relative overflow-y-auto flex flex-col align-top justify-start">
        <div className="w-[100%] h-[100px] relative">
          <SideProfile />
        </div>
        <nav className="flex flex-col w-[100%] h-[50%] overflow-y-auto py-[20px] self-center mt-[20px]">
          {renderMenu(sidebarUser)}
        </nav>
      </div>
      <div className="w-[100%] h-[12%] absolute bottom-[15%] flex-col gap-y-[20px] align-bottom justify-between items-end">
        <div className="flex bg-[#FFFFFF] w-[212px] ml-[18px] items-center justify-center align-middle relative mt-[28px] opacity-[0.2]">
          <Divider className="flex flex-col w-[212px]" />
        </div>
        <span className="flex w-[100%] h-[50%] flex-row items-center cursor-pointer">
          <span className="p-[8px]">{allIcons.help({})}</span>
          <span className="ml-[14px] text-[#ffff] text-[14px]">Help</span>
        </span>
        <span
          className="flex w-[100%] h-[50%] flex-row items-center cursor-pointer"
          onClick={() => handleLogout()}
        >
          <span className="p-[8px]">{allIcons.Logout({})}</span>
          <span className="ml-[14px] text-[#ffff] text-[14px]">Log out</span>
        </span>
      </div>
    </>
  );
};

export default Sidebar;
