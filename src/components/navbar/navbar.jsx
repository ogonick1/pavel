import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

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
      title: 'navBar.links.profilePage',
    },
    {
      to: '/registration',
      title: 'navBar.links.registrationPage',
    },
    {
      to: '/login',
      title: 'navBar.links.loginPage',
    },
  ];

  return (
    <nav>
      <ul className='menu'>
        {navLinks.map((link) => {
          return <li className='menu-item'><Link to={link.to}>{link.title}</Link></li>;
        })}
        <li className='menu-item'>
          {Object.keys(lngs).map((lng) => (
            <button
              key={lng}
              className={i18n.resolvedLanguage === lng ? 'nav-bar__link--active menu-item navbtn' : 'menu-item navbtn'}
              type="submit"
              onClick={() => i18n.changeLanguage(lng)}
            >
              {lngs[lng].nativeName}
            </button>
          ))}
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
