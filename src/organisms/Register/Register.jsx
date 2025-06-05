import React from 'react';
import { FormField } from '../../molecules';
import { Button } from '../../atoms';
import './Register.css';

function Register({ onRegister }) {
  const [formData, setFormData] = React.useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      alert('Hesla se neshodují');
      return;
    }

    onRegister(formData);
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Registrace</h2>
      <FormField
        label="Uživatelské jméno"
        name="username"
        type="text"
        value={formData.username}
        onChange={handleChange}
        placeholder="Zadejte uživatelské jméno"
      />
      <FormField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Zadejte email"
      />
      <FormField
        label="Heslo"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Zadejte heslo"
      />
      <FormField
        label="Potvrďte heslo"
        name="confirmPassword"
        type="password"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="Potvrďte heslo"
      />
      <Button type="submit">Registrovat se</Button>
    </form>
  );
}

export default Register;
