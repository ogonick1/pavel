import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../../components/Button';
import FieldInput from '../../components/FieldInput';
import AuthService from '../../services/authService';
import { setToken, setProfile } from '../../plugins/store/actions';
import PageTitle from '../../components/pageTitle';

import './index.scss';

const initialValues = {
  email: '',
  password: '',
};

const LoginPage = (props) => {
  const notify = (text) => toast(text);

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
      notify('error mesage');
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
        <PageTitle text={t('loginPage.title')} />
        <FieldInput name='email' text={t('form.email')} type='email' />
        <FieldInput name='password' text={t('form.password')} type='text' />
        <Button
          text={t('loginPage.title')}
          isSubmit
        />
        <ToastContainer />
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
