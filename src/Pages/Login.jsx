import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' });
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!data.email || !data.password) {
      alert('Please enter all details!');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((user) => user.email === data.email && user.password === data.password);

    if (user) {
      localStorage.setItem('authToken', user.email);
      alert('Login Successful!');
      navigate('/home');
    } else {
      setMsg('Invalid Email or Password!');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="login-page">
        <p className="errMsg">{msg}</p>
        <form onSubmit={handleSubmit}>
          <div className="heading"><p>Log In</p></div>
          <div className="account">
            <input type="email" name="email" placeholder="Enter your Email" onChange={handleInput} />
            <input type="password" name="password" placeholder="Enter your Password" onChange={handleInput} />
            <p>If you need to create an account, <Link to="/">Signup</Link></p>
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
