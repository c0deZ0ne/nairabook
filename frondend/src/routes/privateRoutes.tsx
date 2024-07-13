/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { GuardedRoute } from './GuardRoute';
import UserClientLayout from '../layout/userLayout';
import Notfound from '../layout/globals/notfound';

import ChangePasswordForm from '../features/auth/changePassord/changePassword';
function PrivateRoutes() {
  return (
    <GuardedRoute>
      <Routes>
        <Route path={'client'} element={<UserClientLayout />}>
          {/* <Route path={'report'} element={<Report />} /> */}
          <Route path="change-password" element={<ChangePasswordForm />} />
          <Route path="*" element={<Notfound />} />
        </Route>

        <Route path="*" element={<Notfound />} />
      </Routes>
    </GuardedRoute>
  );
}

export default PrivateRoutes;
