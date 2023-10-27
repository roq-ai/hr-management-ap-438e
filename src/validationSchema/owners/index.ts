import * as yup from 'yup';

export const ownerValidationSchema = yup.object().shape({
  ownership_percentage: yup.number().integer().nullable(),
  company_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
