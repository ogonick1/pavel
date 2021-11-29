import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Button from '../../components/Button';
import FieldInput from '../../components/FieldInput';
import AuthService from '../../services/authService';
import {
  setEmail,
  setFirstName,
  setLastName,
  setPassword,
} from '../../plugins/store/actions';
import PageTitle from '../../components/pageTitle';

import './index.scss';

const initialValues = {
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  repeatPassword: '',
};

const RegistrationPage = (props) => {
  const {
    setEmail,
    setFirstName,
    setLastName,
    setPassword,
  } = props;

  const onSubmit = async (values) => {
    try {
      const result = await AuthService.registration(values);
      setEmail(result.email);
      setFirstName(result.firstName);
      setLastName(result.lastName);
      setPassword(result.password);

    } catch (error) {
      toast.error(error.data.message);
      toast.error(error.statusText);
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  const { t } = useTranslation();
  // eslint-disable-next-line no-console

  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t('validationErrors.email'))
      .required(t('validationErrors.required')),
    firstName: Yup.string()
      .required(t('validationErrors.required'))
      .min(3, t('validationErrors.minMaxLength', { min: 3, max: 16 }))
      .max(16, t('validationErrors.minMaxLength', { min: 3, max: 16 })),
    lastName: Yup.string()
      .required(t('validationErrors.required'))
      .min(3, t('validationErrors.minMaxLength', { min: 3, max: 16 }))
      .max(16, t('validationErrors.minMaxLength', { min: 3, max: 16 })),
    password: Yup.string()
      .required(t('validationErrors.required'))
      .min(4, t('validationErrors.minMaxLength', { min: 4, max: 16 }))
      .max(10, t('validationErrors.minMaxLength', { min: 4, max: 10 })),
    repeatPassword: Yup.string()
      .required(t('validationErrors.required'))
      .oneOf([Yup.ref('password')], t('validationErrors.repeatPassword')),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className='form'>
        <ToastContainer />
        <PageTitle text={t('registration.title')} />
        <FieldInput name='email' text={t('form.email')} type='email' />
        <FieldInput name='firstName' text={t('form.firstName')} type='text' />
        <FieldInput name='lastName' text={t('form.lastName')} type='text' />
        <FieldInput name='password' text={t('form.password')} type='text' />
        <FieldInput name='repeatPassword' text={t('form.repeatPassword')} type='text' />
        <Button
          className='btnsumbit'
          text={t('registration.title')}
          isSubmit
        />
        <Link className='link' to="/login">{t('loginPage.title')}</Link>
      </Form>
    </Formik>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setEmail: (email) => dispatch(setEmail(email)),
    setFirstName: (firstName) => dispatch(setFirstName(firstName)),
    setLastName: (lastName) => dispatch(setLastName(lastName)),
    setPassword: (password) => dispatch(setPassword(password)),
  };
};

export default connect(null, mapDispatchToProps)(RegistrationPage);
