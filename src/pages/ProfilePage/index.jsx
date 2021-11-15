import React, { useEffect, useState } from 'react';
import AuthService from '../../services/authService';
import './index.css';

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const getProfile = async () => {
    const result = await AuthService.getProfile();
    setProfile(result);
    console.log(result);
  };

  useEffect(() => {
    getProfile()
  }, []);
  
  return (
    <div>
      ProfilePage
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
