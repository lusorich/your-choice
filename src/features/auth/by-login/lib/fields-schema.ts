import { isStringHasSpaceOrLineTranslations } from 'features/auth/lib/validation';
import * as z from 'zod';

const login = z
  .string()
  .min(3, { message: 'Логин должен содержать не менее 3 символов' })
  .max(15, { message: 'Логин должен быть не более 15 символов' })
  .refine((val) => !isStringHasSpaceOrLineTranslations(val), {
    message: 'Логин не может содержать пробелы',
  });

const password = z
  .string()
  .min(3, { message: 'Логин должен содержать не менее 3 символов' })
  .max(15, { message: 'Логин должен быть не более 15 символов' })
  .refine((val) => !isStringHasSpaceOrLineTranslations(val), {
    message: 'Логин не может содержать пробелы',
  });

const firstName = z
  .string()
  .min(1, { message: 'Введите ваше имя' })
  .max(30, { message: 'Проверьте корректность имени' })
  .refine((val) => !isStringHasSpaceOrLineTranslations(val), {
    message: 'Имя не может содержать пробелы',
  });

const lastName = z
  .string()
  .max(30, { message: 'Проверьте корректность отчества' })
  .refine((val) => !isStringHasSpaceOrLineTranslations(val), {
    message: 'Отчество не может содержать пробелы',
  });

const loginSchema = z.object({
  login,
  password,
});

const formSchema = z.object({
  firstName,
  lastName,
  login,
  password,
});

export { loginSchema, formSchema };
