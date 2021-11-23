import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from '../Button';

import './navbar.scss';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const lngs = {
    en: { nativeName: t('languages.en') },
    ru: { nativeName: t('languages.ru') },
  };

  const navLinks = [
    {
      to: '/',
      title: 'profilePage.title',
    },
    {
      to: '/registration',
      title: 'registration.title',
    },
    {
      to: '/login',
      title: 'loginPage.title',
    },
  ];

  return (
    <nav>
      <ul className='menu'>
        {navLinks.map((link) => {
          return <li className='menu-item'><Link to={link.to}>{t(link.title)}</Link></li>;
        })}
        {Object.keys(lngs).map((lng) => (
          <Button
            onClick={() => i18n.changeLanguage(lng)}
            isSubmit
            text={lngs[lng].nativeName}
            className={i18n.resolvedLanguage === lng ? 'nav-bar__link-active menu-item navbtn' : 'menu-item navbtn'}
          />
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
