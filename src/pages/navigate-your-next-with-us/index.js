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
import CompanyNameEmphasized from 'components/company-name-emphasized';
import Header from 'components/header';

const NavigateYourNextWithUs = (props) => {
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
    let mainImageSrc = `${process.env.PUBLIC_URL}/images/navigate-your-next/Desktop_NavigateYourNext.jpg`;
    if (isMobile) {
        // to do: mobile image
        mainImageSrc = `${process.env.PUBLIC_URL}/images/navigate-your-next/Mobile_NavigateYourNext.jpg`;
    }

    const customWidthCat = getCustomWidthCat(widthCat, width);
    const title = {
        'xs': <><span>DIGITIZE WITH US</span></>,
        'sm': <><span>DIGITIZE WITH US</span></>,
        'md': <><span>DIGITIZE WITH US</span></>,
        'lg': <><span>DIGITIZE WITH US</span></>,
        'xl': <><span>DIGITIZE WITH US</span></>,
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
                    <P twClass="mb-4" fontType="bold" header noMargin widthCat={widthCat} size="lg" style={{color: colors.violet, letterSpacing: '2px' }}>
                        { title[customWidthCat] }
                    </P>
                    <P size="sm" twClass="mb-4">
                     What makes working with <CompanyNameEmphasized /> ideal? It is in our set-up. In this era, what comes to mind when “offshore or outsourcing” is oftentimes large multinational BPO companies. While working with large BPO companies has its advantages, it usually is more ideal for the largest clients as well. This model can be more expensive as it is usually provided by a BPO company who hire numerous middle-men to liaise between the internal and external teams. Another downside is usually having very limited control on how large BPO companies approach the work process which often leads to less than ideal quality output. 
                    </P>
                    <P size="sm" twClass="mb-4">
                        On the other end is the option to directly work with individual software developers or freelancers. This offshore approach usually involves searching for the right individual freelancer for each project. While this comes as the most affordable approach, it also most often the most risky and time-consuming approach, as it will involve several layers of vetting process and negotiating with the freelancer’s capacity planning. An individual freelancer often has less best practices nor capacity to readily approach your comprehensive or full scale IT requirement. 
                    </P>
                    <P size="sm" twClass="mb-4">
                        While Service Level Agreements (SLAs) can mitigate risks of working with BPOs or individual freelancers, it is usually more costly and time-consuming to cut ties with either providers in the middle of a problematic work process and find a new provider.
                    </P>
                    <P size="sm">
                        With <CompanyNameEmphasized /> you get the best of both worlds—the discipline and vast experience similar to working with a BPO provider while also havingthe more hands-on and cost-efficient approach of communicating directly with the individuals who will be involved in the actual work. That is because we are basically a group of like-minded lead IT professionals who are proficient in our niche fields in the IT sector and who will directly manage each projects. We can fully understand your technology needs, we have personal experience on how to address them, and we work witha lean but efficient team of IT personnel from the Philippines who are set to provide excellent work. 
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
  )(NavigateYourNextWithUs);  