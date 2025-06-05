import { useForm } from 'react-hook-form';
import axios from 'axios';
import '../styles/main.css';

const registerUser = async (userData) => {
  try {
    const response = await axios.post(
      'https://reqres.in/api/register',
      userData,
      { headers: { 'x-api-key': 'reqres-free-v1' } }
    );
    return response.data;
  } catch (error) {
    console.error('Registration error:', error.response?.data || error.message);
    return null;
  }
};

const RegisterForm = ({ onRegister, onBackToLogin }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    const result = await registerUser(data);
    if (result) {
      localStorage.setItem('token', result.token);
      if (onRegister) onRegister(result);
    } else {
      alert('Registration failed. Try again later.');
    }
  };

  const password = watch('password');

  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        placeholder="E-mail"
        className="user-mail"
        {...register('email', {
          required: 'E-mail is required',
          pattern: {
            value: /^\S+@\S+$/i,
            message: 'Invalid email format'
          }
        })}
      />
      {errors.email && <p className="error">{errors.email.message}</p>}

      <input
        type="text"
        placeholder="Username"
        className="user-name"
        {...register('username', {
          required: 'Username is required',
          minLength: {
            value: 3,
            message: 'Must be at least 3 characters'
          }
        })}
      />
      {errors.username && <p className="error">{errors.username.message}</p>}

      <input
        type="password"
        placeholder="Password"
        className="user-pass"
        {...register('password', {
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Must be at least 6 characters'
          }
        })}
      />
      {errors.password && <p className="error">{errors.password.message}</p>}

      <input
        type="password"
        placeholder="Confirm Password"
        className="user-pass"
        {...register('confirmPassword', {
          validate: value =>
            value === password || 'Passwords do not match'
        })}
      />
      {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}

      <input
        type="date"
        className="user-dob"
        min="1900-01-01"
        max={new Date().toISOString().split('T')[0]}
        {...register('dateOfBirth', {
          required: 'Date of birth is required'
        })}
      />
      {errors.dateOfBirth && <p className="error">{errors.dateOfBirth.message}</p>}

      <button type="submit" className="login-btn">Register</button>
      <button type="button" className="frgt-btn" onClick={onBackToLogin}>Back to Login</button>
    </form>
  );
};

export default RegisterForm;
