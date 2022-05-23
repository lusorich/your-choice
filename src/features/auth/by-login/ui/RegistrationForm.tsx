import {
  Alert, Box, Button, Input, styled,
} from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from '../lib/fields-schema';
import { RegistrationFormFields } from '../lib/types';

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

const RegistrationForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      login: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
  });
  const onSubmit = (data: RegistrationFormFields) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormWrapper>
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => (
            <FormFieldWrapper>
              <Input {...field} placeholder="Введите ваше имя" />
              {errors.firstName && (
                <FormAlertField variant="outlined" severity="error">
                  {errors.firstName.message}
                </FormAlertField>
              )}
            </FormFieldWrapper>
          )}
        />
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => (
            <FormFieldWrapper>
              <Input {...field} placeholder="Введите вашу фамилию" />
              {errors.lastName && (
                <FormAlertField variant="outlined" severity="error">
                  {errors.lastName.message}
                </FormAlertField>
              )}
            </FormFieldWrapper>
          )}
        />
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
          Зарегистрироваться
        </Button>
      </FormWrapper>
    </form>
  );
};

export { RegistrationForm };
