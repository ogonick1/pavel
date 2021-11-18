import React from 'react';
import {
  Formik, Form,
} from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './index.scss';
import FieldInput from '../../components/FieldInput';

const initialValues = {
  email: '',
  first_name: '',
  last_name: '',
  password: '',
  repeat_password: '',
};

const RegistrationPage = () => {
  const { t } = useTranslation();
  // eslint-disable-next-line no-console
  const onSubmit = values => console.log(JSON.stringify(values, null, 2));
  const validationSchema = Yup.object({
    email: Yup.string()
      .email(t('validation-errors.email'))
      .required(t('validation-errors.required')),
    first_name: Yup.string()
      .required(t('validation-errors.required'))
      .min(3, t('validation-errors.min'))
      .max(16, t('validation-errors.max')),
    last_name: Yup.string()
      .required(t('validation-errors.required'))
      .min(3, t('validation-errors.min'))
      .max(16, t('validation-errors.max')),
    password: Yup.string()
      .required(t('validation-errors.required'))
      .min(4, t('validation-errors.minpas'))
      .max(10, t('validation-errors.maxpas')),
    repeat_password: Yup.string()
      .required(t('validation-errors.required'))
      .oneOf([Yup.ref('password')], t('validation-errors.repeatpas')),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className='form'>
        <h2 className='login'>
          {t('registration.title')}
        </h2>
        <FieldInput name='email' text={t('form.email')} type='email' />
        <FieldInput name='first_name' text={t('form.first-name')} type='text' />
        <FieldInput name='last_name' text={t('form.last-name')} type='text' />
        <FieldInput name='password' text={t('form.password')} type='text' />
        <FieldInput name='repeat-password' text={t('form.repeat-pas')} type='text' />
        {/* <label htmlFor="first_name">{t('form.first-name')}</label>
        <Field
          id="first_name"
          name="first_name"
          type="text"
        />
        <ErrorMessage component="div" className="error" name="first_name" />
        <label htmlFor="last_name">{t('form.last-name')}</label>
        <Field
          id="last_name"
          name="last_name"
          type="text"
        />
        <ErrorMessage component="div" className="error" name="last_name" /> */}
        {/* <label htmlFor="text">{t('form.password')}</label>
        <Field
          id="password"
          name="password"
          type="text"
        />
        <ErrorMessage component="div" className="error" name="password" />
        <label htmlFor="text">{t('form.repeat-pas')}</label>
        <Field
          id="repeat_password"
          name="repeat_password"
          type="text"
        />
        <ErrorMessage component="div" className="error" name="repeat_password" /> */}
        <button className='btn-submit' type="submit">{t('registration.title')}</button>
        <Link className='link' to="/login">{t('login-page.title')}</Link>
      </Form>
    </Formik>
  );
};

export default RegistrationPage;