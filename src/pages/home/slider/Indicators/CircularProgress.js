import React from 'react';
import { colors , sliderInterval } from 'variables';
import CustomCircularProgress from 'components/custom-circular-progress';
import { getFontFamily } from 'helpers';

function CircularProgress({activeSlideIndex, keyId, dotColor, color, isActive = false, nextSlide, hideProgress = false}) {
  const [progress, setProgress] = React.useState(0);
  

  React.useEffect(() => {
    if (hideProgress) return;
    
    const timer = setInterval(tick, 500);
   
    if (!isActive) {
      clearInterval(timer);
      setProgress(0);
      return;
    }
      
    function tick() {
      // reset when reaching 100%
      setProgress(oldProgress => {
        if (oldProgress >= 100) 
          nextSlide();

          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
      });
      
    }

    return () => {
      clearInterval(timer);
    };
  }, [activeSlideIndex]);

  return <CustomCircularProgress keyId={keyId} value={!isActive ? 0 : progress} color={color} dotColor={dotColor} hideProgress={hideProgress} />;
}

export default CircularProgress;