import React, { FC, ReactElement, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { closeModal, openModal } from '../features/modal/modalSlice';
import { AlertTypes, SystemRoles } from '../types';
import AuthPopUps from '../ui-components/authPopUps';
import { logout } from '../features/auth/authSlice';
import { AppError } from '../ui-components/alert/alerts';

export const GuardedRoute: FC<{ children: ReactElement }> = ({ children }) => {
  const {
    isChangePasswordRequired,
    isAuthenticated,
    isUpdatedRequired,
    currentRole,
  } = useSelector((state: RootState) => state?.persistUser);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(logout({}));
      navigate('/auth/login');
    } else if (isChangePasswordRequired) {
      dispatch(
        openModal({
          element: AuthPopUps({
            isTimed: 2000,
            message: 'Please Change Your Password',
            statusType: AlertTypes.Warning,
            url: '/auth/change-password',
            btnValue: 'Change Password',
            handleClick: () => {
              dispatch(closeModal());
            },
          }),
        }),
      );
    } else {
      if (
        currentRole == SystemRoles.SuperAdmin ||
        currentRole == SystemRoles.Administrator
      ) {
        if (isUpdatedRequired) return navigate('/profile/admin/user');

        if (location.pathname.includes('client'))
          return navigate('/profile/admin/analytics');
      } else {
        if (isUpdatedRequired) {
          dispatch(
            AppError({ message: 'Please save changes before leaving ' }),
          );
          return navigate('/profile/client/user');
        }
        if (location.pathname.includes('admin'))
          return navigate('/profile/client/overview');
      }
    }
  }, [location.pathname]);

  return <>{children}</>;
};
