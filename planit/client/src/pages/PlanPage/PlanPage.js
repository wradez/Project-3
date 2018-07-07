import React, { Component, Fragment } from 'react';
import './PlanPage.css';
import memberImg from '../../img/50x50.png';
import plus from '../../img/plus.png';
import defaultImages from '../../img/defaultPlanImages';
import Checklists from '../../components/Checklist/Checklist';

class HomePage extends Component {

    render () {

        return (
            <Fragment>
                <div className='InfoPanel' >
                    <h3>Title: </h3>
                    <p>Graduation Camping Trip</p>
                    <h4>Dates</h4>
                    <p>July 13th - July 15th</p>
                    <h5>Members</h5>
                    <div className='PlanMembers' >
                        <img className='membImg' src={memberImg} alt='Group member 1' />
                        <img className='membImg' src={memberImg} alt='Group member 2' />
                        <img className='membImg' src={memberImg} alt='Group member 3' />
                        <img className='membImg' src={memberImg} alt='Group member 4' />
                        <img className='membImg' src={plus} alt='Add a member' />
                    </div>
                </div>
                <div className='VisualPanel' >
                    <img className='planImage' src={defaultImages.array[Math.ceil(Math.random() * defaultImages.array.length)]} alt='Plan image' />
                    <div className='checklistDiv' >
                        <Checklists />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default HomePage;