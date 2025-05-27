import { useState } from 'react';
import axios from 'axios';
import '../styles/main.css';

const loginUser = async (loginData) => {
  try {
    const response = await axios.post(
        'https://reqres.in/api/login',
        loginData, {
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        });
    return response.data;
  } catch (error) {
    console.error('Login error:', error.response?.data?.message || error.message);
    return null;
  }
};

const LoginForm = ({ onLogin, onSwitchToRegister }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const formSubmit = async (e) => {
    e.preventDefault();
    const userData = await loginUser(loginData);

    if (userData) {
      if (onLogin) onLogin(userData);
      localStorage.setItem('token', userData.token); // Zavést httpsOnly pro bezpečnost
    }
  };

  return (
    <form className="login-form" onSubmit={formSubmit}>
      <input
        type="email"
        className="user-mail"
        placeholder="E-mail"
        id="email"
        value={loginData.email}
        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
      />
      <input
        type="password"
        className="user-pass"
        placeholder="Password"
        id="password"
        value={loginData.password}
        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
      />
      <button type="submit" className="login-btn">Login</button>
      <button type="button" className="reg-btn" onClick={onSwitchToRegister}>Register</button>
      <button type="button" className="frgt-btn">Forgot Password</button>
    </form>
  );
};

export default LoginForm;
