import React, { FC, ReactElement, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { logout } from '../features/auth/authSlice';

export const GuardedRoute: FC<{ children: ReactElement }> = ({ children }) => {
  const { isAuthenticated } = useSelector(
    (state: RootState) => state?.persistUser,
  );

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(logout({}));
      navigate('/auth/login');
    } else {
    }
  }, [location.pathname]);

  return <>{children}</>;
};
