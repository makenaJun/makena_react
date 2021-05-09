import React, {FC} from 'react';
import styles from './Header.module.scss'

export const Header: FC = React.memo(() => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}/>
            <div className={styles.socialLink}>
                <ul>
                    <li><a href="https://www.instagram.com/makenagarage/"
                           title="Ссылка на профиль в Instagram" rel="noreferrer" target="_blank">Instagram</a></li>
                    <li><a href="https://www.youtube.com/channel/UCXqXPXR57SyRKNDaRqpkJZQ"
                           title="Ссылка на канал в YouTube" rel="noreferrer" target="_blank">YouTube</a></li>
                </ul>
            </div>
        </header>
    )
});