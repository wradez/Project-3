import React from 'react';
import './Checklist.css';
import ChecklistLineItem from './ChecklistLineItem/ChecklistLineItem';

const Checklist = props => {
    return (
        <div className='checklistCard' >
            <p>Checklist Title</p>
            <hr />
            <ChecklistLineItem />
        </div>
    )
}

export default Checklist;