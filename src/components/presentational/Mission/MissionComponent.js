import React from 'react';
import { StyledHighlightHeaderText, StyledHighlightSpan } from '../../../shared/sharedComponents/TextComponents/TextHighlightStyles';
import { StyledBodyText1 } from '../../../shared/sharedComponents/TextComponents/TextStyles';
import { StyledCardImage, StyledCardHeader, StyledCardContainer, StyledCardWrapper, StyledMissionCardsContainer, StyledMissionComponentWrapper, StyledMissionHeader } from './MissionComponentStyles';
import blockchainImage from '../../../shared/images/blockchain.jpg';
import mazeImage from '../../../shared/images/maze.jpg';
import rainforestImage from '../../../shared/images/rainforest.jpg';
import { StyledFlexAlignLeftWrapper } from '../../../shared/sharedComponents/Flex/FlexComponentStyles';

const MissionComponent = () => {
    const config = [
        {
            title: "Reduce Your Carbon Footprint",
            text: "The Amazon rainforest plays a key role in regulating global warming. By investing in our tokens you can protect the Amazon rainforest and offset your carbon footprint.",
            image: rainforestImage,
            alt: 'Aerial view of Amazon Rainforest'
        },
        {
            title: "Secure & Cost Efficient",
            text: "Monetary donations aimed towards other eco-projects are exhausted through a series of fees and transactions. With blockchain, there are no bank fees or intermediaries, you can securely invest in rainforest tokens without worry.",
            image: blockchainImage,
            alt: 'Blockchain and currency symbols'
        },
        {
            title: "Trusted Affiliate",
            text: "Most eco-projects cannot guarantee continous supervision and protection of the rainforest. By acquiring our tokens, that money is guaranteed to go directly to a trusted affiliated company with the sole purpose of purchasing and preserving the Amazon rainforest.",
            image: mazeImage,
            alt: 'Maze bypassed by going around the borders, drawn by a business man'
        }
    ]
    
    return (
            <StyledMissionComponentWrapper>
                <StyledFlexAlignLeftWrapper>
                    <StyledMissionHeader>
                        Mission
                    </StyledMissionHeader>
                    <StyledHighlightHeaderText paddingTop={'0'} marginBottom={'7%'}>
                        Invest in <StyledHighlightSpan color={({theme}) => theme.primaryAccent}>crypto</StyledHighlightSpan> while making a <StyledHighlightSpan color={({theme}) => theme.secondaryDark}>positive impact</StyledHighlightSpan> on <StyledHighlightSpan color={({theme}) => theme.primaryDark} fontSize="32px" fontWeight="800">climate change.</StyledHighlightSpan>
                    </StyledHighlightHeaderText>
                    <StyledMissionCardsContainer>
                        {
                            config.map((card) => {
                                return (
                                    MissionCard(card.title, card.text, card.image, card.alt)
                                    )
                                })
                            }
                    </StyledMissionCardsContainer>
                </StyledFlexAlignLeftWrapper>
            </StyledMissionComponentWrapper>
    )
}

const MissionCard = (title, text, image, alt) => {
    return (
        <StyledCardWrapper key={title}>
            <StyledCardContainer>
                <StyledCardImage src={image} alt={alt}/>
                <StyledCardHeader>
                    {title}
                </StyledCardHeader>
                <StyledBodyText1 padding='0 25px' background={'none'}>
                    {text}
                </StyledBodyText1>
            </StyledCardContainer>
        </StyledCardWrapper>
    )
}

export default MissionComponent;