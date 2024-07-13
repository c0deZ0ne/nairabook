import React from 'react';
import { FormikValues, useFormik } from 'formik';
import { resetPasswordSchema } from '../../../validations';
import { Link } from 'react-router-dom';
import AuthPopUps from '../../../ui-components/authPopUps';
import { AlertTypes, IChangePasswordWithOtp } from '../../../types';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal } from '../../modal/modalSlice';
import { Button } from '../../../ui-components/button';
import {
  useChangePasswordWithOtpMutation,
  useRequestPasswordOtpMutation,
} from '../authApi';
import { RootState } from '../../../redux/store';
import { AppSuccess } from '../../../ui-components/alert/alerts';

function ResetPasswordForm() {
  const dispatch = useDispatch();
  const { userName, email } = useSelector(
    (state: RootState) => state.persistUser,
  );
  const [
    requestPasswordOtpMutation,
    {
      data: requestPasswordOtpData,
      error: requestPasswordOtpError,
      endpointName: requestPasswordOtpEndpoint,
      currentLoading: requestPasswordOtpLoading,
    },
  ] = useRequestPasswordOtpMutation('resetOtp' as any);
  const [changePasswordWithOtp, { data: res, err, endpoint, isLoading }] =
    useChangePasswordWithOtpMutation('resetPasswordOtp' as any);

  const onSubmit = async (values: FormikValues, actions: FormikValues) => {
    try {
      const credentials: IChangePasswordWithOtp = {
        username: userName || email,
        newPassword: values.NewPassword,
        token: values.resetCode,
      };
      const { data, message } = await changePasswordWithOtp({
        ...credentials,
      }).unwrap();
      dispatch(
        openModal({
          element: AuthPopUps({
            isTimed: 2000,
            message: message,
            statusType: AlertTypes.Warning,
            url: '/auth/login',
            btnValue: 'Please Login',
            handleClick: () => {
              dispatch(closeModal());
            },
          }),
        }),
      );
    } catch (error: any) {
      dispatch(
        openModal({
          element: AuthPopUps({
            isTimed: 2000,
            message: error.data.message,
            statusType: AlertTypes.Warning,
            url: '#',
            btnValue: 'Please Try Again',
            handleClick: () => {
              dispatch(closeModal());
            },
          }),
        }),
      );
    }
  };

  type IValues = {
    NewPassword: string;
    confirmPassword: string;
    resetCode: string;
  };
  const {
    values,
    handleBlur,
    touched,
    errors,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      NewPassword: '',
      confirmPassword: '',
      resetCode: '',
    } as IValues,
    validationSchema: resetPasswordSchema,
    onSubmit,
  });

  const handleReswndOtp = async () => {
    const credentials = {
      username: userName || email,
    };
    try {
      const { data, message } = await requestPasswordOtpMutation({
        ...credentials,
      }).unwrap();

      dispatch(AppSuccess(message || data?.message));
    } catch (error: any) {}
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={' flex  gap-y-[38px]  flex-col   '}
      >
        <div className={'flex flex-col '}>
          <span
            className={
              'font-[600] relative  font-["Open Sans"] mb-[10px] leading-normal  text-[24px] tracking-normal'
            }
          >
            {'Reset Password'}
          </span>

          <span
            className={
              'font-[600] relative  font-["Open Sans"] leading-normal w-[376px] text-[14px] tracking-normal text-Splenzert-gray-9'
            }
          >
            {'A code has been sent to your email.'}
          </span>
        </div>

        <div className={'flex  flex-col gap-y-5'}>
          <div className={'flex  flex-col gap-5'}>
            <div className={'flex flex-col relative items-start'}>
              <span>{'Enter Reset Code'}</span>
              <label className={'text-[12px] w-[100%]'} htmlFor="resetCode">
                <input
                  className={`border focus:outline-none h-[36px] flex w-[100%] p-1 ${errors.resetCode && touched.resetCode ? 'border-2 border-Splenzert-alert-light_red' : `${touched.resetCode ? ' border-Splenzert-alert-light_green' : ''}`}`}
                  type="text"
                  id="resetCode"
                  name="resetCode"
                  placeholder="Enter The Reset Code Sent To Your Email Address"
                  onChange={handleChange}
                  value={values.resetCode}
                  onBlur={handleBlur}
                />
              </label>
              <span className={'text-Splenzert-alert-red text-[0.7rem]'}>
                {errors?.resetCode}
              </span>
            </div>
          </div>
          <div className={'flex  flex-col gap-5'}>
            <div className={'flex flex-col relative items-start'}>
              <span>New Password</span>
              <label className={'text-[12px] w-[100%]'} htmlFor="NewPassword">
                <input
                  className={`border focus:outline-none h-[36px] flex w-[100%] p-1 ${errors.NewPassword && touched.NewPassword ? 'border-2 border-Splenzert-alert-light_red' : `${touched.NewPassword ? ' border-Splenzert-alert-light_green' : ''}`}`}
                  type="text"
                  id="NewPassword"
                  name="NewPassword"
                  placeholder="Enter A New Password"
                  onChange={handleChange}
                  value={values.NewPassword}
                  onBlur={handleBlur}
                />
              </label>
              <span className={'text-Splenzert-alert-red text-[0.7rem]'}>
                {errors?.NewPassword}
              </span>
            </div>
          </div>

          <div className={'flex  flex-col gap-5'}>
            <div className={'flex flex-col relative items-start'}>
              <span>Confirm Password</span>
              <label className={'text-[12px] w-[100%]'} htmlFor="confirm">
                <input
                  className={`border focus:outline-none h-[36px] flex w-[100%] p-1 ${errors.confirmPassword && touched.confirmPassword ? 'border-2border-Splenzert-alert-light_red' : `${touched.confirmPassword ? 'border-[2px] border-Splenzert-alert-light_green' : ''}`}`}
                  type="text"
                  id="confirm"
                  name="confirmPassword"
                  placeholder="Re-enter Your Password"
                  onChange={handleChange}
                  value={values.confirmPassword}
                  onBlur={handleBlur}
                />
              </label>
              <span className={'text-Splenzert-alert-red text-[0.7rem]'}>
                {errors?.confirmPassword}
              </span>
            </div>
          </div>
        </div>

        <div className={'flex flex-col items-center gap-y-4'}>
          <Button
            className={`bg-Splenzert-primary-combat_blue h-[40px] w-[372px] justify-center text-Splenzert-primary-white items-center ${isLoading || requestPasswordOtpLoading ? 'cursor-wait' : ''} ${isLoading || requestPasswordOtpLoading ? 'opacity-[0.5]' : ''}`}
            props={{ type: 'submit', disabled: isLoading }}
            value={'Reset Password'}
          />

          <Link
            to={'/auth/login'}
            aria-disabled={isLoading || requestPasswordOtpLoading}
            className={
              'text-[#000] hover:text-[#1E49E2] font-[400] self-center tracking-[0.28px] leading-[26px]'
            }
          >
            {'I remember my password'}
          </Link>
          <div>
            <span
              className={` hover:text-[#1E49E2] hover:text-[#1E49E2]cursor-pointer font-[Open Sans] font-[600] self-center tracking-[0.12px] leading-[26px] ${isLoading || requestPasswordOtpLoading ? ' cursor-wait' : 'cursor-pointer'}`}
              onClick={handleReswndOtp}
            >
              {'Re-send Code'}
            </span>
          </div>
        </div>
      </form>
    </>
  );
}

export default ResetPasswordForm;