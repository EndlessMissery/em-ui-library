import React from 'react';
import { FormField } from '../../molecules';
import { Button } from '../../atoms';
import './Login.css';

function Login({ onLogin }) {
  const [formData, setFormData] = React.useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;
    if (username === 'admin' && password === '1234') {
      onLogin();
    } else {
      alert('Nesprávné uživatelské jméno nebo heslo');
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Přihlášení</h2>
      <FormField
        label="Uživatelské jméno"
        name="username"
        type="text"
        value={formData.username}
        onChange={handleChange}
        placeholder="Zadejte uživatelské jméno"
      />
      <FormField
        label="Heslo"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Zadejte heslo"
      />
      <Button type="submit">Přihlásit se</Button>
    </form>
  );
}

export default Login;
