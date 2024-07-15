import React, { useState } from 'react';
import Footer from './component/footer/footer';
import Sidebar from '../../ui-components/sidebar/sidebar';
import { Outlet } from 'react-router-dom';
import Navbar from '../../ui-components/navbar/navbat';
export default function UserClientLayout() {
  const [closSide, setCloseSide] = useState();

  return (
    <>
      <div className="    lg:w-[100%] h-[100vh]  bg-blue-600  align-middle self-center mr-auto ml-auto overflow-x-hidden overflow-y-hidden relative">
        <div className={'flex flex-row h-[70px] bg-[#F8FAFC]  '}>
          <Navbar />
        </div>
        <div
          className={'flex h-[100%] overflow-hidden mt-[3px] items-center  '}
        >
          <aside
            className={`flex-row h-[100%] mr-[-16px]  relative w-[260px] ${closSide ? 'hidden' : ''} `}
          >
            <Sidebar />
          </aside>
          <aside
            className={
              'flex flex-col align-middle   h-[100%]  overflow-hidden relative  items-center justify-items-center justify-between rounded-tl-[24px] w-[100%]  '
            }
          >
            <div className="flex w-[100%] h-[90%] bg-[#F8FAFC]">
              <Outlet />
            </div>
            <div className="flex w-[100%] h-[10%] bg-[#F8FAFC]">
              <Footer />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
