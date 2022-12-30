import React from 'react'
import {useNavigate} from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate('/login');
    localStorage.clear();
  }

  return (
    <div className="navbar">
      <h1>Contact List</h1>
      <button className="btn" onClick={logout}>LogOut</button>
    </div>
  )
}

export default NavBar