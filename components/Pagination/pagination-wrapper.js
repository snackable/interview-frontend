import React, {  } from 'react';
import './index.scss';

export { PaginationWrapper } from './PaginationWrapper';
export { PageListWrapper } from './PagesListWrapper';

export const PagesWrapper = function ({ children }) {
    return <div className='pagination_pages_wrapper'>{children}</div>;
};
