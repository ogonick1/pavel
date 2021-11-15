import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup';
import './index.css';

const LoginPage = () => {
  return (
    <Formik
    initialValues = {{
        email: '',
        password: ''
    }}
    validationSchema = {Yup.object({
        email: Yup.string()
                .email('Неправильный email адрес')
                .required('Обязательное поле!'),
        password: Yup.string()
                .required('Обязательное поле!')

    })}
    onSubmit = {values => console.log(JSON.stringify(values, null, 2))}
    >
      <Form className='form'>
        <h2> Sing-In </h2>
      <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          type="email"
          />
        <ErrorMessage component="div" className="error" name="email"/>
        <label htmlFor="text">Password</label>
        <Field
          id="password"
          name="password"
          type="text"
          />
        <ErrorMessage component="div" className="error" name="password"/>
        <button type="submit">Sing-In</button>
      </Form>
      </Formik>
      
  );
}

export default LoginPage;