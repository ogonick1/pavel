import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AuthService from '../../services/authService';
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

  return (
    <div className='profile-page'>
      {/* //TODO replace to PageTitle component */}
      <div className='title'>
        {t('profile-page.title')}
      </div>
      {profile
        ? <div>
          <div className='info'>
            {profile.email}
          </div>
          <div className='info'>
            {profile.firstName}
          </div>
          <div className='info'>
            {profile.lastName}
          </div>
        </div>
        : null}
    </div>
  );
};

export default ProfilePage;
