import React, {FC} from "react";
import {NavLink} from 'react-router-dom';
import styles from './Paginator.module.scss'

type PropsType = {
    totalCount: number,
    currentPage: number,
    portionSize: number,
    pageSize: number,
    portionNumber:number,
    onPostsPortion: (portionNumber: number ) => void,
    onShowPosts: (pageNumber: number) => void
}

export const Paginator: FC<PropsType> = React.memo((props) => {

    const {totalCount, pageSize, portionSize = 10, portionNumber, currentPage, onShowPosts, onPostsPortion} = props;

    const totalPages: number = Math.ceil(totalCount / pageSize);
    const pages: Array<number> = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }
    const portionCount = Math.ceil(totalPages / portionSize);
    const leftBorder = (portionNumber - 1) * portionSize + 1;
    const rightBorder = portionNumber * portionSize;

    return (
        <div className={styles.paginationBlock}>
            {totalCount >= 10 && <>
                {portionNumber > 1 &&
                <button onClick={() => onPostsPortion(portionNumber - 1)}>Назад
                </button>}
                {pages
                    .filter((page) => (page >= leftBorder && page <= rightBorder))
                    .map((num) => (
                        <NavLink key={num} to={'/blog?page=' + num}>
                            <button  onClick={() => onShowPosts(num)}
                                    disabled={num === currentPage}>{num}</button>
                        </NavLink>
                    ))}
                {portionNumber < portionCount &&
                <button onClick={() => onPostsPortion(portionNumber + 1)}>Далее
                </button>
                }
            </>}</div>
    )
})