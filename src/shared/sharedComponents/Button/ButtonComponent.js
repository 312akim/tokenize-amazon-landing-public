import React from 'react';
import { StyledButtonWrapper, StyledButton, StyledButtonText } from './ButtonComponentStyles';

export const MobileButton = ({text, boxShadow}) => {
    return (
        <StyledButtonWrapper>
            <StyledButton boxShadow={boxShadow}>
                <StyledButtonText>
                    {text}
                </StyledButtonText>
            </StyledButton>
        </StyledButtonWrapper>
    )
}