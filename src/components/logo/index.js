import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { colors } from 'variables';
import CustomSVG from 'components/custom-svg';
import { ReactComponent as HorizontalLogo } from 'svg/Phinnacle_Hori.svg';

const StyledLogoWrapper = styled.div`
  width: ${props => props.width};
  color: ${props => props.color };
`;

const Logo = forwardRef(({ color = colors.white, width = '20%', style, isWideScreen = true, onClick }, ref) => {

  const styles = {
    ...style,
    cursor: onClick ? 'pointer' : 'unset'
  }

  if (isWideScreen)
    return (
      <StyledLogoWrapper ref={ref} width={width} color={color} style={styles} onClick={onClick}>
        <CustomSVG 
          component={HorizontalLogo} 
          viewBox='0 0 32.5 2.05'
        />
      </StyledLogoWrapper>
    )

  return (
    <StyledLogoWrapper ref={ref} width={width} color={color} style={styles} onClick={onClick}>
      <CustomSVG 
        component={HorizontalLogo} 
        viewBox='0 0 32.5 2.05'
      />
    </StyledLogoWrapper>
  )
})

export default Logo;