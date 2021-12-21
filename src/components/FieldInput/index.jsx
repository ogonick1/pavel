/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Field, ErrorMessage } from 'formik';
import './index.scss';

const FieldInput = (props) => {
  const {
    name,
    text,
    type,
    inputRef,
  } = props;

  return (
    <>
      <label
        className='filed-input__label'
        htmlFor={name}
      >
        {text}
      </label>
      <Field
        innerRef={inputRef}
        className='filed-input__input'
        id={name}
        name={name}
        type={type}
      />
      <ErrorMessage
        component="div"
        className="filed-input__error"
        name={name}
      />
    </>
  );
};

export default FieldInput;
