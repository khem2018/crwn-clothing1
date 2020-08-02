import React from 'react';
import styles from './homepage.module.css';

const HomePage = () => (
  <div className={styles.homepage}>
   <div className={styles.directory}>
    <div className={styles.menu}>
     <div className={styles.content}>
       <h1 className={styles.title}> HATS </h1>
         <span className={styles.subtitle}> SHOW NOW </span>
  </div>
  </div>
  <div className={styles.menu}>
   <div className={styles.content}>
     <h1 className={styles.title}> SNEAKERS </h1>
       <span className={styles.subtitle}> SHOW NOW </span>
</div>
</div>
<div className={styles.menu}>
 <div className={styles.content}>
   <h1 className={styles.title}> SHIRTS </h1>
     <span className={styles.subtitle}> SHOW NOW </span>
</div>
</div>
<div className={styles.menu}>
 <div className={styles.content}>
   <h1 className={styles.title}> ACCESORIES </h1>
     <span className={styles.subtitle}> SHOW NOW </span>
</div>
</div>
</div>
</div>
);

export default HomePage;
