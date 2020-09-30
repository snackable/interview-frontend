import React from 'react';
import { Button } from '..';
import { Icon } from '../../Icon';

export const IconButton  = function (props) {
    const { iconSize, style, className, children, buttonSize, ...rest } = props;
    return (
        <Button className={className} style={style} size={buttonSize} {...rest}>
            <Icon iconSize={iconSize}>{children}</Icon>
        </Button>
    );
};
