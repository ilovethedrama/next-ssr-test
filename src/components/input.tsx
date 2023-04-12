import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './Input.module.scss';

export default function Input({
  labelText,
  labelType,
}: {
  labelText: string;
  labelType: string;
}) {
  const { register } = useForm();

  return (
    <div className={styles.container}>
      <label className={styles.label}>{labelText}:</label>
      <input className={styles.input} {...register(labelType)} />
    </div>
  );
}
