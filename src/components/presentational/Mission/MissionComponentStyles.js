import styled from 'styled-components';

export const StyledMissionComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: linear-gradient(white, ${({theme}) => theme.secondaryLight});
    padding-bottom: 5%;
    padding-top: 70px;
`

export const StyledMissionHeader = styled.div`
    text-transform: uppercase;
    align-self: flex-start;
`

export const StyledMissionCardsContainer = styled.div`
    width: 100%;
`

export const StyledCardWrapper = styled.div`
    width: 343px;
    margin-bottom: 7vh;
    border-radius: 4px;
    border: none;

    @media (min-width: 843px) {
        width: 712px;
    }
`

export const StyledCardContainer = styled.div`
    border-radius: 4px;
`

export const StyledCardImage = styled.img`
    display: block;
    width: 343px;
    height: 204px;
    padding-bottom: 2vh;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    @media (min-width: 843px) {
        width: 712px;
        height: 424px;
    }
`

export const StyledCardHeader = styled.h3`
    display: block;
    padding: 0 25px;
    margin-bottom: 1.4vh;
    color: ${({theme}) => theme.secondaryDark};
`