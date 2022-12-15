import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { replace, toNumber } from 'lodash';
import { getFontFamily, getFontSize, getLineHeight, getHeaderTextSize } from 'helpers';

const CustomParagraph = styled.p`
  ${props => props.fontFamily && {"font-family": props.fontFamily}};
  ${props => props.noMargin && {margin: '0px'}};
  ${props => props.fontSize && {"font-size": props.fontSize}};
  ${props => props.lineHeight && {"line-height": props.lineHeight}};
`

const P = forwardRef(({
  onClick,
  header = false, 
  fontType = 'light', 
  children, 
  style, 
  noMargin, 
  widthCat = 'sm', 
  size = 'sm', 
  smallest,
  customLineHeight,
  fontSizeLineHeight = false,
  twClass
}, ref) => {
  const increase = (size, toAdd) => {
    const currentSize = toNumber(replace(size, 'rem', ''));
    const newSize = currentSize + toAdd;
    return `${newSize}rem`; 
  }

  const _fontSize = !header ? getFontSize(size, widthCat) : getHeaderTextSize(size, widthCat, smallest);
  const _lineHeight = !header ? customLineHeight || getLineHeight(widthCat) : increase(getHeaderTextSize(size, widthCat, smallest), 0.5);

    if (twClass) {
      return (
        <div class={twClass}>
          <CustomParagraph 
            ref={ref}
            noMargin={noMargin} 
            fontSize={_fontSize} 
            style={style}
            class={twClass}
            fontFamily={getFontFamily(fontType)} 
            lineHeight={_lineHeight}
            onClick={onClick}
            {...fontSizeLineHeight && { lineHeight: _fontSize }}
          >
            {children}
          </CustomParagraph>
        </div>
      )
    }

    return (
      <CustomParagraph 
        ref={ref}
        noMargin={noMargin} 
        fontSize={_fontSize} 
        style={style}
        class={twClass}
        fontFamily={getFontFamily(fontType)} 
        lineHeight={customLineHeight || getLineHeight(widthCat)}
        onClick={onClick}
        {...fontSizeLineHeight && { lineHeight: _fontSize }}
      >
        {children}
      </CustomParagraph>
    )
})

export default P;