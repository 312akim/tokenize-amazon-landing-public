import React from 'react';
import { StyledFooterContainer, StyledFooterCopyright, StyledFooterLogo, StyledFooterLogoContainer, StyledFooterWrapper } from './FooterComponentStyles';
import tmznLogo from '../../../shared/images/tmzn-logo.png';

const FooterComponent = () => {
    return (
        <StyledFooterWrapper>
            <StyledFooterContainer>
                <StyledFooterLogoContainer>
                    <StyledFooterLogo src={tmznLogo} alt='Tokenize Amazon Tree Logo' />
                </StyledFooterLogoContainer>
                <StyledFooterCopyright>
                    © 2021, Tokenize Amazon
                </StyledFooterCopyright>
            </StyledFooterContainer>
        </StyledFooterWrapper>
    )
}


export default FooterComponent;