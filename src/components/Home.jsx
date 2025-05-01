import React from 'react';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className={styles['home-container']}>
      <h1 className={styles.heading}>Welcome to PopX</h1>
      <p className={styles.subheading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <button onClick={handleSignup} className={styles['sign-up-button']}>Create Account</button>
      <button onClick={handleLogin} className={styles['login-button']}>Already Registered? Login</button>
    </div>
  );
};

export default Home;
