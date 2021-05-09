import React, {FC, useEffect} from 'react';
import { Delimiter } from '../common/Delimiter/Delimiter';
import styles from './Sidebar.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {getProgress} from "../../redux/ProgressReducer";
import {selectProgress} from "../../redux/ProgressSelector";

export const Sidebar: FC = () => {

    const progress = useSelector(selectProgress);

    const { htmlCss, nativJs, reactJs, typeScript, otherTopicsIt,
        totalProgress, elapsedTime, dayOfStudy, updateDate } = progress ;




        const dispatch = useDispatch();

        useEffect( () => {
            dispatch(getProgress())
        }, [dispatch])

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
            Обучаюсь {elapsedTime  + ' '  + dayOfStudy}
                </div>
                <div className={styles.dateUpdated}>Последнее обновление <span>{updateDate}</span></div>
            </div>
        </aside>
    )
}; 