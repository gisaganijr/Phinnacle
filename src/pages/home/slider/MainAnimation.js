import React from 'react';
import { useSpring, animated, config } from 'react-spring'

const MainAnimation = ({mobile = false, children}) => {

  const fadeStyles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.slow,
    delay: !mobile ? 1000 : 3000,
  });

  return (
    <animated.div style={fadeStyles}>{children}</animated.div>
  )
}

export default MainAnimation;