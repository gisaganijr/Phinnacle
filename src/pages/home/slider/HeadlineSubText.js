import React from 'react';
import { colors } from 'variables'
import P from 'components/p';

const HeadlineSubText = ({widthCat, width, height, children, innerHeight, activeSlideIndex, isWideScreen}) => {
 
  return (
    <P 
      fontType="light"
      noMargin widthCat={widthCat} size="sm"
      style={{color: colors.white }}
      customLineHeight="1.5rem"
      >
      {children}
    </P>
  )
}

export default React.memo(HeadlineSubText);
