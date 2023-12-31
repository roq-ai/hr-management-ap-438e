import * as yup from 'yup';

export const hrManagerValidationSchema = yup.object().shape({
  department: yup.string().required(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
