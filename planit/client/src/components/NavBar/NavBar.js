import React from 'react';

const NavBar = () => {

    return (
        <nav>
            <div>
                <a href='/' >PlanIt</a>
            </div>
            <div>
                <ul>
                    <li>
                        <a href='/' >Home</a>
                    </li>
                    <li>
                        <a href='/login' >Login</a>
                    </li>
                    <li>
                        <a href='/sign-up' >Sign Up</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}