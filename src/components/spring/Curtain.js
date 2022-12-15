import styled from 'styled-components';
import { contentMargin, colors, outlinedButton, imageCurtainColor } from 'variables';

const Curtain = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  //height: 100%;
  z-index: 99999;
  background-color: ${props => props.color || imageCurtainColor}
`

export default Curtain;
