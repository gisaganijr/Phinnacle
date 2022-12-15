import React, { useState } from 'react';
import { colors } from 'variables'
import P from 'components/p';

const HeadlineText = ({widthCat, width, height, children, innerHeight, activeSlideIndex, isWideScreen}) => {
 
  return (
    <P 
      fontType="bold" header
      noMargin widthCat={widthCat} size="xl"
      style={{color: colors.white, letterSpacing: '2px' }}
      customLineHeight="3rem"
      >
      {children}
    </P>
  )
}

export default React.memo(HeadlineText);
