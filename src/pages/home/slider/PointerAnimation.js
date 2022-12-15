import React from 'react';
import {useTransition, useSpring, animated, config } from 'react-spring';

const PointerAnimation = ({mobile = false, children}) => {

  const fadeStyles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.slow,
    delay: 50,
  });

  return (
    <animated.div style={fadeStyles}>{children}</animated.div>
  )
}

export default PointerAnimation;