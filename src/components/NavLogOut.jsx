import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavLogOut = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
     localStorage.removeItem('authToken');
    navigate('/Login'); 
  };

  return (
    <>
      <i
        className="bi bi-box-arrow-right toggle-sidebar-btn ms-3"
        onClick={handleLogout}
        style={{ cursor: 'pointer' }}
        title="Log Out"
      ></i>
    </>
  );
};

export default NavLogOut;
