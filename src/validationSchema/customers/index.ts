import * as yup from 'yup';

export const customerValidationSchema = yup.object().shape({
  purchase_history: yup.string().nullable(),
  company_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
