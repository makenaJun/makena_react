import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss'

export const Menu: FC = React.memo(() => {
    return (
        <nav className={styles.navigationBox}>
            <ul className={styles.navigation}>
                <li><Link to={'/'} title={'Перейти на главную'}>Главная</Link></li>
                <li><Link to={'/blog'} title={'Блог'}>Блог</Link></li>
                <li><Link to={'/materials'} title={'Материалы для обучения'}>Материалы</Link></li>
            </ul>
        </nav>
    )
});