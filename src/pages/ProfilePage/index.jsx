import {
  React,
  useEffect,
  useState,
} from 'react';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import { dateTimeFormats } from '../../utils/constants';
import AuthService from '../../services/authService';
import PageTitle from '../../components/pageTitle';

import './index.scss';

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

  const profileDetails = profile
    ? [
      {
        label: t('form.email'),
        value: profile.email,
      },
      {
        label: t('form.firstName'),
        value: profile.firstName,
      },
      {
        label: t('form.lastName'),
        value: profile.lastName,
      },
      {
        label: t('form.registered'),
        value: profile.createdAt
          ? dayjs(profile.createdAt).format(dateTimeFormats.DATE_TIME)
          : '',
      },
    ]
    : [];

  return (
    <div className='profile-page'>
      <PageTitle text={t('profilePage.title')} />
      {profileDetails.map((profileDetails) => {
        return (
          <div className="info">
            {profileDetails.label}
            {profileDetails.value}
          </div>
        );
      })}
    </div>
  );
};
export default ProfilePage;
