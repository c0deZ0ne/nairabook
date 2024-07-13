import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthLayout from '../layout/globals/authLayout';
import ForgotPasswordForm from '../features/auth/forgotPassword/forgotPasswordForm';
import ResetPasswordForm from '../features/auth/resetPassword/resetPasswordForm';
import Notfound from '../layout/globals/notfound';
import ChangePasswordForm from '../features/auth/changePassord/changePassword';
import LoginForm from '../features/auth/login/loginForm';
import RegisterForm from '../features/auth/register/register';

function PublicRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/forgot-password" element={<ForgotPasswordForm />} />
        <Route path="/change-password" element={<ChangePasswordForm />} />
        <Route path="/reset-password" element={<ResetPasswordForm />} />
      </Route>
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default PublicRoutes;
