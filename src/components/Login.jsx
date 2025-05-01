import React from 'react';
import styles from './Login.module.css';
import { FormControl, InputLabel, OutlinedInput } from '@mui/material';

const Login = () => {
  return (
    <>
      <h1 className={styles.heading}>Signin to your PopX account</h1>
      <p className={styles.subheading}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <div className={styles.email}>
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="outlined-email" sx={{ color: '#6C25FF' }}>
            Email Address
          </InputLabel>
          <OutlinedInput
            id="outlined-email"
            placeholder="Enter email address"
            label="Email Address"
          />
        </FormControl>
      </div>

      <div className={styles.password}>
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="outlined-password" sx={{ color: '#6C25FF' }}>
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-password"
            placeholder="Enter password"
            type="password"
            label="Password"
          />
        </FormControl>
      </div>

      <button className={styles['login-button']}>
        Login
      </button>
    </>
  );
};

export default Login;
