import React, { useEffect,  } from 'react';
import './pagination.scss';
import { PaginationWrapper } from './pagination-wrapper';
import { PaginationMain } from './PaginationMain';

export const Pagination = function (props) {
    return (
        <PaginationWrapper disabled={props.disabled}>
            <PaginationMain {...props} />
        </PaginationWrapper>
    );
};