import {
  React,
  useRef,
  useEffect,
} from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
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
  const { t } = useTranslation();

  const {
    setToken,
    setProfile,
  } = props;

  const emailField = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    emailField.current.focus();
  }, []);

  const onSubmit = async (values) => {
    try {
      const result = await AuthService.login(values);
      setToken(result.token);
      setProfile(result.user);
      navigate('/');
    } catch (error) {
      setToken(null);
      setProfile(null);
      toast.error(error.resolvedErrorMessage);
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
      <Form className='form'>
        <PageTitle text={t('loginPage.title')} />
        <FieldInput
          inputRef={emailField}
          name='email'
          text={t('form.email')}
          type='email'
        />
        <FieldInput name='password' text={t('form.password')} type='text' />
        <div>
          <Button
            className='btnsumbit'
            text={t('loginPage.title')}
            isSubmit
          />
          <Link
            className='link'
            to="/registration"
          >
            {t('registration.title')}
          </Link>
        </div>
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
