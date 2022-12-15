import React, { forwardRef } from 'react';
import classNames from "classnames";
import { isMediumAndSmaller } from 'utils/screenWidth';
import PageSection  from 'components/page-section';
import CustomSVG from 'components/custom-svg';
import P from 'components/p';
import { ReactComponent as ForwardArrow } from 'svg/Forward_Arrow.svg';

const Title = ({ text, color, widthCat }) => {
    return (
        <P fontType="medium" header noMargin widthCat={widthCat} size="lg" style={{color: color, letterSpacing: '2px' }}>
            { text }
        </P>
    )
}

const Icon = ({ color, isMediumAndSmaller }) => {
    const _width = !isMediumAndSmaller ? '50px' : '1.6rem';

    return (
        <div className={classNames(!isMediumAndSmaller ? 'pr-4' : '')} style={{ 
            color: color,
            width: _width,
            minWidth: _width,
            maxWidth: _width,
        }}>
            <CustomSVG 
                component={ForwardArrow} 
                viewBox='0 0 38.02 23.7'
            />
        </div>
    )
}

const HeadlineDetail = forwardRef((props, ref) => {
    const { widthCat, width, color, bgColor, titleColor, title, isMobile, children, noPaddingBottom } = props;
    const _isMediumAndSmaller = isMediumAndSmaller(widthCat);
    
    const getTitleWidthCat = (_widthCat, _width) => {
        if (_widthCat === 'sm' && _width <= 896) {
            return 'md';
        }

        return _widthCat;
    } 
    const titleWidthCat = getTitleWidthCat(widthCat, width);

    return (
        <PageSection ref={ref} color={color} bgColor={bgColor} widthCat={widthCat} centerAlign isMobile={isMobile} noPaddingBottom={noPaddingBottom}>
            { !_isMediumAndSmaller ? (
                <div class='flex flex-row items-start' style={{ maxWidth: '80%' }}>
                     {/* <div>
                        <Icon color={color} isMediumAndSmaller={_isMediumAndSmaller} />
                    </div> */}
                    <div>
                        <div class="mb-8" style={{ marginTop: !_isMediumAndSmaller ? '-6px' : '-2px' }}>
                            <Title text={title[titleWidthCat]} widthCat={titleWidthCat} color={color} />
                        </div>
                        { children }
                    </div>
                </div>
            ) : (
                <div class='flex flex-col items-start' style={{ maxWidth: '100%' }}>
                    <div class="flex flex-row items-start" style={{ color: color }}>
                        {/* <Icon color={color} isMediumAndSmaller={_isMediumAndSmaller} /> */}
                        <div style={{ marginTop: '-2.5px' }}>
                            <Title text={title[titleWidthCat]} widthCat={titleWidthCat} color={color} />
                        </div>
                    </div>
                    <div class="mt-6">
                        { children }
                    </div>
                </div>
            )
        }
        </PageSection>
    )
})

export default HeadlineDetail;