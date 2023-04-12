import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Calendar from 'react-calendar';
import Input from './input';
import styles from './referral-form.module.scss';
import Radio from './radio';

interface IReferralFormInput {
  firstName: string;
  lastName: string;
  title: string;
  gender: string;
  address: string;
  contactNumber: string;
}
export default function ReferralForm() {
  const { register, handleSubmit } = useForm<IReferralFormInput>();
  const onSubmit: SubmitHandler<IReferralFormInput> = data => {
    console.log(data);
  };

  const onChangeHandler = () => {};

  return (
    <>
      <h2>Referral Form</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input labelText="First Name" labelType="firstName" />
        <Input labelText="Last Name" labelType="lastName" />
        <Input labelText="Email" labelType="email" />
        <Input labelText="Contact Number" labelType="contactNumber" />

        <label>
          Title:
          <select className={styles.selectInput} {...register('title')}>
            <option value="mr">Mr</option>
            <option value="mrs">Mrs</option>
            <option value="mx">Mx</option>
          </select>
        </label>
        <label>
          Date of birth:
          <Calendar />
        </label>
        <label>
          Gender:
          <select className={styles.selectInput} {...register('gender')}>
            <option value="mr">Female</option>
            <option value="mrs">Male</option>
            <option value="mx">Non-binary</option>
            <option value="mx">Decline to state</option>
            <option value="mx">Prefer to self describe</option>
          </select>
        </label>
        <label>
          Address:
          <textarea {...register('address')} />
        </label>
        <label>
          Does the young person have a SEND statement:
          <Radio
            labelText={'No'}
            labelType={'radio'}
            onChangeHandler={onChangeHandler}
          />
          <Radio
            labelText={'Yes'}
            labelType={'radio'}
            onChangeHandler={onChangeHandler}
          />
        </label>
      </form>
    </>
  );
}
