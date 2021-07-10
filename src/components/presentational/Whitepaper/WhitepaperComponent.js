import React from 'react';
import rainforestTokenWhitepaper from '../../../shared/pdf/sample-pdf.pdf';
import { MobileButton } from '../../../shared/sharedComponents/Button/ButtonComponent';
import { StyledFlexAlignLeftWrapper } from '../../../shared/sharedComponents/Flex/FlexComponentStyles';
import NewsletterFormComponent from '../../functional/NewsletterForm/NewsletterFormComponent';
import { StyledEarlyAccessCardImage, StyledWhitepaperDocumentContainer, StyledWhitepaperComponentWrapper, StyledWhitepaperDocumentHeader, StyledWhitepaperDocumentText, StyledWhitepaperDocumentAnchor, StyledEarlyAccessWrapper, StyledEarlyAccessHeader, StyledWhitepaperNewsletterContainer, StyledEarlyAccessCard, StyledEarlyAccessCardText, StyledWhitepaperNewsletterHeader, StyledWhitepaperNewsletterText, StyledWhitepaperNewsletterFormContainer, EarlyAccessCardContainer, StyledEarlyAccessCardsContainer } from './WhitepaperComponentStyles';
import satelliteImage from '../../../shared/images/satellite-image.jpg';
import piggyBankImage from '../../../shared/images/piggy-bank.jpg';
import smartContractImage from '../../../shared/images/smart-contract.jpg';

const WhitepaperComponent = () => {
    return (
        <StyledWhitepaperComponentWrapper>
            <StyledFlexAlignLeftWrapper>
                <WhitepaperDocument />
                <EarlyAccess />
                <WhitepaperNewsletter />
            </StyledFlexAlignLeftWrapper>
        </StyledWhitepaperComponentWrapper>
    )
}

const WhitepaperDocument = () => {
    return (
        <StyledWhitepaperDocumentContainer>
            <StyledWhitepaperDocumentHeader>
                Official Document
            </StyledWhitepaperDocumentHeader>
            <StyledWhitepaperDocumentText>
                Learn more about our vision to save the Amazon rainforest through the investment of cryptocurrency.
            </StyledWhitepaperDocumentText>
            <StyledWhitepaperDocumentAnchor rel="noreferrer" href={rainforestTokenWhitepaper} target="_blank">
                <MobileButton text={'SEE OUR WHITEPAPER'} boxShadow={'none'}/>
            </StyledWhitepaperDocumentAnchor>
        </StyledWhitepaperDocumentContainer>
    )
}

const EarlyAccess = () => {
    return (
        <StyledEarlyAccessWrapper>

            <StyledEarlyAccessHeader>
                Early Access Benefits
            </StyledEarlyAccessHeader>

            <StyledEarlyAccessCardsContainer>
                <EarlyAccessCardContainer>
                    <StyledEarlyAccessCard>
                        <StyledEarlyAccessCardImage src={smartContractImage} alt='Computer technology and wires with words "Smart Contract"'/>
                        <StyledEarlyAccessCardText>
                            Get the latest up-to-date information on our project and progress.
                        </StyledEarlyAccessCardText>
                    </StyledEarlyAccessCard>
                </EarlyAccessCardContainer>
                <EarlyAccessCardContainer>
                    <StyledEarlyAccessCard>
                        <StyledEarlyAccessCardImage src={piggyBankImage} alt='Piggy Bank and Hourglass with sand'/>
                        <StyledEarlyAccessCardText>
                            Learn about initial token offerings (ICO) dates and details.
                        </StyledEarlyAccessCardText>
                    </StyledEarlyAccessCard>
                </EarlyAccessCardContainer>
                <EarlyAccessCardContainer>
                    <StyledEarlyAccessCard>
                        <StyledEarlyAccessCardImage src={satelliteImage} alt='Satellite map image of Amazon Rainforest area'/>
                        <StyledEarlyAccessCardText>
                            In-depth reports containing facts, statistics, and analyses.
                        </StyledEarlyAccessCardText>
                    </StyledEarlyAccessCard>
                </EarlyAccessCardContainer>
            </StyledEarlyAccessCardsContainer>
        </StyledEarlyAccessWrapper>
    )
}

const WhitepaperNewsletter = () => {
    return (
        <StyledWhitepaperNewsletterContainer>
            <StyledWhitepaperNewsletterHeader>
                Grow With Us
            </StyledWhitepaperNewsletterHeader>
            <StyledWhitepaperNewsletterText>
                Get instant access and receive the latest up-to-date information as we continue to grow with the community's involvement.
            </StyledWhitepaperNewsletterText>
            <StyledWhitepaperNewsletterFormContainer>
                <NewsletterFormComponent />
            </StyledWhitepaperNewsletterFormContainer>
        </StyledWhitepaperNewsletterContainer>
    )
}

export default WhitepaperComponent;