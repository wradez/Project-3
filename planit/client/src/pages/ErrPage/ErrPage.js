import React, { Component } from 'react';
import './ErrPage.css';
import Emoji from '../../img/errPage.jpg';

class ErrPage extends Component {

    render () {
        return (
            <div>
                <img src = {Emoji} alt = {'emoji'} />
                <p>Uh-Oh, you did something we didn't PLAN for, refresh and try again.</p>
            </div>
        );
    }
}

export default ErrPage;