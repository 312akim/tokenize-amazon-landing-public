import styled from 'styled-components';

export const StyledWhitepaperComponentWrapper = styled.div`
    background-image: linear-gradient(white, ${({theme}) => theme.secondaryLight});
    display: flex;
    flex-direction: column;
    padding-top: 70px;
`

//Whitepaper Document
export const StyledWhitepaperDocumentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StyledWhitepaperDocumentHeader = styled.h2`
    margin: auto;
    margin-bottom: 4vh;
`

export const StyledWhitepaperDocumentText = styled.div`
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 4vh;
`

export const StyledWhitepaperDocumentAnchor = styled.a`
    text-decoration: none;
    margin-bottom: 8vh;
`

//Early Access Benefits
export const StyledEarlyAccessWrapper = styled.div`

`

export const StyledEarlyAccessCardsContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 1440px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
`

export const EarlyAccessCardContainer = styled.div`
    width: 343px;
`

export const StyledEarlyAccessHeader = styled.h2`
    text-align: center;
    margin: auto;
    margin-bottom: 5vh;
`

export const StyledEarlyAccessCard = styled.div`

`

export const StyledEarlyAccessCardImage = styled.img`
    width: 343px;

    @media (min-width: 1440px) {
    }
`

export const StyledEarlyAccessCardText = styled.div`
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 5vh;
`

//Newsletter
export const StyledWhitepaperNewsletterContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const StyledWhitepaperNewsletterHeader = styled.h2`
    margin: auto;
    margin-bottom: 3vh;
`

export const StyledWhitepaperNewsletterText = styled.div`
    font-size: 18px;
    margin-bottom: 4vh;
`

export const StyledWhitepaperNewsletterFormContainer = styled.div`
    
`