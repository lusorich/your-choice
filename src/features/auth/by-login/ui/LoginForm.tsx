import {
  Alert, Box, Button, Input, styled,
} from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../lib/fields-schema';
import { LoginFormFields } from '../lib/types';

const FormFieldWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const FormWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
}));

const FormAlertField = styled(Alert)(() => ({
  padding: '0 1rem',
  border: 0,
}));

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
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = (data: LoginFormFields) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormWrapper>
        <Controller
          name="login"
          control={control}
          render={({ field }) => (
            <FormFieldWrapper>
              <Input {...field} placeholder="Введите имя пользователя" />
              {errors.login && (
              <FormAlertField variant="outlined" severity="error">
                {errors.login.message}
              </FormAlertField>
              )}
            </FormFieldWrapper>
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <FormFieldWrapper>
              <Input {...field} placeholder="Введите пароль" type="password" />
              {errors.password && (
              <FormAlertField variant="outlined" severity="error">
                {errors.password.message}
              </FormAlertField>
              )}
            </FormFieldWrapper>
          )}
        />
        <Button variant="outlined" size="medium" type="submit">
          Войти
        </Button>
      </FormWrapper>
    </form>
  );
};

export { LoginForm };
