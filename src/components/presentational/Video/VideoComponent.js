import React from 'react';
import { StyledVideoComponentWrapper, StyledIframesWrapper, StyledReactPlayerContainer } from './VideoComponentStyles';
import { KEYS } from '../../../shared/variables';

const VideoComponent = () => {
    return (
        <StyledVideoComponentWrapper>
            <StyledReactPlayerContainer>
                <StyledIframesWrapper>
                    <iframe
                        title='Video'
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%"
                        }}
                        src={`https://www.youtube.com/embed/${KEYS.videoId}`}
                        frameBorder="0"
                    />
                </StyledIframesWrapper>
            </StyledReactPlayerContainer>
        </StyledVideoComponentWrapper>
    )
}

export default VideoComponent;