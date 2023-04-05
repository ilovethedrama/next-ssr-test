import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IReferralFormInput {
  firstname: string;
  title: string;
}
export default function ReferralForm() {
  const { register, handleSubmit } = useForm<IReferralFormInput>();
  const onSubmit: SubmitHandler<IReferralFormInput> = data => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('firstname')} />
      <select {...register('title')}>
        <option value="mr">mr</option>
        <option value="mrs">mrs</option>
        <option value="mx">mx</option>
      </select>
    </form>
  );
}
