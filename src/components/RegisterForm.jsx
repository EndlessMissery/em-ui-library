import { useState } from 'react';
import axios from 'axios';
import '../styles/main.css';

const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      'https://reqres.in/api/register',
      userData,
      {
        headers: {
          'x-api-key': 'reqres-free-v1'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Registration error:', error.response?.data || error.message);
    return null;
  }
};

const RegisterForm = ({ onRegister, onBackToLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: ''
  });


  const formSubmit = async (e) => {
    e.preventDefault();
    const result = await registerUser(formData);

    if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      if (formData.dateOfBirth === '') {
        alert('Please select a date of birth!');
        return;
      }
      if (formData.username.length < 3) {
        alert('Username must be at least 3 characters long!');
        return;
      }
      if (formData.password.length < 6) {
        alert('Password must be at least 6 characters long!');
        return;
      }
      if (!formData.email.includes('@')) {
        alert('Please enter a valid email address!');
        return;
      }

    if (result) {
      if (onRegister) onRegister(result);
      localStorage.setItem('token', result.token); // httpOnly pro bezpečnost
    }
  };

  return (
    <form className="login-form" onSubmit={formSubmit}>
      <input
        type="email"
        placeholder="E-mail"
        className="user-mail"
        value={formData.email}
        required
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type='username'
        placeholder="Username"
        className="user-name"
        value={formData.username}
        required
        minLength="3"
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      ></input>
      <input
        type="password"
        placeholder="Password"
        className="user-pass"
        value={formData.password}
        required
        minLength="6"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        className="user-pass"
        value={formData.confirmPassword}
        required
        minLength="6"
        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
      />
      <input
        type="date"
        className="user-dob"
        id="dateOfBirth"
        min="1900-01-01"
        max={new Date().toISOString().split('T')[0]}
        required
        value={formData.dateOfBirth}
        onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
      />
      <button type="submit" className="login-btn">Register</button>
      <button type="button" className="frgt-btn" onClick={onBackToLogin}>Back to Login</button>
    </form>
  );
};

export default RegisterForm;
