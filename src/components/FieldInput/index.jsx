import React from 'react';
import { Field, ErrorMessage } from 'formik';
import './index.scss';

const FieldInput = (props) => {
  const {
    name,
    text,
    type,
  } = props;

  return (
    <>
      <label className='text' htmlFor={name}>{text}</label>
      <Field
        className='input'
        id={name}
        name={name}
        type={type}
      />
      <ErrorMessage component="div" className="error" name={name} />
    </>
  );
};

export default FieldInput;
