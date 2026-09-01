import React from 'react';
import { FormField } from '../../molecules';
import { Button } from '../../atoms';
import './Login.css';

export interface LoginProps {
  onLogin: () => void;
}

interface LoginFormData {
  username: string;
  password: string;
}

function Login({ onLogin }: LoginProps) {
  const [formData, setFormData] = React.useState<LoginFormData>({
    username: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
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
        id="username"
        label="Uživatelské jméno"
        type="text"
        value={formData.username}
        onChange={handleChange}
        placeholder="Zadejte uživatelské jméno"
      />
      <FormField
        id="password"
        label="Heslo"
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
