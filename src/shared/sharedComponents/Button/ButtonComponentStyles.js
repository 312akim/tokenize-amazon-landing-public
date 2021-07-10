import styled from 'styled-components';

export const StyledButtonWrapper = styled.div`
    margin: auto;
`

export const StyledButton = styled.button`
    display: flex;
    background: ${({theme}) => theme.primaryAccent};
    color: white;
    height: 55px;
    width: 343px;
    border: none;
    border-radius: 4px;
    text-align: center;
    text-transform: uppercase;
    box-shadow: ${({boxShadow, theme}) => boxShadow ? boxShadow : theme.dropshadow};
    cursor: pointer;
    margin-bottom: 2%;

    :active {
        border: 1px solid black;
    }

    :hover {
        background: ${({theme}) => theme.primaryLight};
        color: black;
    }
`

export const StyledButtonText = styled.div`
    margin: auto;
    text-transform: uppercase;
`