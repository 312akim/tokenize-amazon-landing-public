import React from 'react';
import { StyledHighlightHeaderText, StyledHighlightSpan } from '../../../shared/sharedComponents/TextComponents/TextHighlightStyles';
import { StyledBodyText1 } from '../../../shared/sharedComponents/TextComponents/TextStyles';
import { StyledSolutionNewsletterWrapper, StyledBodyText1Container, StyledBodyText2Container, StyledCarbonLogoContainer, StyledCarbonNeutralImageContainer, StyledSolutionComponentWrapper, StyledSolutionContentContainer, StyledProjectPhasesContainer, StyledProjectPhasesTitle, StyledProjectPhasesChart, StyledCarbonLogoContainerWrapper, StyledCarbonLogo, StyledSolutionNewsletterBackgroundContainer, StyledSolutionNewsletterContainer } from './SolutionComponentStyles';
import NewsletterFormComponent from '../../functional/NewsletterForm/NewsletterFormComponent';
import { StyledFlexAlignLeftWrapper } from '../../../shared/sharedComponents/Flex/FlexComponentStyles';
import carbonNeutralImage from '../../../shared/images/carbon-neutral.jpg';
import unccLogo from '../../../shared/images/UNCC-logo.png'
import reddLogo from '../../../shared/images/REDD-logo.png';

const SolutionComponent = () => {
    return (
        <StyledSolutionComponentWrapper>
            <StyledFlexAlignLeftWrapper>
                <Content />
            </StyledFlexAlignLeftWrapper>
            <ProjectPhases />
        </StyledSolutionComponentWrapper>
    )
}

const Content = () => {
    return (
        <StyledSolutionContentContainer>
            <ContentHeaderText />
            <ContentText1 />
            <CarbonNeutralImage />
            <ContentText2 />
            <CarbonLogos />
            <SolutionNewsletter />
        </StyledSolutionContentContainer>
    )
}

const ContentHeaderText = () => {
    return (
        <StyledHighlightHeaderText marginBottom='1vh'>
            Want to
            <StyledHighlightSpan color={({theme}) => theme.primaryAccent}>
                &nbsp;go green
            </StyledHighlightSpan>
            ? &nbsp;
            <br className='hideTablet' />
            Show it off with 
            <StyledHighlightSpan color={({theme}) => theme.primaryAccent}>
                &nbsp;proof
            </StyledHighlightSpan>.
        </StyledHighlightHeaderText>
    )
}

const ContentText1 = () => {
    return (
        <StyledBodyText1Container>
            <StyledBodyText1>
                Offset your <b>carbon footprint</b>, purchase <b>Rainforest tokens</b>, and receive a <br /><b>CARBON NEUTRAL certificate</b>.
            </StyledBodyText1>
        </StyledBodyText1Container>
    )
}

const CarbonNeutralImage = () => {
    return (
        <StyledCarbonNeutralImageContainer src={carbonNeutralImage} alt='Carbon Neutral logo' />
    )
}

const ContentText2 = () => {
    return (
        <StyledBodyText2Container>
            <StyledBodyText1>
                The project will be in accordance with the <b>United Nations REDD+ program.</b>
            </StyledBodyText1>
        </StyledBodyText2Container>
    )
}

const CarbonLogos = () => {
    return (
        <StyledCarbonLogoContainerWrapper>
            <StyledCarbonLogoContainer>
                <StyledCarbonLogo src={unccLogo} alt='United Nations Climate Change logo'/>
            </StyledCarbonLogoContainer>
            <StyledCarbonLogoContainer>
                <StyledCarbonLogo src={reddLogo} width={'72px'} alt='REDD+ logo'/>
            </StyledCarbonLogoContainer>
        </StyledCarbonLogoContainerWrapper>
    )
}

const SolutionNewsletter = () => {
    return (
        <StyledSolutionNewsletterWrapper>
            <StyledSolutionNewsletterBackgroundContainer />
            <StyledSolutionNewsletterContainer>
                <StyledHighlightHeaderText marginBottom='4vh'>
                    Want to make an <br className='hideTablet'/>
                    <StyledHighlightSpan>effortless</StyledHighlightSpan> difference in 
                    <StyledHighlightSpan><br className='hideTablet'/> climate change</StyledHighlightSpan>? <br className='hideTablet'/>
                    Now you can.
                </StyledHighlightHeaderText>
                <NewsletterFormComponent />
            </StyledSolutionNewsletterContainer>
        </StyledSolutionNewsletterWrapper>
        )
}

const ProjectPhases = () => {
    return (
        <StyledProjectPhasesContainer>
            <StyledFlexAlignLeftWrapper>
                <StyledProjectPhasesTitle>
                    Project Phases
                </StyledProjectPhasesTitle>
                {/* Phase chart swaps between mobile/desktop chart in styled components */}
                <StyledProjectPhasesChart />
            </StyledFlexAlignLeftWrapper>
        </StyledProjectPhasesContainer>
    )
}

export default SolutionComponent;