import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import PlanItLogo from '../../img/PlanItLogo.png';
// Router- Link

const Nav = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #ffffff;
`;

const NavbarLogo = styled.li`
    float: left;
    margin-left: 1.2em;
    margin-top: .75em;
    margin-bottom: .5em;
`;

const NavbarItem = styled.li`
    float: right;
    margin-right: 1.2em;
    margin-top: 1.1em;
    margin-bottom: 1em;
    font-family: 'Oswald', sans-serif;
`;

const LinkItem = styled.a`
    color: #2b6aaf;
    text-decoration: none;
`;


class NavBar extends Component {
   
   render () {
    return (
            <Fragment>
                <Nav>
                    <NavbarLogo>
                        <img src={PlanItLogo} alt='PlanIt Logo' width="55px" height="55px"/>
                        {/* <LinkItem href='/'>PlanIt</LinkItem> */}
                    </NavbarLogo>

                    <NavbarItem>
                        <Button>
                        <LinkItem href='/login'>Login</LinkItem>
                        </Button>
                    </NavbarItem>
                    
                    {/* <NavbarItem>
                        <LinkItem href='/home'>Home</LinkItem>
                    </NavbarItem> */}
                </Nav>
            </Fragment>
        );
   }
}

export default NavBar;