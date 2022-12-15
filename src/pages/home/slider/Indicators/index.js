import React from 'react';
import styled from 'styled-components';
import Item from './Item';
import { config } from 'react-spring'
import { CustomSpring } from 'components/spring';

const MainWrapper = styled.div`
  ${props => props.circularProgress && { "height": "70px" }};
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Indicators = ({sliders, activeSlideIndex, changeSlide, widthCat, hideProgress, circularProgress = true}) => {
  return (
    <CustomSpring
      startAni={true}
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      leave={{ opacity: 0 }}
      config={{...config.gentle}}
      noLoader={true}
      delay={100}
      renderAni={(aniProps) => (
        <MainWrapper style={{...aniProps ? { ...aniProps } : { opacity: 0 }}} widthCat={widthCat} circularProgress={circularProgress}>
          {
            sliders.map((slider, idx) => (
              <Item key={idx} sliders={sliders} slider={slider} activeSlideIndex={activeSlideIndex} isActiveSlide={activeSlideIndex === idx ? true : false} changeSlide={changeSlide} hideProgress={hideProgress} circularProgress={circularProgress} />
            ))
          }
        </MainWrapper>
      )}
    />
  )
}

export default Indicators;