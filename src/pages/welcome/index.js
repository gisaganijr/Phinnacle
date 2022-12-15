import React, { useState, useRef, useEffect, memo, forwardRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import compose from 'recompose/compose';
import { renameProp } from 'recompose';
import windowDimensions from 'react-window-dimensions';
import { isWideScreen as _isWideScreen } from 'utils/isWideScreen';
import withWidth from '@material-ui/core/withWidth';
import { routeUrl } from 'constants';
import styled from 'styled-components';
import { appWelcomeBgColor, appBarMinHeight } from 'variables'

const ContentWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${appWelcomeBgColor}
`

const StyledVideo = styled.video`
    position: absolute;
    top:  ${props => props.contentType === 'mobile' ? "40%" : "50%"};
    left: 0;
    transform: translateY(${props => props.contentType === 'mobile' ? "-40%" : "-50%"});
    right: 0;
    margin: auto;
    min-height: ${props => props.hasSrc ? '100%' : '0px'};
    min-width: 100%;
    max-width: 150%;
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: 1;
`

const Video = React.memo((forwardRef(({ src, srcMobile, contentType}, ref) => {
  const videoRef = useRef();

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }
    
    videoRef.current.defaultMuted = true;
    videoRef.current.muted = true;
  }, [])

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    const videoSrc = contentType === 'desktop' ? src : srcMobile;
    if (videoSrc !== '' || videoRef.current.src !== videoSrc) {
      videoRef.current.src = videoSrc;
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
    }
  }, [contentType]);

  return (
    <StyledVideo
      ref={videoRef}
      data-desktop={src}
      data-mobile={srcMobile}
      width="100%" height="auto"
      playsInline //FIX iOS black screen
      autoPlay
      preLoad
    />
  );
})))

const Index = forwardRef(({
  height, width,
  widthCat,
  isWideScreen,
  device, orientation,
}, ref) => {
  const MAX_TIME = 5000;
  const navigate = useNavigate();
  const [contentType, setContentType] = useState();

  useEffect(() => {
    setContentType(getContentType(width, height)); 
  }, [width, height])

  useEffect(() => {
    setTimeout(() => navigate(routeUrl.HOME), MAX_TIME);
  });

  let _height = height;
  if (!isWideScreen)
    _height = height - appBarMinHeight;

  function getContentType(_width, _height) {
    const _device = !!navigator.maxTouchPoints ? 'mobile' : 'desktop';
    if (_device === 'mobile') {
      if (_width < _height) 
        return 'mobile';
    }

    return 'desktop';
  }
  
  if (contentType === null) 
    return null;
  
  const videoSrc = `${process.env.PUBLIC_URL}/videos/welcome.mp4`;
  const videoMobileSrc = `${process.env.PUBLIC_URL}/videos/welcome_mobile.mp4`;

  return (
    <ContentWrapper>
        <Video 
            contentType={contentType}
            src={videoSrc} srcMobile={videoMobileSrc} 
        />
    </ContentWrapper>
  )
})

export default compose(
  memo,
  compose(withWidth(), renameProp('width', 'widthCat')),
  windowDimensions()
)(Index);  