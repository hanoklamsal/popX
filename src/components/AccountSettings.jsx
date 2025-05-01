import React from 'react';
import styles from './AccountSettings.module.css';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

const AccountSettings = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Account Settings</h1>
      </div>
      
      <div className={styles.profileSection}>
        <div className={styles.profileImageContainer}>
          <div className={styles.profileImage}>
          </div>
          <div className={styles.cameraIconContainer}>
            <span className={styles.cameraIcon}>
              <PhotoCameraIcon fontSize="small" sx={{ color: 'white', fontSize: '14px' }} />
            </span>
          </div>
        </div>
        
        <div className={styles.profileInfo}>
          <h2 className={styles.userName}>Marry Doe</h2>
          <p className={styles.userEmail}>Marry@Gmail.Com</p>
        </div>
      </div>
      
      <div className={styles.infoText}>
        <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
      </div>
      
      <div className={styles.separator}></div>
      
      {/* Additional settings content would go here */}
      
      <div className={styles.separator}></div>
    </div>
  );
};

export default AccountSettings;