import styled from 'styled-components';

export const StyledBodyText1 = styled.div`
    font-size: 18px;
    line-height: 28px;
    color: ${({theme}) => theme.secondaryDark};
    background: ${(props) => props.background ? props.background : 'white'};
    font-weight: ${(props) => props.fontWeight ? props.fontWeight : 'regular'};
    padding: ${(props) => props.padding ? props.padding : ''};
`

export const StyledBodyText2 = styled.div`
    font-size: 16px;
    line-height: 26px;
    color: ${({theme}) => theme.secondaryDark};
    background: ${(props) => props.background ? props.background : 'white'};
`