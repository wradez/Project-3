import React from 'react';
import './ChecklistLineItem.css';

const ChecklistLineItem = props => {

    const checklistItems = [
        {
            id: 1,
            name: 'Fire Wood',
            price: 5
        }, 
        {
            id: 2,
            name: 'Lighter Fluid',
            price: 4
        }, 
        {
            id: 3,
            name: 'Charcoal',
            price: 6
        }
    ];

    return (checklistItems.map(lineItem => ( <p className='lineItem' key={lineItem.id}>{lineItem.name} | Price: ${lineItem.price}</p>) )
    )
}

export default ChecklistLineItem;