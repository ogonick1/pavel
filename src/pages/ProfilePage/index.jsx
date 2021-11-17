import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AuthService from '../../services/authService';
import './index.css';

const lngs = {
  en: { nativeName: 'English' },
  ru: { nativeName: 'Rus' },
};
const ProfilePage = () => {
  const { t, i18n } = useTranslation();
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
      <div>
        {Object.keys(lngs).map((lng) => (
          <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
      <span>
        {t('ProfilePage.ProfilePage')}
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
