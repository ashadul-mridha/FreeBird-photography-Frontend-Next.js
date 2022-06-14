import React from 'react';
import styles from '../styles/allcategory.module.css'

const allcategory = () => {
    return (
      <div className={styles.categoryWrapper}>
        <div className={styles.category}>
          <h5>Natural</h5>
        </div>
        <div className={styles.category}>
          <h5>potaraits</h5>
        </div>
        <div className={styles.category}>
          <h5>Fashion</h5>
        </div>
        <div className={styles.category}>
          <h5>Natural</h5>
        </div>
        <div className={styles.category}>
          <h5>potaraits</h5>
        </div>
        <div className={styles.category}>
          <h5>Fashion</h5>
        </div>
      </div>
    );
};

export default allcategory;