
import React from 'react';
import { find } from "lodash";
import { Box, IconButton } from '@material-ui/core';
import { lighten, desaturate } from 'polished'
import CircularProgress from './CircularProgress'
import LinearProgress from './LinearProgress';
import Dot from './Dot';

const Item = ({ sliders, slider, activeSlideIndex, isActiveSlide, changeSlide, hideProgress = false, circularProgress = true }) => {

  const activeSlide = find(sliders, (slider) => slider.index === activeSlideIndex);
  
  function nextSlide() {
    let nextSlideIndex = activeSlideIndex + 1;
    if (activeSlideIndex === sliders.length - 1)
      nextSlideIndex = 0;

    changeSlide(nextSlideIndex)
  }

  function selectSlide() {
    changeSlide(slider.index);
  }

  return (
      circularProgress ?
        <IconButton key={`slider-indicator-${slider.index}`} onClick={selectSlide}>
          <CircularProgress 
            keyId={`slider-circular-progresss-${slider.index}`}
            variant="determinate" 
            sliders={sliders} 
            dotColor={lighten(0.08, activeSlide.indicatorColor)}
            activeSlideIndex={activeSlideIndex} 
            isActive={isActiveSlide}  
            nextSlide={nextSlide}
            // color={lighten(0.08, activeSlide.indicatorColor)}
            hideProgress={hideProgress}
          />
        </IconButton>
      : 
        <LinearProgress 
          keyId={`slider-circular-progresss-${slider.index}`}
          variant="determinate" 
          sliders={sliders} 
          dotColor={lighten(0.08, activeSlide.indicatorColor)}
          activeSlideIndex={activeSlideIndex} 
          isActive={isActiveSlide}  
          nextSlide={nextSlide}
          // color={lighten(0.08, activeSlide.indicatorColor)}
          hideProgress={hideProgress}
        />
  )
}

export default Item;