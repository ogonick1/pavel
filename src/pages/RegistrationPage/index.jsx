import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import FieldInput from '../../components/FieldInput';
import PageTitle from '../../components/pageTitle';

import './index.scss';

const initialValues = {
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  repeatPassword: '',
};

const RegistrationPage = () => {
  const { t } = useTranslation();
  // eslint-disable-next-line no-console
  const onSubmit = values => console.log(JSON.stringify(values, null, 2));
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
        <PageTitle text={t('registration.title')} />
        <FieldInput name='email' text={t('form.email')} type='email' />
        <FieldInput name='firstName' text={t('form.firstName')} type='text' />
        <FieldInput name='lastName' text={t('form.lastName')} type='text' />
        <FieldInput name='password' text={t('form.password')} type='text' />
        <FieldInput name='repeatPassword' text={t('form.repeatPassword')} type='text' />
        <Button
          text={t('registration.title')}
          isSubmit
        />
        <Link className='link' to="/login">{t('loginPage.title')}</Link>
      </Form>
    </Formik>
  );
};

export default RegistrationPage;