import styled from 'styled-components';

export const StyledFooterWrapper = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #f8f8f8;
`

export const StyledFooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 150px;
    padding-top: 32px;
    width: 343px;

    @media (min-width: 843px) {
        width: 712px;
    }
`

export const StyledFooterLogoContainer = styled.div`
    display: block;
`

export const StyledFooterLogo = styled.img`
    height: 64px;
    display: block;
`

export const StyledFooterCopyright = styled.div`
    display: block;
`