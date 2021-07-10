import styled from 'styled-components';

export const StyledVideoComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${({theme}) => theme.secondaryDark};
`

export const StyledReactPlayerContainer = styled.div`
    width: 100%;

    @media (min-width: 843px) {
        width: 712px;
    }
`

export const StyledIframesWrapper = styled.div`
    position: relative;
    padding-bottom: 56.1%;
`