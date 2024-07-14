/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { GuardedRoute } from './GuardRoute';
import UserClientLayout from '../layout/userLayout';
import Notfound from '../layout/globals/notfound';

import ChangePasswordForm from '../features/auth/changePassord/changePassword';
import Book from '../features/author/book/book';
function PrivateRoutes() {
  return (
    <GuardedRoute>
      <Routes>
        <Route path={'client'} element={<UserClientLayout />}>

          <Route path="books" element={<Book />} />
          <Route path="change-password" element={<ChangePasswordForm />} />
          <Route path="*" element={<Notfound />} />
        </Route>

        <Route path="*" element={<Notfound />} />
      </Routes>
    </GuardedRoute>
  );
}

export default PrivateRoutes;
