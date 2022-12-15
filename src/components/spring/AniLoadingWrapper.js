import React from 'react';
import styled from 'styled-components';
import { omit } from 'lodash';
import Spinner from './Spinner';

const AniLoadingWrapper = (props) => {
  const { children, showLoader = true, ...otherProps } = props;
  
  const AniContentWithAniLoadingWrapper = () => React.cloneElement(omit(children, ['props']), { ...children && children.props, style: {...children && children.props && children.props.style, position: children && children.props &&  children.props.style && children.props.style.position || 'relative' }, }, 
    <>{children && children.props && children.props.children}
    <Spinner show={showLoader} color={props.color} />
    </>
  )
 
  return <AniContentWithAniLoadingWrapper />
}

export default AniLoadingWrapper;