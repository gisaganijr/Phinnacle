import React, { useEffect, useState, useRef, memo, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import compose from 'recompose/compose';
import { renameProp } from 'recompose';
import windowDimensions from 'react-window-dimensions';
import { isWideScreen as _isWideScreen } from 'utils/isWideScreen';
import withWidth from '@material-ui/core/withWidth';
import useIntersection from 'common/useIntersection';
import { appBgColor, colors, outlinedButton, margin } from 'variables';
import { getContentType } from 'helpers';
import { isMediumAndSmaller } from 'utils/screenWidth';
import P from 'components/p';
import { routeUrl } from 'constants';
import useStore from './store';
import useGlobalStore from 'store';
import SidebarMenu from 'components/sidebar-menu';
import Header from 'components/header';
import HeaderMobile from 'components/header-mobile';
import Slider from './slider';
import HeadlineDetail from './headline-detail';
import CustomOutlinedButton from 'components/custom-outlined-button';

export function HomePage({
  width,
  height,
  widthCat
}) {
  const navigate  = useNavigate();

  const toggleMenuMobile = useGlobalStore((state) => state.toggleMenuMobile);
  const sliders = useStore((state) => state.sliders);
  const activeSlideIndex = useStore((state) => state.activeSlideIndex);
  const prevSlideIndex = useStore((state) => state.prevSlideIndex);
  const selectedSlider = useStore((state) => state.selectedSlider);
  const changeSlide = useStore((state) => state.changeSlide);

  const [isWideScreen, setIsWideScreen] = useState(false);
  const [device, setDevice] = useState(!!navigator.maxTouchPoints ? 'mobile' : 'desktop');
  const [orientation, setOrientation] = useState('portrait');
  const [contentType, setContentType] = useState();

  useEffect(() => {
    setContentType(getContentType(width, height)); 
    setIsWideScreen(_isWideScreen(widthCat));
  }, [width, height]);

  const isMobile = contentType === 'mobile';
  const sliderRef = useRef();
  const isSliderInViewport = useIntersection(sliderRef, '0px'); // Trigger as soon as the element becomes visible
  
  return (
    <>
      <Header 
        bgColor={!isSliderInViewport ? colors.white : 'transparent'} 
        logoColor={!isSliderInViewport ? colors.violet : colors.white} 
        color={!isSliderInViewport ? colors.violet : colors.white} 
        showShadow={!isSliderInViewport} 
        widthCat={widthCat}
        width={width}
        isMobile={isMobile}
        textMenuIcon
        onMenuClick={toggleMenuMobile}
      /> 

      <div ref={sliderRef}>
        <Slider 
          sliders={sliders} activeSlideIndex={activeSlideIndex} activeSlide={selectedSlider} 
          prevSlideIndex={prevSlideIndex} changeSlide={changeSlide} 
          isWideScreen={isWideScreen} widthCat={widthCat} width={width} height={height} isMobile={isMobile} />
      </div>

      <HeadlineDetail 
        widthCat={widthCat} width={width} color={colors.white} bgColor={colors.violet} titleColor={colors.white} 
        title={sliders[0].subTitle}
        isWideScreen={isWideScreen} isMobile={isMobile}
      >
        <P size="sm" twClass="mb-4">
          We are a Manila-based IT solutions and consultancy company. 
          Our firm is composed of exceptional professionals with extensive local and international experience. 
          We take pride in a more hands-on approach with our client partners that result in 
          deeper understanding of your business needs, smoother turn-around and a more cost-efficient output.
        </P>

        <div class="pt-1">
          <CustomOutlinedButton 
            {...outlinedButton.light} bold={false} size="small" 
            onClick={() => navigate(routeUrl.OVERVIEW)}
          >
            READ MORE
          </CustomOutlinedButton>
        </div>
      </HeadlineDetail>
      
      <HeadlineDetail 
        widthCat={widthCat} width={width} color={colors.black} bgColor={colors.lightGray} titleColor={colors.black}
        title={sliders[1].subTitle}
        isWideScreen={isWideScreen} isMobile={isMobile}
      >
        <P size="sm" twClass="mb-4">
          What makes working with Phinnacle IT ideal? It is in our set-up. In this era, what comes to mind when “offshore or outsourcing” is oftentimes large multinational BPO companies. While working with large BPO companies has its advantages, it usually is more ideal for the largest clients as well. This model can be more expensive as it is usually provided by a BPO company who hire numerous middle-men to liaise between the internal and external teams. Another downside is usually having very limited control on how large BPO companies approach the work process which often leads to less than ideal quality output. 
        </P>
        <div class="pt-1">
          <CustomOutlinedButton 
            {...outlinedButton.dark} bold={false} size="small"
            onClick={() => navigate(routeUrl.DIGITIZE_WITH_US)}
          >
            READ MORE
          </CustomOutlinedButton>
        </div>
      </HeadlineDetail>

      <HeadlineDetail 
        widthCat={widthCat} width={width} color={colors.white} bgColor={colors.darkViolet} titleColor={colors.white}
        title={sliders[2].subTitle}
        isWideScreen={isWideScreen} isMobile={isMobile}
      >
        <P size="sm" twClass="mb-4">
          To thrive in these fast evolving times, it is inevitable that organizations adapt into having automated, technology-enabled and more intelligent systems in every facet of their businesses. With our team of talented professionals, we will work with your organization to transform your business towards achieving better operational efficiencies and having more streamlined processes. 
        </P>
        
        <div class="pt-1">
          <CustomOutlinedButton 
            {...outlinedButton.light} bold={false} size="small"
            onClick={() => navigate(routeUrl.TRANSFORMING_YOUR_NEEDS)}
          >
            READ MORE
          </CustomOutlinedButton>
        </div>
      </HeadlineDetail>
    </>
  );
}

export default compose(
  memo,
  compose(withWidth(), renameProp('width', 'widthCat')),
  windowDimensions()
)(HomePage);

