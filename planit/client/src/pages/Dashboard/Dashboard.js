import React, { Component } from 'react';
// import styled from 'styled-components';
import './Dashboard.css';
// import API from '../../utils/API';
import Button from '../../components/Button';
import PlanCard from '../../components/PlanCard/PlanCard';
import ProfileSnippet from '../../components/ProfileSnippet/ProfileSnippet';


const CreateButton = Button.extend`
    margin-top: 2em;
    margin-left: 1.5em;
    margin-right: 1.5em;
    margin-bottom: 2em;
    width: 85%;
`;

class HomePage extends Component {

    state = {
        currentUser: '',
        currentUserProfile: {}
    }

    createPlan = () => {
        //axios call to create a plan
            //pass an object with empty strings plus the userID of the user creating the plan
            //
        //once the plan is created, .then to redirect to the specific plan page
            //should be something like /plan/:planID
            //maybe user a react-router <Redirect>
    }

    fetchProfileInfo = () => {
        //get call using the currentUser to get all user information
            //set profile info to state currentUserProfile
        //pass through as props to the <ProfileSnippet /> component
    }

    render () {
        return (
            <div className='container clearfix'>
                <div className='leftPanel'>
                    <ProfileSnippet />
                    <div>
                        <CreateButton onClick={this.createPlan}>
                            Create a new plan
                        </CreateButton>
                    </div>
                </div>
                <div className='cardPanel'>
                    <PlanCard />
                </div>
            </div>
        );
    }
}

export default HomePage;