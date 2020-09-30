import React from 'react';
import { ArrowButton } from '../Buttons';
import { PagesWrapper } from './pagination-wrapper';
import './pagination.scss';

export const PageListWrapper  = ({ pageSize, children, count, setCount }) => {
    const onClickHandler = i => setCount(i);

    return (
        <PagesWrapper>
            <ArrowButton
                className='arrow_btn'
                onClick={() => onClickHandler(count > 0 ? count - 1 : 0)}
                iconSize={'m'}
                direction='left'
            />
            {children}
            <ArrowButton
                className='arrow_btn'
                onClick={() => onClickHandler(count < 3 ? count + 1 : 3)}
                iconSize={'m'}
                direction='right'
            />
        </PagesWrapper>
    );
};
