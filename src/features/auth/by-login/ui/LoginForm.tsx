import { Input } from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: '',
      password: '',
    },
  });
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="login"
        control={control}
        render={({ field }) => <Input {...field} />}
      />
      <input type="submit" />
    </form>
  );
};

export { LoginForm };
