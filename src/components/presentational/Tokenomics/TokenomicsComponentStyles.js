import styled from 'styled-components';
import tokenMobileDistributionChart from '../../../shared/images/token-distribution-mobile.jpg';
import tokenDesktopDistributionChart from '../../../shared/images/token-distribution-desktop.jpg';

export const StyledTokenomicsComponentWrapper = styled.div`
    background: linear-gradient(${({theme}) => theme.secondaryDark}, ${({theme}) => theme.primaryDark});
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

// Tokenomics Intro
export const StyledTokenInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 14vh;
    padding-bottom: 14vh;
    background: ${({theme}) => theme.secondaryLight};
`

export const StyledTokenInfoLogo = styled.img`
    margin-bottom: -1vh;
`

export const StyledTokenInfoTitle = styled.h2`
    margin: auto;
    margin-bottom: 3vh;
`

export const StyledTokenInfoTitleText = styled.div`
    margin: auto;
    margin-bottom: 1vh;
    font-size: 18px;
    line-height: 28px;
`

export const StyledTokenCardContainer = styled.div`
    margin-bottom: 6vh;
`

export const StyledTokenSubheaderContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2vh;
`

export const StyledSvgContainer = styled.div`
    width: 10px;
    margin: 0 16px 0 12px;
`

export const StyledTokenInfoSubheader = styled.h4`
    color: ${({theme}) => theme.primaryAccent}
`

export const StyledTokenInfoText = styled.div`
`

// Tokenomics Distribution
export const StyledTokenDistrContainer = styled.div`
    background: linear-gradient(${(theme) => theme.secondaryDark}, ${(theme) => theme.primaryDark});
    display: flex;
    flex-direction: column;
`

export const StyledTokenDistrTitle = styled.h2`
    margin: auto;
    color: white;
    margin-top: 6vh;
    margin-bottom: 5vh;
`

export const StyledTokenDistrChartContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    width: 343px;
    margin-bottom: 4vh;

    @media (min-width: 843px) {
        width: 712px;
    }
`

export const StyledTokenDistrChart = styled.div`
    background-image: url(${tokenMobileDistributionChart});
    background-repeat: no-repeat;
    background-size: cover;
    width: 343px;
    height: 578px;
    border-radius: 1%;

    @media (min-width: 843px) {
        background-image: url(${tokenDesktopDistributionChart});
        width: 711px;
    }
`

export const StyledTokenDistrText = styled.div`
    width: 343px;
    color: white;
    font-size: 18px;
    margin-bottom: 3vh;

    @media (min-width: 843px) {
        width: 712px;
    }
`

export const StyledTokenDistrDataContainer = styled.div`
    display: flex;
    flex-direction: row;
    color: white;
    justify-content: space-around;
`

export const StyledDistrDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
    margin-bottom: 7vh;
    width: 120px;

    @media (min-width: 843px) {
        margin: 0 110px 7vh 110px;
    }
`

export const StyledMiddleDataContainer = styled.div`
    padding-top: 4%;
`

export const StyledDataContainerTitle = styled.h2`
    
`

export const StyledDataContainerText = styled.div`
`