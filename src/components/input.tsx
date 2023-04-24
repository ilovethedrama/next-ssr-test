import React from 'react';
import { UseFormRegister, useForm } from 'react-hook-form';
import styles from './Input.module.scss';
interface IReferralFormInput {
  firstName: string;
  lastName: string;
  title: string;
  gender: string;
  address: string;
  contactNumber: string;
  dateOfBirth: string;
}
export default function Input({
  labelText,
  labelType,
  register,
}: {
  labelText: string;
  labelType: string;
  register: any;
}) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{labelText}:</label>
      <input className={styles.input} {...register(labelType)} />
    </div>
  );
}
