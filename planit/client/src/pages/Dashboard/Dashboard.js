import React, { Component } from 'react';
import './Dashboard.css';
import profile_img from '../../img/profile_img.jpg';
import PlanCard from '../../components/PlanCard/PlanCard';

class HomePage extends Component {

    render () {
        return (
            <div className='container'>
                <div className='leftPanel'>
                    <div className='profileInfo'>
                        <img className='profileImg' src={profile_img} alt='Profile' />
                        <p>Walker Radez</p>
                        <p>walkerradez@gmail.com</p>
                    </div>
                    <div className='add'>
                        <button>Add a plan</button>
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