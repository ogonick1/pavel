import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import FieldInput from '../../components/FieldInput';
import AuthService from '../../services/authService';
import { setToken, setProfile } from '../../plugins/store/actions';

import './index.scss';

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
      .email(t('validationErrors.email'))
      .required(t('validationErrors.required')),
    password: Yup.string()
      .required(t('validationErrors.required')),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {/* // TODO лабел вынести */}
      <Form className='form'>
        <h2 className='login'>
          {t('loginPage.title')}
        </h2>
        <FieldInput name='email' text={t('form.email')} type='email' />
        <FieldInput name='password' text={t('form.password')} type='text' />
        <Button
          text={t('loginPage.title')}
          isSubmit
        />
        <Link
          className='link'
          to="/registration"
        >
          {t('registration.title')}
        </Link>
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
