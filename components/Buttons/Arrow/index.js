import React from 'react';
import { IconButton } from '..';
import { ShortArrow } from '../../SVG/ShortArrow'
import { jc } from '../../../utils';
import './arrowButton.scss';

export const ArrowButton = function (props) {
    const { iconSize, buttonSize, direction, style, className = '', ...rest } = props;
    return (
        <IconButton
            buttonSize={buttonSize}
            iconSize={iconSize}
            style={style}
            className={jc('shortArrow_btn', className)}
            {...rest}
        >
            <ShortArrow direction={direction} />
        </IconButton>
    );
};
