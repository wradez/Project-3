import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import check from '../../../img/baseline-check_circle_outline-24px.svg'

const ItemDiv = styled.li`
    display: inline-flex;
    margin-left: 10px;
`;

const LineItem = styled.p`
    /* margin-left: 1em;
    justify-content: flex-start;
    font-family: 'Roboto', sans-serif; */
`;

const ItemSymbol = styled.p`
    font-family: 'Roboto', sans-serif;
    margin-top: .2em;
    margin-bottom: .2em;
    float: left;
`;

const ItemIcon = styled.div`
    width: 25px;
    height: 25px;
    float: left;
`;

const ItemInput = styled.input`
    float: left;
	padding: .2em;
	color: black;
	background: #ffffff;
	border: none;
	border-radius: 4px;
	width: 100%;
	margin-top: .25em;
	margin-bottom: .25em;
	margin-left: .1em;
	margin-right: .25em;
	font-family: 'Roboto', sans-serif;
`;

const QuantityInput = styled.input`
	padding: .25em;
	color: black;
	background: #ffffff;
	border: none;
	border-radius: 4px;
	width: 50px;
	margin-top: .25em;
	margin-bottom: .25em;
	margin-left: .25em;
	margin-right: .25em;
	font-family: 'Roboto', sans-serif;
`;

const CostInput = styled.input`
	padding: .25em;
	color: black;
	background: #ffffff;
	border: none;
	border-radius: 4px;
	width: 50px;
	margin-top: .25em;
	margin-bottom: .25em;
	margin-left: .25em;
	margin-right: .25em;
	font-family: 'Roboto', sans-serif;
`;

class ChecklistLineItem extends Component {

    render () {
        return (
            <Fragment>
                <ul>
                <ItemDiv>
                    <ItemIcon>
                        <img src={check} alt="checkmark"/>
                    </ItemIcon>
                    <ItemInput 
                        type="text"
                        id="item"
                        name="item"
                        placeholder="Item"
                    />
                    <ItemSymbol>
                        #
                    </ItemSymbol>
                    <QuantityInput
                        type="text"
                        id="quantity"
                        name="quantity"
                        placeholder="Quantity"
                    />
                    <ItemSymbol>
                        $
                    </ItemSymbol>
                    <CostInput 
                        type="text"
                        id="cost"
                        name="cost"
                        placeholder="Cost"
                    />  
                </ItemDiv>
                
                <ItemDiv>
                    <ItemIcon>
                        <img src={check} alt="checkmark"/>
                    </ItemIcon>
                    <ItemInput 
                        type="text"
                        id="item"
                        name="item"
                        placeholder="Item"
                    />
                    <ItemSymbol>
                        #
                    </ItemSymbol>
                    <QuantityInput
                        type="text"
                        id="quantity"
                        name="quantity"
                        placeholder="Quantity"
                    />
                    <ItemSymbol>
                        $
                    </ItemSymbol>
                    <CostInput 
                        type="text"
                        id="cost"
                        name="cost"
                        placeholder="Cost"
                    />  
                </ItemDiv>
                </ul>
                {/* <HR /> */}
                {/* <ItemDiv>
                    <LineItem>
                        Item #2
                    </LineItem>
                    <ItemPrice>
                        $ XX
                    </ItemPrice>
                </ItemDiv>
                <HR />
                <ItemDiv>
                    <LineItem>
                        Item #3
                    </LineItem>
                    <ItemPrice>
                        $ XX
                    </ItemPrice>
                </ItemDiv>
                <HR /> */}
            </Fragment>
        )
    }
        
}

export default ChecklistLineItem;