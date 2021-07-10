import styled from 'styled-components';
import projectMobilePhaseChart from '../../../shared/images/project-phases-mobile.jpg';
import projectDesktopPhaseChart from '../../../shared/images/project-phases-desktop.jpg';
import backgroundAmazonImage from '../../../shared/images/background-amazon.jpg';

export const StyledSolutionComponentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
`

export const StyledSolutionContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 343px;

    @media (min-width: 843px) {
        width: 712px;
    }
`

export const StyledBodyText1Container = styled.div`
    margin-bottom: 3vh;
`

export const StyledCarbonNeutralImageContainer = styled.img`
    width: 85%;
    margin-bottom: 3vh;
    align-self: center;
`   


export const StyledBodyText2Container = styled.div`
    margin-bottom: 5vh;
`

// Logos
export const StyledCarbonLogoContainerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-bottom: 5vh;
`

export const StyledCarbonLogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 162px;
    height: 49px;
`

export const StyledCarbonLogo = styled.img`
    display: inline-block;
    width: ${(props) => props.width ? props.width : '162px'};
`

// Project Phases
export const StyledProjectPhasesContainer = styled.div`
    background: ${({theme}) => theme.secondaryDark};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 5vh;
`

export const StyledProjectPhasesTitle = styled.h2`
    color: white;
    margin: auto;
    padding-bottom: 4vh;
`

export const StyledProjectPhasesChart = styled.div`
    width: 375px;
    height: 261px;
    background-image: url(${projectMobilePhaseChart});
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 7vh;

    @media (min-width: 843px) {
        width: 712px;
        height: 437px;
        background-image: url(${projectDesktopPhaseChart});
    }
`

export const StyledSolutionNewsletterWrapper = styled.div`
    position: relative;
    height: 547px;
`

export const StyledSolutionNewsletterBackgroundContainer = styled.div`
    position: absolute;
    overflow: hidden;
    width: 1440px;
    height: 100%;
    left: -426px;
    opacity: 0.8;
    background: url(${backgroundAmazonImage});
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 0;

    @media (min-width: 1441px) {
        background: none;
    }
`

export const StyledSolutionNewsletterContainer = styled.div`
    position: absolute;
    margin-top: 4vh;
`