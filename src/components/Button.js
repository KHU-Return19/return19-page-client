import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: 8rem;
    height: 2rem;
    font-size: 0.875rem;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    border: none;
    border-radius: 4px;
    outline: none;
    text-align: center;
`;


const Button = (props) => {
    return (
        <StyledButton color={props.color} onClick={props.onClick}>
            {props.children}
        </StyledButton>
    )
}
export default Button;
