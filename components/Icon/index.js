import React, { useMemo,  } from 'react';
import { jc } from '../../utils';
import './icon.scss';

const sizes = {
    xxs: '8px',
    xs: '12px',
    s: '16px',
    m: '24px',
    l: '32px',
};

export const Icon = ({ children, className = '', iconSize, style }) => {
    const classNames = useMemo(() => jc('icon', className), [className]);
    const styles = { ['--icon-size']: sizes[iconSize], ...style };

    return (
        <span className={classNames} role='presentation' style={styles}>
            {children}
        </span>
    );
};
