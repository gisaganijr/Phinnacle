import React, { useEffect, useState, useRef, memo } from 'react';
import styled from 'styled-components';
import compose from 'recompose/compose';
import { renameProp } from 'recompose';
import windowDimensions from 'react-window-dimensions';
import { isWideScreen as _isWideScreen } from 'utils/isWideScreen';
import withWidth from '@material-ui/core/withWidth';
import useIntersection from 'common/useIntersection';
import { colors, headerConfig } from 'variables';
import PageSection  from 'components/page-section';
import { getContentType } from 'helpers';
import { isMediumAndSmaller } from 'utils/screenWidth';
import P from 'components/p';
import useGlobalStore from 'store';
import Header from 'components/header';

const Overview = (props) => {
    const { width, height, widthCat } = props;
    const toggleMenuMobile = useGlobalStore((state) => state.toggleMenuMobile);
    const [isWideScreen, setIsWideScreen] = useState(false);
    const [contentType, setContentType] = useState();

    useEffect(() => {
        setContentType(getContentType(width, height)); 
        setIsWideScreen(_isWideScreen(widthCat));
    }, [width, height]);

    useEffect(() => {
        setContentType(getContentType(width, height)); 
    }, [width, height]);

    const isMobile = contentType === 'mobile';
    const mainImageRef = useRef();
    // const isInMainImageViewport = useIntersection(mainImageRef, '0px'); // Trigger as soon as the element becomes visible
    const isInMainImageViewport = false;  
    let mainImageSrc = `${process.env.PUBLIC_URL}/images/overview/Desktop_Overview.jpg`;
    if (isMobile) {
        // to do: mobile image
        mainImageSrc = `${process.env.PUBLIC_URL}/images/overview/Mobile_Overview.jpg`;
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
                    <P  twClass="mb-4" fontType="bold" header noMargin widthCat={widthCat} size="lg" style={{color: colors.violet, letterSpacing: '2px' }}>
                        OUR CORE IS I.T.
                    </P>
                    <P size="sm" twClass="mb-4">
                        We are a Manila-based IT solutions and consultancy company. 
                        Our firm is composed of exceptional professionals with extensive local and international experience. 
                        We take pride in a more hands-on approach with our client partners that result in 
                        deeper understanding of your business needs, smoother turn-around and a more cost-efficient output.
                    </P>
                </div>
            </PageSection>
        </>
    )
}

export default compose(
    memo,
    compose(withWidth(), renameProp('width', 'widthCat')),
    windowDimensions()
  )(Overview);  