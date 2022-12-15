import React, { useEffect, useState, useRef, memo } from 'react';
import { Link } from '@material-ui/core';
import styled from 'styled-components';
import compose from 'recompose/compose';
import { renameProp } from 'recompose';
import windowDimensions from 'react-window-dimensions';
import { isWideScreen as _isWideScreen } from 'utils/isWideScreen';
import withWidth from '@material-ui/core/withWidth';
import useIntersection from 'common/useIntersection';
import { find } from 'lodash';
import { colors, headerConfig } from 'variables';
import { getCustomWidthCat, isMediumAndSmaller, isSmallAndExtraSmall } from 'utils/screenWidth';
import PageSection  from 'components/page-section';
import { getContentType } from 'helpers';
import P from 'components/p';
import useGlobalStore from 'store';
import Header from 'components/header';
import { services as data } from './data';

const Services = (props) => {
    const { width, height, widthCat } = props;
    const [service, setService] = useState(data[0]);
    const [selectedService, setSelectedService] = useState(data[0].name);
    
    const toggleMenuMobile = useGlobalStore((state) => state.toggleMenuMobile);
    const [isWideScreen, setIsWideScreen] = useState(false);
    const [contentType, setContentType] = useState();
    const _isMediumAndSmaller = isMediumAndSmaller(widthCat);
    
    useEffect(() => {
        const _service = find(data, function(o) { return o.name === selectedService; });
        setService(_service);
    }, [selectedService])
    

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
                <div class="flex flex-row">
                    { !_isMediumAndSmaller &&
                        <div>
                            {
                                data.map((_service) => (
                                    <P
                                        size="sm" 
                                        twClass="mb-2"
                                    >
                                        <Link 
                                            color="inherit" variant="inherit" 
                                            onClick={() => setSelectedService(_service.name)}
                                            style={{ cursor: !_service.disabled ? 'pointer' : 'unset' }}
                                        >
                                            {_service.title}
                                        </Link>
                                    </P>
                                ))
                            }
                        </div>
                    }
                    <div class='flex flex-col items-start' style={{ maxWidth: isWideScreen ? '80%' : '100%' }}>
                        <P twClass="mb-4" fontType="bold" header noMargin widthCat={widthCat} size="lg" style={{color: colors.violet, letterSpacing: '2px' }}>
                            {  service.customTitle || service.title }
                        </P>
                        { service.description }
                    </div>
                </div>
            </PageSection>
        </>
    )
}

export default compose(
    memo,
    compose(withWidth(), renameProp('width', 'widthCat')),
    windowDimensions()
  )(Services);  