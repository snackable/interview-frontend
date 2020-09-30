import React, { useState } from 'react';
import './index.scss'

const statuses = ['FINISHED', 'FAILED', 'PROCESSING'];

export const FileFilter = ({filterStatus, setFilterStatus}) => {
    return (
        <select className='select-css' value={filterStatus} onChange={event => setFilterStatus(event.target.value)}>
            <option value={''}>Filter status</option>
            {statuses.map(status => (
                <option key={status} value={status}>
                    {status}
                </option>
            ))}
        </select>
    );
};

