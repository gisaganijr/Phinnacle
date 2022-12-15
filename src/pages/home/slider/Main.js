import React, { useState, useEffect, memo, forwardRef } from 'react';
import './index.css'
import { includes } from "lodash"
import styled from 'styled-components';
import Indicators from './Indicators';
import P from 'components/p';
import { colors } from 'variables'
import { getContentType } from 'helpers';
const key = 'home2';


const VideoWrapper = styled.div`
  ${props => !includes(['xs', 'sm'], props.widthCat) ? {
    position: 'absolute',
    width: '90%',
    top: '5%',
    left: '-28%'
  } : {
    position: 'relative',
    display: 'flex',
    "flex-direction": 'column',
    "justify-content": 'center',
    "align-items": 'center'
  }}
  //background: ${props => props.bgColor}
`

const TextWrapper = styled.div`
  ${props => props.contentType === 'desktop' ? {
    width: '45%',
    position: 'absolute',
    top: '0px',
    left: '15%',
    height: '100%'
  } : {
    padding: '2rem 3rem',
  }};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const RightPanelInnerWrapper = styled.div`
  ${props =>  !includes(['xs', 'sm'], props.widthCat) && { position: 'relative' }};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Main = forwardRef(({
  sliders, 
  height, width,
  changeSlide,
  widthCat,
  activeSlide, slide,
  isWideScreen, activeSlideIndex, contentType
}, ref) => {

  const [bgColor, setBgColor] = useState(false);
  const [localActiveSlideIndex, setLocalActiveSlideIndex] = useState(0);
  const [localWidthCat, setLocalWidthCat] = useState(null);

  useEffect(() => {
      setLocalActiveSlideIndex(activeSlideIndex);
  }, [activeSlideIndex])
  
  useEffect(() => {
      setLocalWidthCat(widthCat);
  }, [widthCat])

  return (
      localActiveSlideIndex === activeSlideIndex ?
        <>
          <TextWrapper 
            contentType={contentType}
          >
            <RightPanelInnerWrapper>
              {/* <TextInnerWrapper>
                {
                  localWidthCat === widthCat ?
                  
                  <HeadlineText widthCat={widthCat} isWideScreen={isWideScreen} width={width} height={height} activeSlideIndex={activeSlideIndex}>
                    {slide.title}
                  </HeadlineText>
                  
                  : null
                }
              </TextInnerWrapper> */}

              
            </RightPanelInnerWrapper>
          </TextWrapper>
        </> 
        : null 
    )
})

export default Main;
