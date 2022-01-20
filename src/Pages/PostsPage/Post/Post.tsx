import React, { FC } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Delimiter } from '../../../components/common/Delimiter/Delimiter';

type PropsType = {
    title: string,
    content: string
};

export const Post: FC<PropsType> = (props) => {
    const { title, content } = props;
    return (<>
        <h3>{title}</h3>
        {ReactHtmlParser(content)}
        <Delimiter />
    </>
    )
};