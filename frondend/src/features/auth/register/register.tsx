import React from 'react';
import { FormikValues, useFormik } from 'formik';
import { registerUserSchema } from '../../../validations';
import { Button } from '../../../ui-components/button';

function RegisterForm() {
  const onSubmit = async (values: FormikValues, actions: FormikValues) => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    actions.resetForm();
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
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: registerUserSchema,
    onSubmit,
  });

  return (
    <div className="flex flex-col items-center justify-center max-h-[450px] overflow-hidden overflow-y-auto">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-7 w-full max-w-md"
      >
        <div className="flex flex-col gap-5">
          <div className="flex flex-col relative">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <input
              className={`border focus:outline-none h-10 p-2 w-full ${
                errors.name && touched.name
                  ? 'border-2 border-red-500'
                  : touched.name
                    ? 'border-2 border-green-500'
                    : ''
              }`}
              type="text"
              id="name"
              name="name"
              placeholder="Please enter your name"
              onChange={handleChange}
              value={values.name}
              onBlur={handleBlur}
            />
            <span className="text-red-500 text-xs">{errors.name}</span>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col relative">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              className={`border focus:outline-none h-10 p-2 w-full ${
                errors.email && touched.email
                  ? 'border-2 border-red-500'
                  : touched.email
                    ? 'border-2 border-green-500'
                    : ''
              }`}
              type="text"
              id="email"
              name="email"
              placeholder="Please enter your email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
            />
            <span className="text-red-500 text-xs">{errors.email}</span>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col relative">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <input
              className={`border focus:outline-none h-10 p-2 w-full ${
                errors.password && touched.password
                  ? 'border-2 border-red-500'
                  : touched.password
                    ? 'border-2 border-green-500'
                    : ''
              }`}
              type="password"
              id="password"
              name="password"
              placeholder="Please enter your password"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
            />
            <span className="text-red-500 text-xs">{errors.password}</span>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col relative">
            <label htmlFor="confirmPassword" className="text-sm font-medium">
              Confirm Password
            </label>
            <input
              className={`border focus:outline-none h-10 p-2 w-full ${
                errors.confirmPassword && touched.confirmPassword
                  ? 'border-2 border-red-500'
                  : touched.confirmPassword
                    ? 'border-2 border-green-500'
                    : ''
              }`}
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Enter same password"
              onChange={handleChange}
              value={values.confirmPassword}
              onBlur={handleBlur}
            />
            <span className="text-red-500 text-xs">
              {errors.confirmPassword}
            </span>
          </div>
        </div>
        <Button
          className={`bg-blue-600 h-10 text-white flex justify-center items-center ${
            isSubmitting ? 'cursor-wait opacity-50' : ''
          }`}
          props={{ type: 'submit', disabled: isSubmitting }}
          value="Create Account"
        />
      </form>
    </div>
  );
}

export default RegisterForm;
