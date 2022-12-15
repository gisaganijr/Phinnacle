import React, { useEffect, useState, useRef, memo } from 'react';
import styled from 'styled-components';
import classNames from "classnames";
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

const ContactUs = (props) => {
    const { width, height, widthCat } = props;
    const toggleMenuMobile = useGlobalStore((state) => state.toggleMenuMobile);
    const [isWideScreen, setIsWideScreen] = useState(false);
    const contentWidth = isWideScreen ? '80%' : '100%';
    const [contentType, setContentType] = useState();
   
    useEffect(() => {
        setContentType(getContentType(width, height)); 
        setIsWideScreen(_isWideScreen(widthCat));
    }, [width, height]);
 
    const isMobile = contentType === 'mobile';
    const customWidthCat = getCustomWidthCat(widthCat, width);
    const title = {
        'xs': <><span>Ready to achieve your vision?</span><br /><span>Let's make it happen.</span></>,
        'sm': <><span>Ready to achieve your vision?</span><br /><span>Let's make it happen.</span></>,
        'md': <><span>Ready to achieve your vision? Let's make it happen.</span></>,
        'lg': <><span>Ready to achieve your vision? Let's make it happen.</span></>,
        'xl': <><span>Ready to achieve your vision? Let's make it happen.</span></>,
    }
     
    return (
        <>
            <Header
                bgColor={colors.violet}
                color={colors.white} 
                widthCat={widthCat}
                width={width}
                isMobile={isMobile}
                textMenuIcon
                onMenuClick={toggleMenuMobile}
            />
            <div style={{ marginTop: headerConfig.maxHeight }}>
                <PageSection widthCat={widthCat} centerAlign isMobile={isMobile} color={colors.white} bgColor={colors.violet}>
                    <div class='flex flex-col items-start justify-start' style={{ width: contentWidth, maxWidth: contentWidth }}>
                        <P size="sm" twClass="mb-2">
                            { title[customWidthCat] }
                        </P>
                        <P twClass="mb-12" fontType="bold" header noMargin widthCat={widthCat} size={isWideScreen ? 'xl' : 'lg'} style={{color: colors.white, ...isWideScreen ? { letterSpacing: '2px' } : null }}>
                            contactus@phinnacleit.com
                        </P>
                        <div className={classNames('w-full flex items-start', isWideScreen ? 'flex-row' : 'flex-col')}>
                            <div className={classNames(!isWideScreen ? 'mb-8' : null)} style={{ minWidth: '30%' }}>
                                <P twClass={isWideScreen ? 'mb-2' : null} fontType="bold">USA</P>
                                <P fontType="light">125 S King Street</P>
                                <P fontType="light">PO Box 2922</P>
                                <P fontType="light">Jackson, Wyoming</P>
                                <P fontType="light">83001</P>
                            </div>

                            <div style={{ minWidth: '30%' }}>
                                <P twClass="isWideScreen ? 'mb-2' : null" fontType="bold">Philippines</P>
                                <P fontType="light">Units 2105 & 2106</P>
                                <P fontType="light">Richville Corporate Tower 1107</P>
                                <P fontType="light">Alabang–Zapote Rd, Madrigal Business Park</P>
                                <P fontType="light">Ayala Alabang, Muntinlupa</P>
                                <P fontType="light">1780 Metro Manila</P>
                            </div>
                        </div>
                    </div>
                </PageSection>
            </div>
        </>
    )
}

export default compose(
    memo,
    compose(withWidth(), renameProp('width', 'widthCat')),
    windowDimensions()
  )(ContactUs);  