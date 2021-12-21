import React from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import Navbar from './components/navbar/navbar';

const PrivateRoute = ({
  component: Component,
  redirectTo,
  isAuth,
}) => {
  if (!isAuth) {
    return <Navigate to={redirectTo} />;
  }
  return <Component />;
};

const App = ({ hasToken }) => {
  return (
    <BrowserRouter>
      <Navbar />
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
          element={<PrivateRoute
            isAuth={hasToken}
            path="/"
            component={ProfilePage}
            redirectTo='/login'
          />}
        />
        <Route
          path="/"
          element={<ProfilePage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    hasToken: !!state.token,
  };
};

export default connect(mapStateToProps)(withTranslation()(App));
