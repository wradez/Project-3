import React, { Fragment } from 'react';
import memberImg from '../../img/50x50.png';
import plus from '../../img/plus.png';

const PlanMembers = () => {

    return (
        <Fragment>
            <img className='membImg' src={memberImg} alt='Group member 1' />
            <img className='membImg' src={memberImg} alt='Group member 2' />
            <img className='membImg' src={memberImg} alt='Group member 3' />
            <img className='membImg' src={memberImg} alt='Group member 4' />
            <img className='membImg' src={plus} alt='Add a member' />
        </Fragment>
    )
}

export default PlanMembers;