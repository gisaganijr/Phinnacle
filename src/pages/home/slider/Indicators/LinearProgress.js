import React from 'react';
import { colors , sliderInterval } from 'variables';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';

function CustomLinearProgress({activeSlideIndex, keyId, dotColor, color, isActive = false, nextSlide, hideProgress}) {
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

  return (
    <Box sx={{ width: '100%' }} style={{ display: !isActive ? 'none' : 'block' }}>
        <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
}

export default CustomLinearProgress;