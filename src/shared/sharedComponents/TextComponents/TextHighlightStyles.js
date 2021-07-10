import styled from 'styled-components';

export const StyledHighlightSpan = styled.span`
    color: ${(props) => props.color ? props.color : props.theme.secondaryDark};
    font-weight: ${(props) => props.fontWeight ? props.fontWeight : '800'};
    font-size: ${(props) => props.fontSize ? props.fontSize : '32px'};
    font-family: ${(props) => props.fontFamily ? props.fontFamily : 'Dosis'};
`

export const StyledHighlightHeaderText = styled.h4`
    padding-top: ${(props) => props.paddingTop ? props.paddingTop : '10%'};
    margin-bottom: ${(props) => props.marginBottom ? props.marginBottom : '10%'};
    color: ${({theme}) => theme.secondaryDark};
    line-height: 46px;
    background: ${(props) => props.background ? props.background : 'transparent'};
`