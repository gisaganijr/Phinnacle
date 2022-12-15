import React, { useRef, useState, useEffect, memo, forwardRef } from 'react';
import styled from 'styled-components';
import { colors } from 'variables'
import HeadlineText from './HeadlineText';

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 30%;
  ${props => props.height >= 700 ? {padding: "2rem 3rem"} : {padding: "2rem 2rem 0rem 2rem"}};
`

const TextInnerWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Mobile = forwardRef(({
  sliders, 
  height, width,
  changeSlide,
  widthCat,
  activeSlide,
  slide,
  isWideScreen, activeSlideIndex
}, ref) => {
  const [localActiveSlideIndex, setLocalActiveSlideIndex] = useState(0);
  const textInnerRef = useRef();
  const textInnerHeight = textInnerRef && textInnerRef.current && textInnerRef.current.clientHeight;
  
  useEffect(() => {
    setLocalActiveSlideIndex(activeSlideIndex);
  }, [activeSlideIndex])

  if (activeSlideIndex !== slide.index) 
    return null;
    
  return (
      <>
        <TextWrapper 
          widthCat={widthCat}
        >
          <TextInnerWrapper ref={textInnerRef} height={height}>
            <HeadlineText widthCat={widthCat} isWideScreen={isWideScreen} width={width} height={height} innerHeight={textInnerHeight} activeSlideIndex={activeSlideIndex}>
              {slide.title}
            </HeadlineText>
          </TextInnerWrapper>
        </TextWrapper>
      </>
  )
})

export default Mobile;
