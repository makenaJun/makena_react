import React, { FC } from 'react';
import styles from './Menu.module.scss'

export const Menu: FC = React.memo(() => {
    return (
        <nav className={styles.navigationBox}>
            <ul className={styles.navigation}>
                <li><a href={'/'} title={'Перейти на главную'}>Главная</a></li>
                <li><a href={'/blog'} title={'Блог'}>Блог</a></li>
                <li><a href={'/materials'} title={'Материалы для обучения'}>Материалы</a></li>
            </ul>
        </nav>
    )
});