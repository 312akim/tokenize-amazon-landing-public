import styled from 'styled-components';

export const StyledHeroComponentWrapper = styled.div`
    height: auto;
    background: linear-gradient(white, white 50%, ${({theme}) => theme.secondaryLight});

    @media (min-width: 843px) {
        background: linear-gradient(white, white 60%, ${({theme}) => theme.secondaryLight});
    }

    @media (min-width: 1440px) {
        background: linear-gradient(white, white 50%, ${({theme}) => theme.secondaryLight});
    }

    @media (min-width: 2560px) {
        background: linear-gradient(white, white 60%, ${({theme}) => theme.secondaryLight});
    }
`

export const StyledHeroComponentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StyledHeroImageCropper = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;

    @media (min-width: 1440px) {
        max-height: 460px;
    }

    @media (min-width: 2560px) {
        max-height: 720px;
    }
`

export const StyledHeroImage = styled.img`
    width: 100%;
    display: block;
    margin-top: -5%;

    @media (min-width: 1440px) {
        margin-top: -10%;
    }

    @media (min-width: 2560px) {
        margin-top: -10%;
    }
`

export const StyledSquigglySvg = styled.img`
    position: absolute;
    bottom: -1px;
    vertical-align: bottom;
    width: 100vw;
`

export const StyledHeroSubHeaderContainer = styled.div`
    position: relative;
    align-self: flex-start;
    z-index: 0;
`

export const StyledHeroHeader = styled.h1`
    display: inline-block;
    margin: 0 0 3vh 0;
    font-size: 3rem;
    color: ${({theme}) => theme.secondaryDark};
    align-self: flex-start;
    z-index: 1;
`

export const StyledHeroSubHeaderBackground = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 5%;
`

export const StyledHeroText = styled.div`
    margin: 0 0 3vh 0;
    font-size: 18px;
    color: ${({theme}) => theme.secondaryDark};
    align-self: flex-start;
`

export const StyledHeroSubHeader = styled.div`
    text-transform: uppercase;
    font-size: 16px;
    line-height: 26px;
    margin: 50px 0 0 0;
    color: ${({theme}) => theme.primaryDark};
    font-weight: regular;
`