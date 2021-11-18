import React from 'react';
import './index.scss';

const Button = (props) => {
  const {
    onClick,
    text,
    isSubmit = false,
  } = props;

  return (
    <button
      className='btn-submit'
      onClick={onClick}
      type={isSubmit ? 'submit' : 'button'}
    >
      {text}
    </button>
  );
};

export default Button;
