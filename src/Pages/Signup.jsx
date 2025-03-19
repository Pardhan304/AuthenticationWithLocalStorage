import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [data, setData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!data.name || !data.email || !data.password) {
      alert('Please enter all details!');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    if (users.some(user => user.email === data.email)) {
      alert('Email already registered! Try logging in.');
      return;
    }

    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('authToken', data.email); // Auto-login
    alert('Signup Successful!');
    navigate('/login');
  };

  return (
    <div>
      <Navbar />
      <div className="signin-page">
        <form onSubmit={handleSubmit}>
          <div className="heading"><p>Sign Up</p></div>
          <div className="account">
            <input type="text" name="name" placeholder="Enter your Name" onChange={handleInput} />
            <input type="email" name="email" placeholder="Enter your Email" onChange={handleInput} />
            <input type="password" name="password" placeholder="Enter your Password" onChange={handleInput} />
            <p>Already have an account? <Link to="/login">Login</Link></p>
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
