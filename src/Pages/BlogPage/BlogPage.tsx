import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectContent, selectTitlePage } from '../../redux/staticPageSelector';
import styles from '../Pages.module.scss';

export const BlogPage: FC = () => {

  const titlePage = useSelector(selectTitlePage);
  const content = useSelector(selectContent)

    return (
        <div>
            <div className={styles.newsTitle}>{titlePage}</div>
          <div className={styles.newsContent}>
            {content}
          </div>
        </div>
    )
};