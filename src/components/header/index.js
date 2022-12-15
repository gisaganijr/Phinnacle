import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import P from 'components/p';
import { pageMargin } from 'variables';
import { routeUrl } from 'constants';
import { colors, headerConfig } from 'variables';
import { getCustomWidthCat, isMediumAndSmaller as _isMediumAndSmaller, isSmallAndExtraSmall as _isSmallAndExtraSmall } from 'utils/screenWidth';
import Logo from 'components/logo';
import MenuIcon from 'components/menu-icon';
import CustomButton from 'components/custom-button';
import CustomIconButton from 'components/custom-icon-button';
import { ReactComponent as TriangleMenu } from 'svg/Triangle_Menu.svg';

export function Header({ bgColor = 'transparent', logoColor = colors.white, color = colors.white, showShadow = false, isMobile = false, widthCat, width, textMenuIcon = false, onMenuClick }) {
  const navigate = useNavigate();
  
  const [isSmallAndExtraSmall, setIsSmallAndExtraSmall] = useState(false);
  const [isMediumAndSmaller, setIsMediumAndSmaller] = useState(false);
  const customWidthCat = getCustomWidthCat(widthCat, width);
  
  useEffect(() => {
    setIsSmallAndExtraSmall(_isSmallAndExtraSmall(getCustomWidthCat(widthCat, width)));
    setIsMediumAndSmaller(_isMediumAndSmaller(getCustomWidthCat(widthCat, width)));
  }, [width, widthCat]);

  const getLogoWidth = (_widthCat) => {
    switch(_widthCat) {
      case 'xs' :
        return '50%';
      case 'sm': {
        return '40%';
      }
      case 'md': {
        return '30%';
      }
      case 'lg' :
      case 'xl': {
        return '20%';
      }
    }
  }  

  return (
    <div 
      className='flex flex-row items-center justify-between' 
      style={{
        position: 'fixed', width: '100vw', top: 0, left: 0, 
        minHeight: headerConfig.minHeight, maxHeight: headerConfig.maxHeight,
        padding: '40px 40px',  
        ...isMediumAndSmaller && { paddingRight: '12px' },
        zIndex: '999',
        backgroundColor: bgColor,
        boxShadow: showShadow ? '0 1px 0 rgb(0 0 0 / 10%)' : 'none'
      }}
    >
      <div className="pt-1" style={{ width: getLogoWidth(widthCat) }}>
        <Logo width="100%" color={logoColor} onClick={() => navigate(routeUrl.HOME)} />
      </div>
      { isMediumAndSmaller ? (
        <CustomButton 
          color={color}
          aria-label="menu"
          size="large"
          fontSize={isSmallAndExtraSmall ? '1.5rem' : '1.75rem'}
          onClick={onMenuClick}
        >
          <i className="fa-solid fa-bars"></i>
        </CustomButton>
      ) : (
        <P 
          fontType="medium" noMargin widthCat={widthCat} size="sm" 
          style={{
              color, letterSpacing: '1px', cursor: 'pointer'
          }}
          onClick={onMenuClick}
        >
          MENU
        </P>
      )}
    </div>
  );
}

export default Header

