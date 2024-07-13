import React from 'react';
import Footer from './component/footer/footer';
import Sidebar from '../../ui-components/sidebar/sidebar';
import { Outlet } from 'react-router-dom';
import Navbar from '../../ui-components/navbar/navbat';
export default function UserClientLayout() {
  return (
    <>
      <div
        className={'flex flex-col w-[100vw] h-[100vh] relative bg-[#F8FAFC] '}
      >
        <div className={'flex flex-row h-[70px] bg-[#F8FAFC] '}>
          <Navbar />
        </div>
        <div
          className={'flex h-[100%] overflow-hidden mt-[3px] items-center  '}
        >
          <aside
            className={'flex flex-row h-[100%] mr-[-16px]  relative w-[260px]'}
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
