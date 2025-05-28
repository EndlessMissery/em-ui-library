import { useForm } from 'react-hook-form';
import axios from 'axios';
import '../styles/main.css';

const loginUser = async (loginData) => {
  try {
    const response = await axios.post(
      'https://reqres.in/api/login',
      loginData,
      {
        headers: {
          'x-api-key': 'reqres-free-v1'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Login error:', error.response?.data?.message || error.message);
    return null;
  }
};

const LoginForm = ({ onLogin, onSwitchToRegister }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    const userData = await loginUser(data);
    if (userData) {
      localStorage.setItem('token', userData.token);
      if (onLogin) onLogin(userData);
    } else {
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="email"
        className="user-mail"
        placeholder="E-mail"
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
        type="password"
        className="user-pass"
        placeholder="Password"
        {...register('password', {
          required: 'Password is required',
          minLength: {
            value: 6,
            message: 'Password must be at least 6 characters'
          }
        })}
      />
      {errors.password && <p className="error">{errors.password.message}</p>}

      <button type="submit" className="login-btn">Login</button>
      <button type="button" className="reg-btn" onClick={onSwitchToRegister}>Register</button>
      <button type="button" className="frgt-btn">Forgot Password</button>
    </form>
  );
};

export default LoginForm;
