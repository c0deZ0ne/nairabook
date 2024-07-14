import React from 'react';
import { Outlet } from 'react-router-dom';
import { apiUrl } from '../../data';

export default function AuthLayout() {
  const containerStyle: any = {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
  };

  const backgroundStyle: any = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${apiUrl}images/home.jpg)`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    filter: 'blur(8px)',
    zIndex: -1,
  };

  const contentStyle: any = {
    position: 'relative',
    zIndex: 1,
    color: '#ffffff',
    // textShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    letterSpacing: '1.11px',
    lineHeight: 'normal',
    color: '#ffffff',
    textShadow: '0 0 10px rgba(0, 0, 0, 0.7)',
  };

  return (
    <div style={containerStyle}>
      <div style={backgroundStyle}></div>
      <div className="flex flex-col items-center justify-center h-full w-full overflow-hidden p-4">
        <div className="flex flex-col items-center text-center mb-10">
          <h1 style={headingStyle}>Welcome to</h1>
          <h2 className="text-3xl text-blue-300 font-semibold">Nairabook</h2>
        </div>
        <div className="relative w-full max-w-md bg-white rounded-md shadow-lg p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
