import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './radio.module.scss';

export default function Radio({
  labelText,
  labelType,
  onChangeHandler,
}: {
  labelText: string;
  labelType: string;
  onChangeHandler: () => void;
}) {
  const { register } = useForm();

  return (
    <div onChange={onChangeHandler} className={styles.container}>
      <label className={styles.label}>{labelText}:</label>
      <input
        type="radio"
        value="yes"
        className={styles.radio}
        {...register(labelType)}
      />
    </div>
  );
}
