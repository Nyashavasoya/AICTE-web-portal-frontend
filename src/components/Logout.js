// LogoutPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutPage = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div>
      <h2>Logout Page</h2>
      <p>Are you sure you want to logout?</p>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default LogoutPage;
