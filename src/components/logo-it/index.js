import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { colors } from 'variables';
import CustomSVG from 'components/custom-svg';
import { ReactComponent as HorizontalLogo } from 'svg/PhinnacleIT_Logo.svg';

const StyledLogoWrapper = styled.div`
  width: ${props => props.width};
  color: ${props => props.isColoured ? colors.violet: colors.white };
`;

const LogoIT = forwardRef(({isColoured = true, width = '20%', style, isWideScreen = true}, ref) => {

  if (isWideScreen)
    return (
      <StyledLogoWrapper ref={ref} width={width} isColoured={isColoured} style={style}>
        <CustomSVG 
          component={HorizontalLogo} 
          viewBox='0 0 710.82 707.03'
        />
      </StyledLogoWrapper>
    )

  return (
    <StyledLogoWrapper ref={ref} width={width} isColoured={isColoured} style={style}>
      <CustomSVG 
        component={HorizontalLogo} 
        viewBox='0 0 710.82 707.03'
      />
    </StyledLogoWrapper>
  )
})

export default LogoIT;