import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Button from '../Button';
// import './NavBar.css';
// Router- Link

const Nav = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: aquamarine;
`;

const NavbarLogo = styled.li`
    float: left;
    margin-left: 20px;
    margin-top: 1em;
    margin-bottom: 1em;
`;

// upload logo 
// const Logo = styled.img`
//     src=""`

const NavbarItem = styled.li`
    float: right;
    margin-right: 20px;
    margin-top: 1em;
    margin-bottom: 1em;
    font-family: 'Oswald', sans-serif;
`;

const LinkItem = styled.a`
    color: #50c878;
    text-decoration: none;
`;


class NavBar extends Component {
   
   render () {
    return (
            <Fragment>
                <Nav>
                    <NavbarLogo>
                        <LinkItem href='/'>PlanIt</LinkItem>
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