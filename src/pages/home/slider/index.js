import React, { useState, useRef, useEffect, memo, forwardRef, useLayoutEffect,useImperativeHandle, useMemo } from 'react';
import styled from 'styled-components';
import { isMediumAndSmaller } from 'utils/screenWidth';
import { appBgColor, appBarMinHeight, pageMargin, colors, divider, iconSizeConfig, margin, borderColor } from 'variables'
import Main from './Main';
import Mobile from './Mobile';
import HeadlineText from './HeadlineText';
import HeadlineSubText from './HeadlineSubText';
import { useTransition, Spring, animated, config } from 'react-spring'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import Indicators from './Indicators';

const SliderMainWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`

const SliderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex!important;
  align-items: center!important;
  justify-content: center!important;
  overflow: hidden;
  margin: 0px;
  // position: absolute;
  z-index: ${props => props.zIndex}
`

const SliderInnerContentWrapper = styled.div`
  position: relative;
  height: 100%;
`

const LinearProgressWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 999;
`

const IndicatorsWrapper = styled.div`
  position: absolute;
  bottom: 30px;
  left: ${ props => !props.isMobile ? '30px' : 'unset'};
`

const StyledImage = styled.img`
    position: absolute;
    top:  ${props => props.isMobile ? "40%" : "50%"};
    left: 0;
    transform: translateY(${props => props.isMobile ? "-40%" : "-50%"});
    right: 0;
    margin: auto;
    min-height: ${props => props.hasSrc ? '100%' : '0px'};
    min-width: 100%;
    max-width: 150%;
    object-fit: cover;
    width: 100%;
    height: 100%;
`
const HeadlineTextWrapper = styled.div`
  display: flex;
  align-items: ${props => !props.isMobile ? 'center' : 'flex-end'};
  justify-content: ${props => !props.isMobile ? 'flex-start' : 'flex-end'};
  height: ${props => !props.isMobile ? '100%' : '95%'};
  margin-bottom: ${props => !props.isMobile ? '0%' : '10%'};
`
const HeadlineTextInnerWrapper = styled.div`
  margin-left: ${props => !isMediumAndSmaller(props.widthCat) ? '16%' : '8%' };
  ${props => isMediumAndSmaller(props.widthCat) && { 'margin-right': '8%' }};
  max-width: ${props => !isMediumAndSmaller(props.widthCat) ? '40%' : '60%'};
  ${props => props.isMobile ? { 
      'display': 'flex',
      'flex-direction': 'column', 
      'justify-content': 'center', 
      'align-items': 'center',
      'text-align': 'center',
      'max-width': 'unset'
    } : null
  };
`

const SliderComp = React.memo(forwardRef(({
    sliders, activeSlide, slide, isWideScreen, 
    changeSlide, loadedSlideImage,
    device, isMobile, widthCat, height, width, 
    activeSlideIndex, prevSlideIndex, zIndex
  }, ref) => {

  const imageSrc = !isMobile ? slide.imageSrc : slide.imageMobileSrc;
  
  return (
    <>
      <ParallaxLayer
        offset={slide.index}
        speed={0}
        style={{
          width: '100%',
          height: '100vh'
          // height: !isMobile ? '100vh' : '80vh',
        }}
      >
        <StyledImage 
          src={imageSrc}
          isMobile={isMobile}
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={slide.index}
        speed={0.8}
        style={{
          width: '100%',
          // height: '100vh',
          height: !isMobile ? '100vh' : '90vh',
          ...isMobile && {
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'center',
            flexDirection: 'column',
          }
        }}
      >
        <HeadlineTextWrapper isMobile={isMobile}>
          <HeadlineTextInnerWrapper isMobile={isMobile} isWideScreen={isWideScreen} widthCat={widthCat}>
            <HeadlineText widthCat={widthCat}>{ !isMobile ? slide.title : slide.titleMobile || slide.title }</HeadlineText>
            { !isMobile ? 
                <HeadlineSubText widthCat={widthCat}>{slide.subText}</HeadlineSubText>
              :
                <HeadlineSubText widthCat={widthCat}>{slide.subText}</HeadlineSubText>
            }
          </HeadlineTextInnerWrapper>
        </HeadlineTextWrapper>
      </ParallaxLayer>
    </>
  );
}))

const Slider = forwardRef(({
  sliders, 
  height, width,
  changeSlide,
  widthCat,
  selectedSlider: activeSlide,
  isWideScreen, activeSlideIndex, prevSlideIndex,
  device, orientation, loadedSlideImage, isMobile
}, ref) => {

  const parallax = useRef();
  useEffect(() => {
    parallax.current.scrollTo(activeSlideIndex);
  }, [activeSlideIndex]);
  
  let _height = height;
  if (!isWideScreen)
    _height = height - appBarMinHeight;
  
  const sliderProps = {
    sliders, isWideScreen, changeSlide, activeSlide, loadedSlideImage,
    device, widthCat, height, width, activeSlideIndex, prevSlideIndex,
    isMobile
  }
  
  return (
      <SliderMainWrapper 
        isWideScreen={isWideScreen} 
        ref={ref} id="slider"
      >
        <SliderWrapper 
          widthCat={widthCat}
          width='100%'
        >
          <Parallax ref={parallax} pages={sliders.length} horizontal={false} enabled={false}>
            <SliderComp {...sliderProps} slide={sliders[0]} />
            <SliderComp {...sliderProps} slide={sliders[1]} />
            <SliderComp {...sliderProps} slide={sliders[2]} />
          </Parallax>

          <IndicatorsWrapper isMobile={isMobile}>
            <Indicators sliders={sliders} activeSlideIndex={activeSlideIndex} changeSlide={changeSlide} widthCat={widthCat} circularProgress={true} />
          </IndicatorsWrapper>
          { 
              isMobile && 
              <LinearProgressWrapper>
                <Indicators sliders={sliders} activeSlideIndex={activeSlideIndex} changeSlide={changeSlide} widthCat={widthCat} circularProgress={false} />
              </LinearProgressWrapper>
          }
        </SliderWrapper>
      </SliderMainWrapper>
  )
})

export default Slider;
