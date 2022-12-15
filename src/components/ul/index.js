import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { replace, toNumber } from 'lodash';
import { getFontFamily, getFontSize, getLineHeight, getHeaderTextSize } from 'helpers';

const CustomUL= styled.ul`
  ${props => props.fontFamily && {"font-family": props.fontFamily}};
  ${props => props.fontSize && {"font-size": props.fontSize}};
  ${props => props.lineHeight && {"line-height": props.lineHeight}};
`

const UL = forwardRef(({
  fontType = 'light', 
  children, 
  style, 
  widthCat = 'sm', 
  size = 'sm', 
  customLineHeight,
}, ref) => {
  const _fontSize = getFontSize(size, widthCat);
  const _lineHeight = customLineHeight || getLineHeight(widthCat);

    return (
      <CustomUL
        ref={ref}
        fontSize={_fontSize} 
        style={style}
        fontFamily={getFontFamily(fontType)} 
        lineHeight={customLineHeight || getLineHeight(widthCat)}
      >
        {children}
      </CustomUL>
    )
})

export default UL;