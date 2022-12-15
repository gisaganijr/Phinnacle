import React, { useEffect, useState, useRef, memo } from 'react';
import styled from 'styled-components';
import compose from 'recompose/compose';
import { renameProp } from 'recompose';
import windowDimensions from 'react-window-dimensions';
import { isWideScreen as _isWideScreen } from 'utils/isWideScreen';
import withWidth from '@material-ui/core/withWidth';
import useIntersection from 'common/useIntersection';
import { colors, headerConfig } from 'variables';
import { getCustomWidthCat, isMediumAndSmaller, isSmallAndExtraSmall } from 'utils/screenWidth';
import PageSection  from 'components/page-section';
import { getContentType } from 'helpers';
import P from 'components/p';
import useGlobalStore from 'store';
import Header from 'components/header';
import Services from './services';
import CompanyNameEmphasized from 'components/company-name-emphasized';

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
    height: 60%;
`

const TransformingYourNeeds = (props) => {
    const { width, height, widthCat } = props;
    const toggleMenuMobile = useGlobalStore((state) => state.toggleMenuMobile);
    const [isWideScreen, setIsWideScreen] = useState(false);
    const [contentType, setContentType] = useState();
   
    useEffect(() => {
        setContentType(getContentType(width, height)); 
        setIsWideScreen(_isWideScreen(widthCat));
    }, [width, height]);

    const isMobile = contentType === 'mobile';
    const mainImageRef = useRef();
    // const isInMainImageViewport = useIntersection(mainImageRef, '0px'); // Trigger as soon as the element becomes visible
    const isInMainImageViewport = false;  
    let mainImageSrc = `${process.env.PUBLIC_URL}/images/transforming-your-needs/Desktop_TransformingYourNeeds.jpg`;
    if (isMobile) {
        // to do: mobile image
        mainImageSrc = `${process.env.PUBLIC_URL}/images/transforming-your-needs/Mobile_TransformingYourNeeds.jpg`;
    }

    const customWidthCat = getCustomWidthCat(widthCat, width);
    const title = {
        'xs': <><span>TRANSFORMING</span><br /><span>YOUR NEEDS</span></>,
        'sm': <><span>TRANSFORMING</span><br /><span>YOUR NEEDS</span></>,
        'md': <><span>TRANSFORMING YOUR NEEDS</span></>,
        'lg': <><span>TRANSFORMING YOUR NEEDS</span></>,
        'xl': <><span>TRANSFORMING YOUR NEEDS</span></>,
    }

    return (
        <>
            <Header 
                bgColor={!isInMainImageViewport ? colors.white : 'transparent'} 
                logoColor={!isInMainImageViewport ? colors.violet : colors.white} 
                color={!isInMainImageViewport ? colors.violet : colors.white} 
                showShadow={!isInMainImageViewport} 
                widthCat={widthCat}
                width={width}
                isMobile={isMobile}
                textMenuIcon
                onMenuClick={toggleMenuMobile}
            />
            <div style={{ marginTop: headerConfig.maxHeight }}>
                <img 
                    ref={mainImageRef}
                    src={mainImageSrc}
                    width='100%'
                    height='100%'
                />
            </div>

            <PageSection widthCat={widthCat} centerAlign isMobile={isMobile}>
                <div class='flex flex-col items-start' style={{ maxWidth: isWideScreen ? '80%' : '100%' }}>
                    <P twClass="mb-4" fontType="bold" header noMargin widthCat={widthCat} size="lg" smallest="2rem" smallestLineHeight="2.5rem" style={{color: colors.violet, letterSpacing: '2px' }}>
                        { title[customWidthCat] }
                    </P>
                    <P size="sm" twClass="mb-4">
                        To thrive in these fast evolving times, it is inevitable that organizations adapt into having automated, technology-enabled and more intelligent systems in every facet of their businesses. With our team of talented professionals, we will work with your organization to transform your business towards achieving better operational efficiencies and having more streamlined processes. 
                    </P>
                    <P size="sm" twClass="mb-4">
                        Our continued desire to solve the most challenging business problems stems directly from our skills set and culture. Philippines has been known for decades to produce high caliber IT professionals who not only have the knowledge & skills but are also known for their dedication towards their jobs. We are deeply inspired to succeed and work well, not just for self-fulfillment but moreso to secure our loved ones’ well-being and to make them proud. These can very well be the factors that set apart the Filipino professionals in the global IT providers.
                    </P>
                    <P size="sm" twClass="mb-4">
                        These characteristics are also what define us at <CompanyNameEmphasized />, as we provide you with the following services as well as custom-requirements needed by your company:
                    </P>
                </div>
            </PageSection>

            <Services width={width} widthCat={widthCat} centerAlign isMobile={isMobile} />
        </>
    )
}

export default compose(
    memo,
    compose(withWidth(), renameProp('width', 'widthCat')),
    windowDimensions()
  )(TransformingYourNeeds);  