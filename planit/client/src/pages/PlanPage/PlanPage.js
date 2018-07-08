import React, { Component, Fragment } from 'react';
import './PlanPage.css';
import defaultImages from '../../img/defaultPlanImages';
import Checklists from '../../components/Checklist/Checklist';
import PlanMembers from '../../components/PlanMembers/PlanMembers';

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
                        <PlanMembers />
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