import { isStringHasSpaceOrLineTranslations } from 'features/auth/lib/validation';
import * as z from 'zod';

const schema = z.object({
  login: z
    .string()
    .min(3, { message: 'Логин должен содержать не менее 3 символов' })
    .max(15, { message: 'Логин должен быть не более 15 символов' })
    .refine((val) => !isStringHasSpaceOrLineTranslations(val), {
      message: 'Логин не может содержать пробелы',
    }),
  password: z
    .string()
    .min(5, { message: 'Вы ввели неверный пароль' })
    .max(30, { message: 'Вы ввели неверный пароль' })
    .refine((val) => !isStringHasSpaceOrLineTranslations(val), {
      message: 'Пароль не может содержать пробелы',
    }),
});

export { schema };
