// import React from 'react';
// import { useFormik } from 'formik';
// import { forgotPasswordSchema } from '../../../validations';
// import { Link } from 'react-router-dom';
// import { IAuthenticatedUser, IPasswordRequestOtp } from '../../../types';
// import { useDispatch } from 'react-redux';
// import { Button } from '../../../ui-components/button';
// import { useRequestPasswordOtpMutation } from '../authApi';
// import { setUser } from '../authSlice';
// import { AppSuccess } from '../../../ui-components/alert/alerts';
// function ForgotPasswordForm() {
//   const [
//     requestPasswordOtp,
//     { data: response, error, endpointName, isLoading },
//   ] = useRequestPasswordOtpMutation('resetOtp' as any);
//   const dispatch = useDispatch();
//   const onSubmit = async (values: IPasswordRequestOtp) => {
//     const credentials: IPasswordRequestOtp = {
//       username: values.username,
//     };

//     try {
//       const { data, message } = await requestPasswordOtp({
//         ...credentials,
//       }).unwrap();
//       dispatch(
//         setUser({
//           userName: credentials.username,
//           email: credentials.username,
//         } as IAuthenticatedUser),
//       );
//       dispatch(AppSuccess(message || data?.message));
//     } catch (error: any) {}
//   };
//   type IValues = {
//     username: string;
//   };
//   const {
//     values,
//     handleBlur,
//     touched,
//     errors,
//     handleChange,
//     handleSubmit,
//     isSubmitting,
//   } = useFormik({
//     initialValues: {
//       username: '',
//     } as IValues,
//     validationSchema: forgotPasswordSchema,
//     onSubmit,
//   });

//   return (
//     <>
//       <form
//         onSubmit={handleSubmit}
//         className={' flex  gap-y-[38px]  flex-col bg-green-400 px-[20px] w-[100%]  '}
//       >
//         <div className={'flex flex-col self-center bg-red-400 justify-start relative'}>
//           <span
//             className={
//               'font-[600] relative   font-["Open Sans"] mb-[10px] leading-normal  text-[24px] tracking-normal'
//             }
//           >
//             {'Forgot Password'}
//           </span>

//           <span
//             className={
//               'font-[600] relative  font-["Open Sans"] leading-normal w-[376px] text-[14px] tracking-normal text-Splenzert-gray-9 '
//             }
//           >
//             {
//               'A code will be sent to the email provided. This code will be used to reset your account password.'
//             }
//           </span>
//         </div>

//         <div className={'flex  flex-col gap-y-4'}>
//           <div className={'flex flex-col relative items-center'}>
//             <label className={'text-[14px] w-[372px]'} htmlFor="email">
//               <span>Email</span>
//               <input
//                 className={`border focus:outline-none h-[36px] relative flex w-[372px] p-2 mt-[5px]  ${errors.username && touched.username ? 'border-2 border-Splenzert-alert-light_red' : `${touched.username ? 'border-[2px] border-Splenzert-alert-light_green' : ''}`}`}
//                 type="text"
//                 id="username"
//                 name="username"
//                 placeholder="Enter your company’s email address"
//                 onChange={handleChange}
//                 value={values.username}
//                 onBlur={handleBlur}
//               />
//             </label>
//             <span className={' text-Splenzert-alert-red text-[0.7rem]'}>
//               {errors?.username}
//             </span>
//           </div>
//         </div>
//         <div className={'flex flex-col items-center gap-y-4'}>
//           <Button
//             className={`bg-Splenzert-primary-combat_blue h-[40px] w-[372px] justify-center text-Splenzert-primary-white items-center ${isLoading ? 'cursor-wait' : ''} ${isLoading ? 'opacity-[0.5]' : ''}`}
//             props={{ type: 'submit', disabled: isLoading }}
//             value={'Continue'}
//           />

//           <div
//             aria-disabled={isLoading}
//             className={`${isLoading ? 'disabled' : ''}`}
//           >
//             <Link
//               to={'/auth/login'}
//               className={`text-[#000] hover:text-[#1E49E2] font-[400] self-center tracking-[0.28px] leading-[26px] ${isLoading ? 'disabled' : ''}`}
//             >
//               {'I remember my password'}
//             </Link>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// }

// export default ForgotPasswordForm;

import React from 'react';
import { useFormik } from 'formik';
import { forgotPasswordSchema } from '../../../validations';
import { Link } from 'react-router-dom';
import { IAuthenticatedUser, IPasswordRequestOtp } from '../../../types';
import { useDispatch } from 'react-redux';
import { Button } from '../../../ui-components/button';
import { useRequestPasswordOtpMutation } from '../authApi';
import { setUser } from '../authSlice';
import { AppSuccess } from '../../../ui-components/alert/alerts';

function ForgotPasswordForm() {
  const [
    requestPasswordOtp,
    { data: response, error, endpointName, isLoading },
  ] = useRequestPasswordOtpMutation('resetOtp' as any);
  const dispatch = useDispatch();

  const onSubmit = async (values: IPasswordRequestOtp) => {
    const credentials: IPasswordRequestOtp = {
      username: values.username,
    };

    try {
      const { data, message } = await requestPasswordOtp({
        ...credentials,
      }).unwrap();
      dispatch(
        setUser({
          userName: credentials.username,
          email: credentials.username,
        } as IAuthenticatedUser),
      );
      dispatch(AppSuccess(message || data?.message));
    } catch (error: any) {}
  };

  type IValues = {
    username: string;
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
      username: '',
    } as IValues,
    validationSchema: forgotPasswordSchema,
    onSubmit,
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-y-8  px-4 w-full max-w-md mx-auto"
    >
      <div className="flex flex-col self-center  justify-start relative text-center">
        <span className="font-semibold mb-2 text-2xl">Forgot Password</span>
        <span className="font-medium text-[13px] text-Splenzert-gray-9">
          A code will be sent to the email provided. This code will be used to
          reset your account password.
        </span>
      </div>

      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col relative">
          <label className="text-sm w-full" htmlFor="email">
            <span>Email</span>
            <input
              className={`border focus:outline-none h-9 w-full p-2 mt-1 ${
                errors.username && touched.username
                  ? 'border-2 border-Splenzert-alert-light_red'
                  : touched.username
                    ? 'border-2 border-Splenzert-alert-light_green'
                    : ''
              }`}
              type="text"
              id="username"
              name="username"
              placeholder="Enter your company’s email address"
              onChange={handleChange}
              value={values.username}
              onBlur={handleBlur}
            />
          </label>
          <span className="text-Splenzert-alert-red text-xs mt-1">
            {errors?.username}
          </span>
        </div>
      </div>

      <div className="flex flex-col  gap-y-4">
        <Button
          className={`bg-Splenzert-primary-combat_blue h-10 w-full max-w-xs justify-center text-Splenzert-primary-white ${
            isLoading ? 'cursor-wait opacity-50' : ''
          }`}
          props={{ type: 'submit', disabled: isLoading }}
          value="Continue"
        />

        <div
          aria-disabled={isLoading}
          className={isLoading ? 'opacity-50' : ''}
        >
          <Link
            to="/auth/login"
            className="text-black hover:text-blue-700 font-normal tracking-wide leading-6"
          >
            I remember my password
          </Link>
        </div>
      </div>
    </form>
  );
}

export default ForgotPasswordForm;
