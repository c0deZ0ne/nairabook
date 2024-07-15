import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import eyeIcon from '../../../assets/icons/eyeIcon.svg';
import { userLoginSchema } from '../../../validations';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../../ui-components/button';
import { loginCredentials } from '../../../types';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { useLoginMutation } from '../authApi';

const LoginForm = () => {
  const { isAuthenticated } = useSelector(
    (state: RootState) => state.persistUser,
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/profile/client/books');
    }
  }, [isAuthenticated, navigate]);

  const [showPassword, setShowPassword] = useState(false);
  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = async (values: loginCredentials) => {
    const credentials: loginCredentials = {
      username: values.username,
      password: values.password,
    };

    try {
      await login({ ...credentials }).unwrap();
    } catch (error) {}
  };

  const { values, handleBlur, touched, handleChange, handleSubmit, errors } =
    useFormik({
      initialValues: {
        username: '',
        password: '',
      },
      validationSchema: userLoginSchema,
      onSubmit,
    });

  return (
    <div className="flex flex-col items-center justify-center h-[450px] overflow-hidden">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-7 w-full max-w-md"
      >
        <span className="font-bold text-2xl leading-normal">Sign In</span>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col relative">
            <span>Email</span>
            <label className="text-sm w-full" htmlFor="username">
              <input
                className={`border focus:outline-none h-10 p-1 w-full ${
                  errors.username && touched.username
                    ? 'border-2 border-red-500'
                    : touched.username
                      ? 'border-2 border-green-500'
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
            <span className="text-red-500 text-xs">{errors?.username}</span>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col relative">
            <span>Password</span>
            <label
              className="text-sm w-full flex items-center"
              htmlFor="Password"
            >
              <input
                className={`border focus:outline-none h-10 p-1 w-full ${
                  errors.password && touched.password
                    ? 'border-2 border-red-500'
                    : touched.password
                      ? 'border-2 border-green-500'
                      : ''
                }`}
                type={showPassword ? 'text' : 'password'}
                id="Password"
                name="password"
                placeholder="Enter your password"
                onChange={handleChange}
                value={values.password}
                onBlur={handleBlur}
              />
              <img
                src={eyeIcon}
                alt="hidePassword"
                className="absolute right-2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            </label>
            <span className="text-red-500 text-xs">{errors?.password}</span>
          </div>
        </div>
        <div className="flex items-center font-normal">
          <input type="checkbox" className="mr-2" />
          <span className="leading-6">Keep me signed in</span>
        </div>

        <Button
          className={`bg-blue-600 h-10 w-full justify-center text-white ${
            isLoading ? 'cursor-wait opacity-50' : ''
          }`}
          props={{ type: 'submit', disabled: isLoading }}
          value="Sign In"
        />

        <div className="flex gap-[10px]">
          <Link
            to="/auth/forgot-password"
            className="text-black hover:text-blue-600 font-semibold leading-6"
          >
            Forgot Password?
          </Link>
          {'or'}
          <Link
            to="/auth/register"
            className="text-black hover:text-blue-600 font-semibold leading-6"
          >
            Create Account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
