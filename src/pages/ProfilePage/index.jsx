import {
  React,
  useEffect,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import AuthService from '../../services/authService';
import PageTitle from '../../components/pageTitle';

import './index.scss';

const dayjs = require('dayjs');

const ProfilePage = () => {
  const { t } = useTranslation();

  const [profile, setProfile] = useState(null);

  const getProfile = async () => {
    const result = await AuthService.getProfile();
    setProfile(result);
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className='profile-page'>
      <PageTitle text={t('profilePage.title')} />
      {profile
        ? <div>
          <div className='info'>
            {t('form.email')}
            {profile.email}
          </div>
          <div className='info'>
            {t('form.firstName')}
            {profile.firstName}
          </div>
          <div className='info'>
            {t('form.lastName')}
            {profile.lastName}
          </div>
          <div className='info'>
            {t('form.registered')}
            {dayjs(profile.createdAt).format('DD.MM.YYYY HH:mm')}
          </div>
        </div>
        : null}
    </div>
  );
};

export default ProfilePage;
