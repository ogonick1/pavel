import React from 'react';
import {
  BrowserRouter, Routes, Route, Link,
} from 'react-router-dom';
import { withTranslation, useTranslation } from 'react-i18next';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';

const App = () => {
  const { t, i18n } = useTranslation();
  const lngs = {
    en: { nativeName: 'English' },
    ru: { nativeName: 'Rus' },
  };
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">{t('profile-page.title')}</Link>
            </li>
            <li>
              <Link to="/registration">{t('registration.title')}</Link>
            </li>
            <li>
              <Link to="/login">{t('login-page.title')}</Link>
            </li>
          </ul>
          <div>
            {Object.keys(lngs).map((lng) => (
              <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                {lngs[lng].nativeName}
              </button>
            ))}
          </div>
        </nav>
        <Routes>
          <Route
            path="/login"
            element={<LoginPage />}
          />
          <Route
            path="/registration"
            element={<RegistrationPage />}
          />
          <Route
            path="/"
            element={<ProfilePage />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default withTranslation()(App);
