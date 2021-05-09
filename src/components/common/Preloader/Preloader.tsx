import React, { FC } from 'react';
import styles from './Preloader.module.scss';

export const Preloader: FC = () => {
    return (
        <div className={styles.loader}></div>
    )
};