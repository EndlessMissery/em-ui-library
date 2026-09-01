import React from 'react';
import { FormField } from '../../molecules';
import { Button } from '../../atoms';
import './Register.css';

export interface RegisterFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface RegisterProps {
  onRegister: (formData: RegisterFormData) => void;
}

function Register({ onRegister }: RegisterProps) {
  const [formData, setFormData] = React.useState<RegisterFormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { password, confirmPassword } = formData;
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
        id="username"
        label="Uživatelské jméno"
        type="text"
        value={formData.username}
        onChange={handleChange}
        placeholder="Zadejte uživatelské jméno"
      />
      <FormField
        id="email"
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Zadejte email"
      />
      <FormField
        id="password"
        label="Heslo"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Zadejte heslo"
      />
      <FormField
        id="confirmPassword"
        label="Potvrďte heslo"
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
