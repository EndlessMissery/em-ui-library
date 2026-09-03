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
      alert('Passwords do not match');
      return;
    }

    onRegister(formData);
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Create an account</h2>
      <FormField
        id="username"
        label="Username"
        type="text"
        value={formData.username}
        onChange={handleChange}
        placeholder="Enter your username"
      />
      <FormField
        id="email"
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />
      <FormField
        id="password"
        label="Password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter your password"
      />
      <FormField
        id="confirmPassword"
        label="Confirm password"
        type="password"
        value={formData.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm your password"
      />
      <Button type="submit">Sign up</Button>
    </form>
  );
}

export default Register;
