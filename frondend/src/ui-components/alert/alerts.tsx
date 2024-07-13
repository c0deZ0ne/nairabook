import React from 'react';
import AuthPopUps from '../authPopUps';
import { AlertTypes } from '../../types';
import { openModal } from '../../features/modal/modalSlice';

export const AppError = (error: any) => {
  return openModal({
    element: (
      <AuthPopUps
        isTimed={4000}
        message={
          error?.error?.status == 'FETCH_ERROR'
            ? 'Please check your internet connection'
            : error.status == 500
              ? 'We ran into problem '
              : error?.message
                ? error?.message
                : error?.error?.message
                  ? error?.error?.message
                  : error?.error?.data?.message
                    ? error?.error?.data?.message
                    : error?.response?.data?.message
                      ? error?.response?.data?.message
                      : error?.data?.errors
                        ? `${Object.keys(error?.data?.errors)[0]} ${Object.values(error?.data?.errors)[0]} `
                        : 'unknown error occurred please try again'
        }
        statusType={AlertTypes.Error}
      />
    ),
  });
};

export const AppSuccess = ({
  message,
  isTimed,
  url,
}: {
  message: string;
  isTimed: number;
  url?: string;
}) => {
  return openModal({
    element: (
      <AuthPopUps
        isTimed={isTimed || 4000}
        message={message}
        statusType={AlertTypes.Success}
        url={url}
      />
    ),
  });
};
