import React from 'react';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <div>
      <Navbar />
      <div className="home">
        <h2>Welcome to the Home Page</h2>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Home;
