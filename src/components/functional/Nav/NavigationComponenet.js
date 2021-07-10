import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { StyledBurgerContainer, StyledCollapsibleLinksContainer, StyledCollapsibleLinksWrapper, StyledDesktopLinksWrapper, StyledMobileNavContainer, StyledMobileNavLink, StyledNavigationComponentWrapper, StyledReactScrollLinkContainer, StyledDesktopNavLink, StyledTopNavWrapper, StyledTopNavText, StyledDesktopLinksContainer, StyledNavPlaceholder, StyledTmznLogo, StyledDesktopNavHeaderContainer } from './NavigationComponentStyles';
import { useSpring, animated } from 'react-spring';
import tmznLogo from '../../../shared/images/tmzn-logo.png'

const NavigationComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <StyledNavigationComponentWrapper>
            <StyledNavPlaceholder />
            <TopNavigationComponent />
            <DesktopNavigationLinks />
            <StyledMobileNavContainer>
                <Burger isOpen={isOpen} setIsOpen={setIsOpen}/>
                <MobileNavigationLinks isOpen={isOpen} setIsOpen={setIsOpen}/>
            </StyledMobileNavContainer>
        </StyledNavigationComponentWrapper>
    )
}

const TopNavigationComponent = () => {
    return (
        <StyledTopNavWrapper>
            <Link to="pageTop" smooth={true} className="mobileHeaderLogoLink">
                <StyledTmznLogo src={tmznLogo} marginTop="15px" alt='Tokenize Amazon Tree Logo'/>
                <StyledTopNavText paddingTop="22px">
                    Rainforest Token
                </StyledTopNavText>
            </Link>
        </StyledTopNavWrapper>
    )
}

const Burger = ({isOpen, setIsOpen}) => {
    //Burger Icon Toggle Animations
    const firstBar = useSpring({
        transform: isOpen
            ? "translate(5px, 32px) rotate(-45deg)"
            : "translate(2px, 7px) rotate(0deg)"
    });
    const secondBar = useSpring({
        transform: isOpen
            ? "translate(10px, 4px) rotate(45deg)"
            : "translate(2px, 19px) rotate(0deg)"
    });
    const thirdBar = useSpring({
        transform: isOpen
            ? "translate(5px, 32px) rotate(-45deg)"
            : "translate(2px, 31px) rotate(0deg)"
    });

    return (
        <StyledBurgerContainer isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
            <svg
                width="34"
                height="32"
                viewBox="0 5 76 76"
                fill="white"
            >
                <animated.rect width="39" height="4" rx="2" style={firstBar} />
                <animated.rect width="39" height="4" rx="2" style={secondBar} />
                <animated.rect width="39" height="4" rx="2" style={thirdBar} />
            </svg>
        </StyledBurgerContainer>
    )
}

const DesktopNavigationLinks = () => {
    return (
        <StyledDesktopLinksWrapper>
            <StyledDesktopLinksContainer>
                <StyledDesktopNavHeaderContainer>
                    <Link to="pageTop" smooth={true} className="desktopHeaderLogoLink">
                        <StyledTmznLogo src={tmznLogo} marginTop='0px'/>
                        <StyledTopNavText paddingTop="">
                            Rainforest Token
                        </StyledTopNavText>
                    </Link>
                </StyledDesktopNavHeaderContainer>
                <ReactScrollDesktopLink title="Mission" id="missionLink"/>
                <ReactScrollDesktopLink title="Tokenomics" id="tokenLink"/>
                <ReactScrollDesktopLink title="Whitepaper" id="whitepaperLink"/>
            </StyledDesktopLinksContainer>
        </StyledDesktopLinksWrapper>
    )
}

const ReactScrollDesktopLink = ({id, title, delay = 0}) => {
    return (
        <StyledReactScrollLinkContainer>
            <StyledDesktopNavLink>
                <Link activeClass="activeNav" spy={true} to={id} smooth={true} duration={400} delay={delay} className='navLink'>
                    {title}
                </Link>
            </StyledDesktopNavLink>
        </StyledReactScrollLinkContainer>
    )
}


const MobileNavigationLinks = ({isOpen, setIsOpen}) => {
    //Collapsible Navbar Animation
    const entranceAnimation = useSpring({
        left: isOpen
        ? "0px"
        : '-400px'
    });
    
    return (
        <StyledCollapsibleLinksWrapper isOpen={isOpen} style={entranceAnimation}>
            <StyledCollapsibleLinksContainer>
                <ReactScrollMobileLink title="MISSION" id="missionLink"/>
                <ReactScrollMobileLink title="TOKENOMICS" id="tokenLink"/>
                <ReactScrollMobileLink title="WHITEPAPER" id="whitepaperLink"/>
            </StyledCollapsibleLinksContainer>
        </StyledCollapsibleLinksWrapper>
    )
}

const ReactScrollMobileLink = ({id, title, delay = 0}) => {
    return (
        <StyledReactScrollLinkContainer>
            <StyledMobileNavLink>
                <Link activeClass="activeNav" spy={true} to={id} smooth={true} duration={400} delay={delay}>
                    {title}
                </Link>
            </StyledMobileNavLink>
        </StyledReactScrollLinkContainer>
    )
};

export default NavigationComponent;