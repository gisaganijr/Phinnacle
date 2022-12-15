import React, { useState } from 'react';
import { colors } from 'variables'
import classNames from "classnames";
import P from 'components/p';
import { ReactComponent as ForwardArrow } from 'svg/Forward_Arrow.svg';
import CustomSVG from 'components/custom-svg';

const Icon = ({ color }) => {
    const _width = '2.1rem';
    return (
        <div style={{ 
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


const Item = ({ menuId, totalMenu, children, url, onClick, widthCat, width, height, innerHeight, activeSlideIndex, isWideScreen, 
    hoveredMenu, setHoveredMenu, isMobile, disabled
}) => {
 
  return (
    <div 
        className={classNames("flex flex-row items-start", totalMenu !== menuId && 'mb-8')} style={{ color: colors.white }} 
        onMouseEnter={() => !disabled && setHoveredMenu(menuId) }
        onMouseLeave={() => {}}
    >
        { 
            !isMobile && 
            <Icon color={hoveredMenu === menuId ? colors.white : 'transparent'} /> 
        }
        <div class="pl-6" style={{ marginTop: '-6px' }}>
        <P 
            fontType="medium" header
            noMargin widthCat={widthCat} size="xl"
            style={{color: colors.white, letterSpacing: '2px', cursor: !disabled ? 'pointer' : 'unset'  }}
            customLineHeight="2.5rem"
            onClick={() => !disabled ? onClick(url) : {}}
        >
            {children}
        </P>
        </div>
    </div>
   
  )
}

export default React.memo(Item);
