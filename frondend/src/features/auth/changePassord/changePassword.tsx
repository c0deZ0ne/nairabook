import React, { useState } from 'react';
import { useFormik } from 'formik';
import { changePasswordSchema } from '../../../validations';
import AuthPopUps from '../../../ui-components/authPopUps';
import { AlertTypes, IchangePassword } from '../../../types';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal } from '../../modal/modalSlice';
import { Button } from '../../../ui-components/button';
import { useChangePasswordMutation } from '../authApi';
import { RootState } from '../../../redux/store';
import { resetAuth } from '../authSlice';

function ChangePasswordForm() {
  const { userName } = useSelector((state: RootState) => state.persistUser);
  const dispatch = useDispatch();
  const [changePassword, { data: response, error, endpointName, isLoading }] =
    useChangePasswordMutation('userLogin' as any);

  const onSubmit = async (values: IchangePassword) => {
    const credentials: IchangePassword = {
      username: userName,
      newPassword: values.newPassword,
      currentPassword: values.currentPassword,
    };

    try {
      await changePassword({
        ...credentials,
      }).unwrap();
    } catch (error: any) {}
  };

  type IValues = {
    confirmPassword: string;
    username: string;
    newPassword: string;
    currentPassword: string;
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
      newPassword: '',
      confirmPassword: '',
      currentPassword: '',
      username: userName,
    } as IValues,
    validationSchema: changePasswordSchema,
    onSubmit,
  });

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={' flex  gap-y-[20px]  flex-col    '}
      >
        <div className={'flex flex-col '}>
          <span
            className={
              'font-[600] relative  font-["Open Sans"]  leading-normal  text-[24px] tracking-normal'
            }
          >
            {'Reset Password'}
          </span>
        </div>

        <div className={'flex  flex-col gap-y-5'}>
          <div className={'flex  flex-col gap-5'}>
            <div className={'flex flex-col relative items-start'}>
              <span>{'Enter Current Password'}</span>
              <label
                className={'text-[12px] w-[100%]'}
                htmlFor="currentPassword"
              >
                <input
                  className={`border focus:outline-none h-[36px] flex w-[100%] p-1 ${errors.currentPassword && touched.currentPassword ? 'border-2 border-Splenzert-alert-light_red' : `${touched.currentPassword ? ' border-Splenzert-alert-light_green' : ''}`}`}
                  type="text"
                  id="currentPassword"
                  name="currentPassword"
                  placeholder="Please Provide Your Old Password"
                  onChange={handleChange}
                  value={values.currentPassword}
                  onBlur={handleBlur}
                />
              </label>
              <span className={'text-Splenzert-alert-red text-[0.7rem]'}>
                {errors?.currentPassword}
              </span>
            </div>
          </div>
          <div className={'flex  flex-col gap-5'}>
            <div className={'flex flex-col relative items-start'}>
              <span>New Password</span>
              <label className={'text-[12px] w-[100%]'} htmlFor="newPassword">
                <input
                  className={`border focus:outline-none h-[36px] flex w-[100%] p-1 ${errors.newPassword && touched.newPassword ? 'border-2 border-Splenzert-alert-light_red' : `${touched.newPassword ? ' border-Splenzert-alert-light_green' : ''}`}`}
                  type="text"
                  id="newPassword"
                  name="newPassword"
                  placeholder="Enter A New Password"
                  onChange={handleChange}
                  value={values.newPassword}
                  onBlur={handleBlur}
                />
              </label>
              <span className={'text-Splenzert-alert-red text-[0.7rem]'}>
                {errors?.newPassword}
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
                  placeholder="Re-Enter Your Password"
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
            className={`bg-Splenzert-primary-combat_blue h-[40px] w-[372px] justify-center text-Splenzert-primary-white items-center ${isLoading ? 'cursor-wait' : ''} ${isLoading ? 'opacity-[0.5]' : ''}`}
            props={{ type: 'submit', disabled: isLoading }}
            value={'Change Password'}
          />
        </div>
      </form>
    </>
  );
}

export default ChangePasswordForm;
