import React, { Component } from 'react';
import './ErrPage.css';
import Emoji from '../../img/errPage.png';

class ErrPage extends Component {

    render () {
        return (
            <div>
                <img className = 'emoji' src = {Emoji} alt = {'emoji'} />
                <p>Uh-Oh, you did something we didn't PLAN for, try something different.</p>
            </div>
        );
    }
}

export default ErrPage;