import React, { forwardRef } from 'react';
import styled from 'styled-components';
import CustomAppBar from './custom-app-bar';
import CustomToolbar from './custom-toolbar';
import { appBgColor, colors, smallMargin, margin } from 'variables';
import Logo from 'components/logo';
import CustomIconButton from 'components/custom-icon-button';
import { ReactComponent as TriangleMenu } from 'svg/Triangle_Menu.svg';

const HeaderMobile = forwardRef(({ onClick }, ref) => {
  return (
    <CustomAppBar 
        color="default" 
        position="fixed" 
        elevation={0}
    >
        <CustomToolbar bgColor={appBgColor}>
          <Logo width="55%" isWideScreen={false} isColoured />
          <CustomIconButton
            icon={TriangleMenu} 
            iconWidth={9.75}
            iconHeight={8.44}
            iconViewBox="0 0 9.75 8.44"
            edge="start" color={colors.violet} aria-label="menu" 
            onClick={onClick}
          />
        </CustomToolbar>
    </CustomAppBar>
  )
})

export default HeaderMobile;