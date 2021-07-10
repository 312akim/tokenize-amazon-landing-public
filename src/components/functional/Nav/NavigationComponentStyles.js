import styled from 'styled-components';
import {animated } from "react-spring";

export const StyledNavigationComponentWrapper = styled.div`
    border-bottom: 1px solid #f8f8f8;
`

export const StyledNavPlaceholder = styled.div`
    height: 70px;
`

export const StyledTopNavWrapper = styled.div`

`

export const StyledTmznLogo = styled.img`
    margin-top: ${({marginTop}) => marginTop ? marginTop : '0px'};
    height: 34px;

    @media (min-width: 843px) {
        align-self: center;
        margin-bottom: 4px;
    }
`

export const StyledTopNavText = styled.h3`
    padding-top: ${(props) => props.paddingTop ? props.paddingTop : '0'};
    color: ${({theme}) => theme.primaryAccent};
    font-family: Dosis;
    font-size: 20px;
    line-height: 60px;
`

export const StyledReactScrollLinkContainer = styled.div`
    cursor: pointer;
    font-weight: 500;
    height: 70px;
    padding-top: 20px;
`

export const StyledDesktopNavLink = styled.a`
    line-height: 60px;
    text-transform: uppercase;
    padding: 0 6px 2px 6px;

    :hover {
        font-weight: bold;
    }
`

// Width of each button in collapsible Nav
export const StyledMobileNavLink = styled.a`
    width: 60px;
`

export const StyledDesktopLinksWrapper = styled.div`
    display: none;
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    z-index: 5;
    background: #f8f8f8;
    
    @media (min-width: 843px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const StyledDesktopLinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    margin-top: -10px;
    width: 712px;
`

export const StyledDesktopNavHeaderContainer = styled.div`

`

export const StyledMobileNavContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
`

export const StyledBurgerContainer = styled(animated.div)`
    position: fixed;
    margin-top: 30px;
    margin-left: 16px;
    background: ${({theme}) => theme.primaryDark};
    border-radius: 50%;
    padding-top: 9px;
    padding-left: 5px;
    width: 30px;
    height: 30px;
    box-shadow: 4px 4px 11px rgba(0, 0, 0, .25);

    @media (min-width: 843px) {
        display: none;
    }
`

export const StyledCollapsibleLinksWrapper = styled(animated.div)`
    position: fixed;
    top: 70px;
    width: 289px;
    height: 283px;
    z-index: 5;
    color: ${({theme}) => theme.secondaryLight};
    background: ${({theme}) => theme.secondaryDark};
`

export const StyledCollapsibleLinksContainer = styled(animated.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 283px;
`