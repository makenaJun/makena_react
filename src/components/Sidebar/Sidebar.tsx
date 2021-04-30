import React, { FC } from 'react';
import { Delimiter } from '../common/Delimiter/Delimiter';
import styles from './Sidebar.module.scss';

type PropsType = {
    htmlCss: number,
    nativJs: number,
    reactJs: number,
    typeScript: number,
    otherTopicsIt: number,
    totalProgress: number,
    elapsedTime: number,
    dayOfStudy: string,
    updateDate: string
}

export const Sidebar: FC<PropsType> = (props) => {
    const { htmlCss,
        nativJs,
        reactJs,
        typeScript,
        otherTopicsIt,
        totalProgress,
        elapsedTime,
        dayOfStudy,
        updateDate
    } = props;
    return (
        <aside className={styles.sidebar}>
            <div>
                <div className={styles.sidebarTitle}>Прогресс</div>
                <div className={styles.sidebarContent}>
                    Изучение HTML & CSS <span>{htmlCss}</span>ч.
            <Delimiter />
            Изучение JavaScript <span>{nativJs}</span>ч.
            <Delimiter />
            Изучение React.js <span>{reactJs}</span>ч.
            <Delimiter />
            Изучение TypeScript <span>{typeScript}</span>ч.
            <Delimiter />
            Изучение общих тем IT <span>{otherTopicsIt}</span>ч.
            <Delimiter />
            Итого <span>{totalProgress}</span>ч.
            <Delimiter />
            Обучаюсь {elapsedTime + dayOfStudy}
                </div>
                <div className={styles.dateUpdated}>Последнее обновление <span>{updateDate}</span></div>
            </div>
        </aside>
    )
}; 