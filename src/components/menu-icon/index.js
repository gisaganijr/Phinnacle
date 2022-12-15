import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { margin, smallMargin, colors } from 'variables';
import CustomIconButton from 'components/custom-icon-button';
import CustomSVG from 'components/custom-svg';
import { ReactComponent as TriangleMenu } from 'svg/Triangle_Menu.svg';

const Icon = () => (
  <CustomSVG 
    component={TriangleMenu} 
    viewBox='0 0 9.75 8.44'
  />
);

const MenuIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 40px;
  right: 40px;
  z-index: 999;
  left: ${margin.page.left};
`


const MenuIcon = forwardRef(({hide, onClick, color, isWideScreen = true}, ref) => {
  if (hide) return null;

  return (
      <CustomIconButton 
        ref={ref} onClick={onClick} edge="start" color={color || colors.white} aria-label="menu" 
        icon={Icon} 
        iconWidth={9.75}
        iconHeight={8.44}
        iconViewBox="0 0 9.75 8.44"
      />
  )
  
})

export default MenuIcon;