import { useState } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

const App = () => {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = (userData) => {
    console.log('User logged in:', userData);
  };

  const handleRegister = (userData) => {
    console.log('User registered:', userData);
  };

  return (
    <div className="app">
      {isRegistering ? (
        <RegisterForm 
          onRegister={handleRegister} 
          onBackToLogin={() => setIsRegistering(false)} 
        />
      ) : (
        <LoginForm 
          onLogin={handleLogin} 
          onSwitchToRegister={() => setIsRegistering(true)} 
        />
)}

    </div>
  );
};

export default App;
