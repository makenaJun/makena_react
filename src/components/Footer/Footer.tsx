import React, { FC } from 'react';
import styles from './Footer.module.scss';

export const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.version}>v0.1</div>
            <div className={styles.copyright}> © 2020 www.makena.su </div>
        </footer>
    )
};