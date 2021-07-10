import React from 'react';
import { StyledMainComponentWrapper } from './MainStyles';
import NavigationComponent from '../../functional/Nav/NavigationComponenet';
import FooterComponent from '../Footer/FooterComponent';
import HeroComponent from '../Hero/HeroComponent';
import WhitepaperComponent from '../Whitepaper/WhitepaperComponent';
import MissionComponent from '../Mission/MissionComponent';
import TokenomicsComponent from '../Tokenomics/TokenomicsComponent';
import VideoComponent from '../Video/VideoComponent';
import SolutionComponent from '../Solution/SolutionComponent';

const MainComponent = () => {
    //React-scroll uses id to scroll. Must be set on html div
    return (
        <StyledMainComponentWrapper>
            <NavigationComponent />
            
            <div id="pageTop">
                <HeroComponent />
            </div>

            <VideoComponent />
          
            <div id="missionLink">
                <MissionComponent />
            </div>

            <SolutionComponent />
        
            <div id="tokenLink">
                <TokenomicsComponent />
            </div>
           
            <div id="whitepaperLink">
                <WhitepaperComponent />
            </div>
            
            <FooterComponent />
        </StyledMainComponentWrapper>
    )
}

export default MainComponent;