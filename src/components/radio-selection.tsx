import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './radio-selection.module.scss';
import Radio from './radio';

export default function RadioSelection({
  labelTitle,
  radioOptions,
}: {
  labelTitle: string;
  radioOptions: string[];
}) {
  const { register } = useForm();
  const onChangeHandler = () => {};

  return (
    <div onChange={onChangeHandler} className={styles.container}>
      <h3 className={styles.heading}>{labelTitle}</h3>
      {radioOptions.map((options, index) => (
        <Radio
          key={`dadad${options + index}`}
          labelText={options}
          labelType={'radio'}
          onChangeHandler={onChangeHandler}
        />
      ))}
    </div>
  );
}
