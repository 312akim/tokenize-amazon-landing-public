import React from 'react';
import { StyledFlexAlignLeftWrapper } from '../../../shared/sharedComponents/Flex/FlexComponentStyles';
import { StyledTokenDistrDataContainer, StyledTokenDistrChart, StyledTokenDistrContainer, StyledTokenDistrText, StyledTokenDistrTitle, StyledTokenInfoContainer, StyledTokenInfoLogo, StyledTokenInfoSubheader, StyledTokenInfoText, StyledTokenInfoTitle, StyledTokenInfoTitleText, StyledTokenomicsComponentWrapper, StyledTokenSubheaderContainer, StyledDistrDataContainer, StyledMiddleDataContainer, StyledDataContainerTitle, StyledDataContainerText, StyledTokenDistrChartContainer, StyledTokenCardContainer, StyledSvgContainer } from './TokenomicsComponentStyles';
import tokenLogo from '../../../shared/images/rainforest-token.png';

const TokenomicsComponent = () => {
    return (
        <StyledTokenomicsComponentWrapper>
                <TokenomicsIntro />
                <TokenomicsDistribution />
        </StyledTokenomicsComponentWrapper>
    )
}

const TokenomicsIntro = () => {
    return (
        <StyledTokenInfoContainer>
            <StyledFlexAlignLeftWrapper>
                <StyledTokenInfoTitle>
                    Tokenomics
                </StyledTokenInfoTitle>
                <StyledTokenInfoLogo src={tokenLogo} alt='Tokenize Amazon Coin Logo'/>
                <StyledTokenInfoTitleText>
                    Initial Token Supply
                </StyledTokenInfoTitleText>
                {
                    infoCardConfig.map((card, index) => 
                        TokenomicsInfoCard(card, index)
                    )
                }
            </StyledFlexAlignLeftWrapper>
        </StyledTokenInfoContainer>
    )
}

const infoCardConfig = [{
        title: '10 Million',
        text: 'Rainforest tokens will be minted at the initial Token Generation Event (TGE)'
    },
    {
        title: '100 %',
        text: 'Of the funds raised on ICO will go towards protecting the Amazon rainforest.'
}]

const TokenomicsInfoCard = (card, index) => {
    return (
        <StyledTokenCardContainer key={card.title + index}>
            <StyledTokenSubheaderContainer>
                <StyledSvgContainer>
                    <svg viewBox="0 0 50 25" width="50" height="25" xmlns="http://www.w3.org/2000/svg" className='svgSizer'>
                        <line x1="0px" y1="18px" x2="16px" y2="18px" stroke="#4C6E9A" />
                    </svg>
                </StyledSvgContainer>
                <StyledTokenInfoSubheader>
                    {card.title}
                </StyledTokenInfoSubheader>
                <StyledSvgContainer>
                    <svg viewBox="0 0 50 25" width="50" height="25" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0px" y1="18px" x2="16px" y2="18px" stroke="#4C6E9A" className='svgSizer'/>
                    </svg>
                </StyledSvgContainer>
            </StyledTokenSubheaderContainer>
            <StyledTokenInfoText>
                    {card.text}
            </StyledTokenInfoText>
        </StyledTokenCardContainer>
    )
}

const TokenomicsDistribution = () => {
    return (
        <StyledTokenDistrContainer>
            <StyledTokenDistrTitle>
                Token Distribution
            </StyledTokenDistrTitle>
            <StyledTokenDistrChartContainer>
                {/* Token Distr chart changes from mobile to desktop chart in styled components */}
                <StyledTokenDistrChart alt='Token Distribution Chart, covered in White Paper'/>
            </StyledTokenDistrChartContainer>
            <StyledTokenDistrText>
                Regardless of sales or allocation, the Brazillian holding company will buy:
            </StyledTokenDistrText>

            <StyledTokenDistrDataContainer>
                <StyledDistrDataContainer>
                    <StyledDataContainerTitle>
                        1 sq m
                    </StyledDataContainerTitle>
                    <StyledDataContainerText>
                        Amazon Land
                    </StyledDataContainerText>
                </StyledDistrDataContainer>
                <StyledMiddleDataContainer>
                    =
                </StyledMiddleDataContainer>
                <StyledDistrDataContainer>
                    <StyledDataContainerTitle>
                        1
                    </StyledDataContainerTitle>
                    <StyledDataContainerText>
                        Rainforest Token
                    </StyledDataContainerText>
                    <StyledDataContainerText>
                        Generated
                    </StyledDataContainerText>
                </StyledDistrDataContainer>
            </StyledTokenDistrDataContainer>
        </StyledTokenDistrContainer>
    )
}

export default TokenomicsComponent;