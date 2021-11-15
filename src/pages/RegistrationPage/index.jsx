import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import './index.css';

const RegistrationPage = () => {
  return (
    <Formik
      initialValues={{
        email: '',
        first_name: '',
        last_name: '',
        password: '',
        repeat_password: ''
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Неправильный email адрес')
          .required('Обязательное поле!'),
        first_name: Yup.string()
          .required('обязательное поле!')
          .min(3, 'минимум три символа')
          .max(16, 'максимум 16 символов'),
        last_name: Yup.string()
          .required('Обязательное поле!')
          .min(3, 'минимум 3 символа')
          .max(16, 'максимум 16 символов'),
        password: Yup.string()
          .required('Обязательное поле!')
          .min(4, 'минимум 4 символа')
          .max(10, 'максимум 10 символов'),
        repeat_password: Yup.string()
          .required('Обязательное поле!')
          .oneOf([Yup.ref('password')], 'Пароли не совпадают')
      })}
      onSubmit={values => console.log(JSON.stringify(values, null, 2))}
    >
      <Form className='form'>
        <h2> Registration </h2>
        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          type="email"
        />
        <ErrorMessage component="div" className="error" name="email" />
        <label htmlFor="first_name">First Name</label>
        <Field
          id="first_name"
          name="first_name"
          type="text"
        />
        <ErrorMessage component="div" className="error" name="first_name" />
        <label htmlFor="last_name">last Name</label>
        <Field
          id="last_name"
          name="last_name"
          type="text"
        />
        <ErrorMessage component="div" className="error" name="last_name" />
        <label htmlFor="text">Password</label>
        <Field
          id="password"
          name="password"
          type="text"
        />
        <ErrorMessage component="div" className="error" name="password" />
        <label htmlFor="text">Repeat password</label>
        <Field
          id="repeat_password"
          name="repeat_password"
          type="text"
        />
        <ErrorMessage component="div" className="error" name="repeat_password" />
        <button type="submit">Registration</button>
      </Form>
    </Formik>
  );
}

export default RegistrationPage;