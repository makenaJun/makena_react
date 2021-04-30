import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.scss';

export const NotFoundPage: FC = () => {
  return (
    <div className={styles.wrappNotFound}>
      <div className={styles.sign}>
        <div className={styles.signInner}>404</div>
      </div>
      <div className={styles.title} >PAGE NOT FOUND</div>
      <div className={styles.description}>Страница, которую вы ищете, не существует.</div>
      <Link to={'/'} className={styles.button}>На главную</Link>
    </div>
  )
};