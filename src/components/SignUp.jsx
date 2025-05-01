import React from 'react';
import styles from './SignUp.module.css';
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
} from '@mui/material';

const SignUp = () => {
  return (
    <>
      <h1 className={styles.heading}>Create your PopX account</h1>

      <div className={styles.input}>
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="full-name">Full Name</InputLabel>
          <OutlinedInput id="full-name" label="Full Name" />
        </FormControl>
      </div>

      <div className={styles.input}>
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="phone-number">Phone Number</InputLabel>
          <OutlinedInput id="phone-number" label="Phone Number" />
        </FormControl>
      </div>

      <div className={styles.input}>
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <OutlinedInput id="email" label="Email Address" />
        </FormControl>
      </div>

      <div className={styles.input}>
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput id="password" type="password" label="Password" />
        </FormControl>
      </div>

      <div className={styles.input}>
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="company">Company Name</InputLabel>
          <OutlinedInput id="company" label="Company Name" />
        </FormControl>
      </div>

      <div className={styles.radioGroup}>
        <FormControl>
          <FormLabel className={styles.radioLabel}>
            Are you an agency?<span className={styles.required}>*</span>
          </FormLabel>
          <RadioGroup row name="agency" defaultValue="no">
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </div>

      <button className={styles.createAccountButton}>Create Account</button>
    </>
  );
};

export default SignUp;
