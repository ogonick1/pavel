import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AuthService from '../../services/authService';
import './index.css';

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
    <div>
      <span>
        {t('profile-page.title')}
      </span>
      {profile
        ? <div>
          <div>
            {profile.email}
          </div>
          <div>
            {profile.firstName}
          </div>
          <div>
            {profile.lastName}
          </div>
        </div>
        : null}
    </div>
  );
};

export default ProfilePage;
