import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import './navbar.scss';

const lngs = {
  en: { nativeName: 'English' },
  ru: { nativeName: 'Rus' },
};
const Navbar = () => {
  const { t, i18n } = useTranslation();
  return (
    <nav>
      <ul className='menu'>
        <li className='menu-item'>
          <Link to="/">{t('profile-page.title')}</Link>
        </li>
        <li className='menu-item'>
          <Link to="/registration">{t('registration.title')}</Link>
        </li>
        <li className='menu-item'>
          <Link to="/login">{t('login-page.title')}</Link>
        </li>
        <li className='menu-item'>
          {Object.keys(lngs).map((lng) => (
            <button className='menu-item navbtn' key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName}
            </button>
          ))}
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
