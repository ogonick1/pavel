import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Button from '../Button';
import logo from './4.png';

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
        <img className='headcow' src={logo} alt="cow" />
        {navLinks.map((link) => {
          return <li className='menu-item'><NavLink activeclassname="select" to={link.to}>{t(link.title)}</NavLink></li>;
        })}
        <div className='btnlng'>
          {Object.keys(lngs).map((lng) => (
            <Button
              className={i18n.resolvedLanguage === lng ? 'btn active' : 'btn'}
              onClick={() => i18n.changeLanguage(lng)}
              isSubmit
              text={lngs[lng].nativeName}
            />
          ))}
        </div>
      </ul>
    </nav>
  );
};
export default Navbar;
