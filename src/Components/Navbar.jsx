import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem('authToken');

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <nav>
      <ul>
        <li>
          <span className="head">Explore!</span>
          {authToken ? (
            <>
              <Link to="/home">Home</Link>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/">Signup</Link>
              <Link to="/login">Login</Link>
            </>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
