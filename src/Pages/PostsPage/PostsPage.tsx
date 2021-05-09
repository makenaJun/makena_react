import React, {FC, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    selectContent,
    selectCurrentPage,
    selectIsLoading, selectPageSize, selectPortionNumber,
    selectPortionSize,
    selectTitlePage, selectTotalCountPosts
} from '../../redux/PageSelector';
import styles from '../Pages.module.scss';
import {setPage, setPortionNumber} from '../../redux/PageReducer';
import {Preloader} from '../../components/common/Preloader/Preloader';
import {Post} from '../Post/Post';
import {PagesType} from '../../redux/PageReducer';
import {v1} from 'uuid';
import {Paginator} from "../../components/common/Paginator/Paginator";

type PropsType = {
    page: PagesType
}

export const PostsPage: FC<PropsType> = (props) => {
    const {page} = props;

    const titlePage = useSelector(selectTitlePage);
    const contentPage = useSelector(selectContent);
    const isLoading = useSelector(selectIsLoading);
    const portionSize = useSelector(selectPortionSize);
    const pageSize = useSelector(selectPageSize);
    const currentPage = useSelector(selectCurrentPage);
    const totalCount = useSelector(selectTotalCountPosts);
    const portionNumber = useSelector(selectPortionNumber);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(setPage(page, pageSize, 1));
        return () => {
            dispatch(setPortionNumber(1))
        }
    }, [dispatch, page, pageSize]);

    if (isLoading) {
        return (
            <>
                <div className={styles.newsTitle}>{titlePage}</div>
                <div className={styles.preloader}>
                    <Preloader/>
                </div>
            </>
        );
    }

    const parseContentPage = contentPage.map((c, index) => {
            return <Post key={v1()} title={c.title} content={c.content}/>
        }
    )

    const onShowPosts = (pageNumber: number) => {
            dispatch(setPage(page, pageSize, pageNumber));
    }

    const onPostsPortion = (portionNumber: number) => {
        dispatch(setPortionNumber(portionNumber));
    }

    return (
        <div>
            <div className={styles.newsTitle}>{titlePage}</div>
            <div className={styles.newsContent}>
                {parseContentPage}

                <Paginator totalCount={totalCount}
                           currentPage={currentPage}
                           portionSize={portionSize}
                           pageSize={pageSize}
                           portionNumber={portionNumber}
                           onPostsPortion={onPostsPortion}
                           onShowPosts={onShowPosts}
                />
            </div>
        </div>
    )
}