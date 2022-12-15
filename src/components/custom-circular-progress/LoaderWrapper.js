import React from 'react';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  height: ${props => props.height};
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default LoaderWrapper;