import React, { Component } from 'react';
import { Redirect } from 'react-router';
// import styled from 'styled-components';
import './Dashboard.css';
import Button from '../../components/Button';
import PlanCard from '../../components/PlanCard/PlanCard';
import ProfileSnippet from '../../components/ProfileSnippet/ProfileSnippet';
import API from '../../utils/api';
// import { getMaxListeners } from 'cluster';


const CreateButton = Button.extend`
    margin-top: 2em;
    margin-left: 1.5em;
    margin-right: 1.5em;
    margin-bottom: 2em;
    width: 85%;
`;

class HomePage extends Component {

    state = {
        plans: [
            {
                title: 'Graduation Camping',
                location: 'Rocky Mountain National',
                date: Date.now,
                _id: '98734598kj2b34598',
            },
            {
                title: 'Barbados Family Trip',
                location: 'Barbados',
                date: Date.now,
                _id: 'sakdjfh3298749824',
            },
            {
                title: 'Donald Relaxation Trip',
                location: 'Costa Rico',
                date: Date.now,
                _id: 'skdjfh98347987234',
            }
        ],
        clickedPlan: {},
        loadPlan: false,
        currentUser: '',
        currentUserProfile: {
            email: 'email@gmail.com',
            username: 'defaut username',
            name: 'default user'
        }
    }

    componentDidMount = () => {
        this.getUserPlans()
    }

    createPlan = () => {

        API.postPlan({
            title: '',
            location: '',
            members: [this.state.currentUser]
        })
        .then(res => {
            <Redirect to={'/planit/' + res._id}  />
        })
        .catch(err => console.log(err))

    }

    fetchProfileInfo = () => {

        API.getUser(this.state.currentUser)
        .then( user => this.setState({
            currentUserProfile: user
        }))
        .catch(err => console.log(err))
        
    }

    loadPlan = id => {

        console.log('clicked ' + id)

        API.getPlanByID(id)
        .then(plan => {
            console.log('hit the .then')
            this.setState({
            clickedPlan: plan,
            loadPlan: true
            })
            if( this.state.loadPlan ) {
                <Redirect to={'/planit/' + plan._id}  />
            }
        })
        //add another .then to load the plan page with the specific cleckedPlan planID
        .catch(err => console.log(err))

    }

    getUserPlans = () => {

        API.getAllUserPlans(this.state.currentUser)
        .then(plans => this.setState({
            plans: plans
        }))
        .catch(err => console.log(err))
        
    }

    render () {
        return (
            <div className='container clearfix'>
                <div className='leftPanel'>
                    <ProfileSnippet profile={this.state.currentUserProfile}/>
                    <div>
                        <CreateButton onClick={this.createPlan}>
                            Create a new plan
                        </CreateButton>
                    </div>
                </div>
                <div className='cardPanel'>
                    {this.state.plans.map( plan => {
                        return <PlanCard title={plan.title} location={plan.location} id={plan._id} date={plan.date} clicked={this.loadPlan} />
                    })}
                </div>
            </div>
        );
    }
}

export default HomePage;