import React, { FC } from 'react';
import styles from './Header.module.scss'

export const Header: FC = React.memo(() => {
    return (
    <header className={styles.header}>
    <div className={styles.logo}></div>
    <div className={styles.socialLink}>
        <ul>
            <li><a href="https://www.instagram.com/makenagarage/" title="Ссылка на профиль в Instagram" target="_blank">Instagram</a></li>
            <li><a href="https://www.youtube.com/channel/UCXqXPXR57SyRKNDaRqpkJZQ" title="Ссылка на канал в YouTube" target="_blank">YouTube</a></li>
        </ul>
    </div>
</header>
    )
});