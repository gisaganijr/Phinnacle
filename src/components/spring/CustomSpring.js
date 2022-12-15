import React, { useRef, useState, useEffect } from 'react';
import { Spring, config } from 'react-spring';
import { omit } from 'lodash';
import styled from 'styled-components';
import AniLoadingWrapper from './AniLoadingWrapper';

const CustomSpring = (props) => {
  const { children, renderAni, startAni, showLoader, noLoader = false, spinnerColor, ...otherProps } = props;

  if (startAni)
    return <Spring {...otherProps}>
      {(props) => {
        if (!noLoader) {
          return (
            <AniLoadingWrapper showLoader={!props ? true: false} color={spinnerColor}>
              {renderAni(props)}
            </AniLoadingWrapper>
          ); 
        }

        return renderAni(props);
      }}
    </Spring>
  
  if (!noLoader) {
    return (
      <AniLoadingWrapper showLoader={true} color={spinnerColor}>
        {renderAni()}
      </AniLoadingWrapper>
    );
  }

  return renderAni();
}

export default CustomSpring;