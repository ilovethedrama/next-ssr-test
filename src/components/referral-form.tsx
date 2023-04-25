import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Input from './input';
import styles from './referral-form.module.scss';
import Radio from './radio';
import RadioSelection from './radio-selection';
import { log } from 'console';
import { format } from 'date-fns';
import { Value } from 'react-calendar/dist/cjs/shared/types';

type IReferralFormInput = {
  firstName: string;
  lastName: string;
  title: string;
  gender: string;
  address: string;
  contactNumber: string;
  dateOfBirth: string;
  email: string;
  reasonForNEET: string;
  reasonForReferral: string;
};
export default function ReferralForm() {
  const { register, handleSubmit } = useForm<IReferralFormInput>();

  const handleLeSubmit = async (data: IReferralFormInput) => {
    console.log(
      JSON.stringify({
        ...data,
      }),
    );

    try {
      let response = await fetch('http://localhost:3000/api/postForm', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      });
      response = await response.json();
    } catch (errorMessage: any) {
      console.log(errorMessage);
    }
  };

  const onSubmit: SubmitHandler<IReferralFormInput> = data => {
    handleLeSubmit(data);
  };

  return (
    <>
      <h1>KEE Youth UK Referral Form</h1>
      <h2>Details of young person</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          labelText="First Name"
          labelType="firstName"
          register={register}
        />
        <Input labelText="Last Name" labelType="lastName" register={register} />
        <Input labelText="Email" register={register} labelType="email" />
        <Input
          labelText="Contact Number"
          labelType="contactNumber"
          register={register}
        />

        <label>
          Title:
          <select className={styles.selectInput} {...register('title')}>
            <option value="mr">Mr</option>
            <option value="mrs">Mrs</option>
            <option value="mx">Mx</option>
          </select>
        </label>
        <label>
          Gender:
          <select className={styles.selectInput} {...register('gender')}>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="non-binary">Non-binary</option>
            <option value="declineToState">Decline to state</option>
            <option value="other">Prefer to self describe</option>
          </select>
        </label>

        <h2>Details of person/professional making the referral</h2>
        <Input labelText="Name" labelType="referrerName" register={register} />
        <Input
          labelText="Relationship to Youth"
          labelType="relationshipToYouth"
          register={register}
        />
        <input type="submit" value="submit" />
      </form>
    </>
  );
}
