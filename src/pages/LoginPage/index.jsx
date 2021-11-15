import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { connect } from 'react-redux';
import AuthService from '../../services/authService';
import { setToken, setProfile } from '../../plugins/store/actions';
import './index.css';

const initialValues = {
  email: '',
  password: ''
};

const LoginPage = (props) => {
  const {
    setToken,
    setProfile,
  } = props;
  const onSubmit = async (values) => {
    try {
      console.log(123);
      const result = await AuthService.login(values);
      setToken(result.token);
      setProfile(result.user);
      console.log(result)

    } catch (error) {
      console.log(error);
    }
  }
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Неправильный email адрес')
      .required('Обязательное поле!'),
    password: Yup.string()
      .required('Обязательное поле!')
  });
  
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >

      <Form className='form'>
        <h2> Sing-In </h2>
        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          type="email"
        />
        <ErrorMessage component="div" className="error" name="email" />
        <label htmlFor="text">Password</label>
        <Field
          id="password"
          name="password"
          type="text"
        />
        <ErrorMessage component="div" className="error" name="password" />
        <button type="submit">Sing-In</button>
      </Form>
    </Formik>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (token) => dispatch(setToken(token)),
    setProfile: (profile) => dispatch(setProfile(profile)),
  }
};

export default connect(null, mapDispatchToProps)(LoginPage);
