import React from 'react';
import './index.scss';

const Button = (props) => {
  const {
    className,
    onClick,
    text,
    isSubmit = false,
  } = props;

  return (
    <button
      className={className}
      onClick={onClick}
      type={isSubmit ? 'submit' : 'button'}
    >
      {text}
    </button>
  );
};

export default Button;
