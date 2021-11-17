import React from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import AuthService from '../../services/authService';
import { setToken, setProfile } from '../../plugins/store/actions';
import './index.css';

const initialValues = {
  email: '',
  password: '',
};

const LoginPage = (props) => {
  const {
    setToken,
    setProfile,
  } = props;
  const { t } = useTranslation();
  const onSubmit = async (values) => {
    try {
      const result = await AuthService.login(values);
      setToken(result.token);
      setProfile(result.user);

    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t('validation-errors.email'))
      .required(t('validation-errors.required')),
    password: Yup.string()
      .required(t('validation-errors.required')),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >

      <Form className='form'>
        <h2>
          {t('login-page.title')}
        </h2>
        <label htmlFor="email">{t('form.email')}</label>
        <Field
          id="email"
          name="email"
          type="email"
        />
        <ErrorMessage component="div" className="error" name="email" />
        <label htmlFor="text">{t('form.password')}</label>
        <Field
          id="password"
          name="password"
          type="text"
        />
        <ErrorMessage component="div" className="error" name="password" />
        <button type="submit">{t('login-page.title')}</button>
      </Form>
    </Formik>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setToken: (token) => dispatch(setToken(token)),
    setProfile: (profile) => dispatch(setProfile(profile)),
  };
};

export default connect(null, mapDispatchToProps)(LoginPage);
