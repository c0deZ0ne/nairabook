import * as yup from 'yup';
export const userLoginSchema = yup.object().shape({
  username: yup.string().email().required('Please provide valid email'),
  password: yup
    .string()
    .min(4)
    .required('password must be at least 4 characters '),
});

export const resetPasswordSchema = yup.object().shape({
  resetCode: yup.string().required('please provide OTP'),
  NewPassword: yup.string().min(4).required('Provide stronger password'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('NewPassword')], 'Passwords must match')
    .required('Please confirm your password'),
});
export const forgotPasswordSchema = yup.object().shape({
  username: yup
    .string()
    .email('please provide valid email address')
    .required('please provide email'),
});

export const changePasswordSchema = yup.object().shape({
  currentPassword: yup.string().required('Please provide the current password'),
  newPassword: yup
    .string()
    .min(8, 'Password must be at least 8 characters in length')
    .matches(/[A-Za-z]/, 'Password must contain at least one alphabet')
    .matches(/\d/, 'Password must contain at least one digit')
    .matches(
      /[@$!%*#?&]/,
      'Password must contain at least one special character from @$!%*#?&',
    )
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .required('Please provide a stronger password'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('newPassword')], 'Passwords must match')
    .required('Please confirm your password'),
});

export const employeeSchema = yup.object({
  id: yup.number(),
  firstName: yup.string().required('This field is required'),
  // middleName: yup.string().required('This field is required'),
  lastName: yup.string().required('This field is required'),
  email: yup
    .string()
    .required('This field is required')
    .email('invalid email format'),
  // phoneNumber: yup.string(),
  country: yup.string().required('This field is required'),
  SubsidiaryId: yup.number(),

  supervisorEmail: yup
    .string()
    .required('This field is required')
    .email('invalid email format'),
  department: yup.string().required('This field is required'),
  jobTitle: yup.string().required('This field is required'),
  // taxIDs: yup.array().required('This field is required'),
  address: yup.string().required('This field is required'),
  // roleIDs: yup.array().required('This field is required'),
});

export const subSidiarySchema = yup.object({
  companyName: yup.string().required('This field is required'),
  taxIDNumber: yup.string().required('This field is required'),
  address: yup.string().required('This field is required'),

  country: yup.string().required('This field is required'),
  state: yup.string().required('This field is required'),
  industry: yup.string().required('This field is required'),
  functionalCurrency: yup.string().required('This field is required'),
  finStartDate: yup.string(),
  // finEndDate: yup.string().required('This field is required'),
  companyEmail: yup.string().email('invalid email format'),
});

export const entityCompleteSchema = yup.object({
  companyName: yup.string().required('This field is required'),
  taxIDNumber: yup.string().required('This field is required'),
  address: yup.string().required('This field is required'),

  country: yup.string().required('This field is required'),
  state: yup.string().required('This field is required'),
  industry: yup.string(),

  functionalCurrency: yup.string().required('This field is required'),
  // finStartDate: yup.string().required('This field is required'),
  // finEndDate: yup.string().required('This field is required'),
  relatedPartyTrans: yup.array().of(
    yup.object().shape({
      controlledTransaction: yup.string(),
      currency: yup.string(),
      counterParty: yup.string(),
      filingJurisdiction: yup.string(),
    }),
  ),
});

export const companySchema = yup.object({
  companyName: yup.string().required('This field is required'),

  address: yup.string().required('This field is required'),
  country: yup.string().required('This field is required'),
  isGroup: yup.string().required('This field is required'),
});

export const superAdminUserSchema = yup.object({
  firstName: yup.string().required('This field is required'),
  email: yup
    .string()
    .required('This field is required')
    .email('invalid email format'),
  lastName: yup.string().required('This field is required'),

  clientId: yup.number().required('This field is required'),
  jobTitle: yup.string().required('This field is required'),
  department: yup.string().required('This field is required'),
});

export const taxFormSchema = yup.object({
  taxName: yup.string().required('This field is required'),
  description: yup.string().required('This field is required'),
  mnemonic: yup.string().required('This field is required'),
  pseudoMnemonic: yup.string().required('This field is required'),
  regulation: yup.string().required('This field is required'),
  filingPeriod: yup.string().required('This field is required'),
  computation: yup.string().required('This field is required'),
  dueDate: yup.string().required('This field is required'),
  jurisdiction: yup.string().required('This field is required'),
  requiredData: yup.array().of(
    yup.object().shape({
      id: yup.number(),
      data: yup.string(),
    }),
  ),
  requiredDocument: yup.array().of(
    yup.object().shape({
      id: yup.number(),
      document: yup.string().required('This field is required'),
    }),
  ),
});

export const taxDashboardSchema = yup.object({
  id: yup.number(),
  tax: yup.string().required('This field is required'),
  taxName: yup.string().required('This field is required'),
  mnemonic: yup.string().required('This field is required'),

  savedData: yup.array().of(
    yup.object().shape({
      savedData: yup.string().required('This field is required'),
      ordering: yup.string().required('This field is required'),
    }),
  ),
  computedData: yup.array().of(
    yup.object().shape({
      id: yup.number(),
      title: yup.string().required('This field is required'),
      numerator: yup.string().required('This field is required'),
      donominator: yup.string().required('This field is required'),
    }),
  ),
});
export const validationFileSchema = yup.object().shape({
  file: yup.mixed().required('Please select a file to upload.'),
});
