import { Box, Input } from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  login: z
    .string()
    .min(3, { message: 'Логин должен содержать не менее 3 символов' })
    .max(15, { message: 'Логин должен быть не более 15 символов' }),
  password: z
    .string()
    .min(5, { message: 'Вы ввели неверный пароль' })
    .regex(
      /'.*[`~<>?,.!@#$%^&*()-_+="'|{};:].*/,
      'One special character',
    )
    .max(30, { message: 'Вы ввели неверный пароль' }),
});

const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: '',
      password: '',
    },
    resolver: zodResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="login"
        control={control}
        render={({ field }) => (
          <Box>
            <Input {...field} placeholder="Введите имя пользователя" />
            {errors.login && errors.login.message}
          </Box>
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <Input {...field} placeholder="Введите пароль" type="password" />
        )}
      />
      <input type="submit" />
    </form>
  );
};

export { LoginForm };
