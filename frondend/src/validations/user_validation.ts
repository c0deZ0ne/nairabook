import * as yup from 'yup';
export const registerUserSchema = yup.object().shape({
  name: yup.string().required('please provide your name'),
  email: yup.string().email().required('Please provide valid email'),
  password: yup.string().min(4).max(10).required('Provide stronger password'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
});
