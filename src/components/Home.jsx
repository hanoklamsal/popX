import React from 'react'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles['home-container']}>
        <h1 className={styles.heading}>Welcome to PopX</h1>
        <p className={styles.subheading}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <button className={styles['sign-up-button']}>Create Account</button>
        <button className={styles['login-button']}>Already Registered? Login</button>
    </div>
  )
}

export default Home