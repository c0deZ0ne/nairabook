import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicRoutes from './publicRoutes';
import PrivateRoutes from './privateRoutes';
import Notfound from '../layout/globals/notfound';
import Home from '../layout/globals/home';
const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/auth/*" element={<PublicRoutes />} />
      <Route path="/profile/*" element={<PrivateRoutes />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default MainRoutes;
