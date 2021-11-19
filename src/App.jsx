import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import Navbar from './components/navbar/navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* TODO remove div */}
      <div>
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
