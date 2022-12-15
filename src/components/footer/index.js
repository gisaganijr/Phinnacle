import React, { forwardRef } from 'react';
import classNames from "classnames";
import { includes } from 'lodash';
import { getCustomWidthCat, isSmallAndExtraSmall } from 'utils/screenWidth';
import PageSection  from 'components/page-section';
import CustomSVG from 'components/custom-svg';
import { colors, pageMargin } from 'variables';
import P from 'components/p';

const Footer = forwardRef((props, ref) => {
    const { isMobile, isWideScreen, widthCat, width } = props;
    
    const _isSmallAndExtraSmall = isSmallAndExtraSmall(getCustomWidthCat(widthCat, width));
    const customWidthCat = getCustomWidthCat(widthCat, width);
    return (
        <PageSection color={colors.white} bgColor={colors.footer} widthCat={widthCat} centerAlign isMobile={isMobile}>
            <div className='flex flex-col items-start justify-center' style={{ 
                minHeight: '40px', 
                minWidth: isWideScreen ? '80%' : '100%',
                maxWidth: isWideScreen ? '80%' : '100%'
            }}>
                <P size="xs">© 2022 Phinnacle IT — All rights reserved</P>
            </div>
        </PageSection>
    )
})

export default Footer;