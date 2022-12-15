import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { colors, pageMargin } from 'variables';
import { getFontFamily, getFontSize, getLineHeight, getHeaderTextSize } from 'helpers';

const MainWrapper = styled.div`
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  ${props => props.height !== undefined && {'height': props.height} }
  ${props => props.centerAlign && { 'align-items': 'center', 'justify-content': 'center' }}
  position: relative;
  padding: ${props => `${pageMargin[props.widthCat].top} ${pageMargin[props.widthCat].left}`};
  ${props => props.noPaddingBottom && {'padding-bottom': '0px'} }
  ${props => props.fontFamily && {"font-family": props.fontFamily}};
  ${props => props.fontSize && {"font-size": props.fontSize}};
  ${props => props.lineHeight && {"line-height": props.lineHeight}};
  ul li {
    ${props => props.lineHeight && {"line-height": props.lineHeight}};
  }
`

const PageSection = forwardRef((
  { id, color = colors.black, bgColor = 'transparent', children, height,
    centerAlign = true, isMobile = false, noPaddingBottom = false,
    widthCat = 'sm', size = 'sm', fontType = 'light'
  }, ref) => {

  const _fontSize = getFontSize(size, widthCat);
  const _lineHeight = getLineHeight(widthCat);
  const _fontFamily = getFontFamily(fontType);

  return (
    <MainWrapper 
      ref={ref} id={id} color={color} bgColor={bgColor} height={height} widthCat={widthCat} centerAlign={centerAlign} isMobile={isMobile} noPaddingBottom={noPaddingBottom}
      fontFamily={_fontFamily}
      fontSize={_fontSize}
      lineHeight={_lineHeight}
    >
      {children}
    </MainWrapper>
  )
})

export default PageSection;