//copy a user from user table(via email) and PUT them in the 'PlanIt members' array
    //api call to aquire user
    //another api call to PUT that user in PlanIt members array
    //need a dropdown or modal to pop up so Admin can input user email
        //needs an input field and a submit button
        //if an email is not in the database, let the user know it's invalid

import React from 'react';
import styled from 'styled-components';
import plus from '../../img/plus.png';

const PlusImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: .25em;
    margin-right: .25em;
    margin-bottom: .5em;
`;

const AddUser = () => {

   const enterMember= () => {
        //pop-up with input field for email
        //on submission call fetchUser
        prompt(`Enter user's email adress to add them to the group`, `example@gmail.com`);
    }

    fetchUser = event => {
        event.preventDefault();
        //axios call to User table
            //if user exists add to members array for associated plan(PlanIt table)
                //update associated plans members list with new user
            //else msg, "user does not exist"
    }

    return (
        <a>
            <PlusImg src={plus} onClick={enterMember} alt='Add a member' />
        </a>
    )
    
}

export default AddUser;