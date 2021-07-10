import styled from 'styled-components';

export const StyledNewsletterFormWrapper = styled.div`
    padding-bottom: 9vh;
    z-index: 2;
`

export const StyledNewsletterForm = styled.form`
    display: flex;
    flex-direction: column;
    height: auto;

    @media (min-width: 843px) {
        width: 712px;
        flex-direction: row;
        justify-content: space-between;
    }
`

export const StyledThankYouContainer = styled.form`
   
`

export const StyledFormEmailLabel = styled.label`
    display: block;
    color: ${({theme}) => theme.secondaryDark};
`

export const StyledFormEmailInput = styled.input`
    width: 343px;
    height: 55px;
    font-size: 1.5rem;
    margin-top: 1%;
    border-radius: 4px;
    margin-bottom: 10%;
    border: 2px solid ${({theme}) => theme.secondaryDark};
    padding-left: 10px;
`