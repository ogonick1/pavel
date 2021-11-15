import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/registration">Registration</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
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

export default App;
