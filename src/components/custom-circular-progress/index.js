import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles'; 
import Dot from 'components/icons/Dot';

const useStyles = makeStyles({
  root: props => ({
    color: props.color
  })
})

function CustomCircularProgress(props) {
  const classes = useStyles({color: props.color});
  return (
    <Box key={props.keyId} position="relative" display="inline-flex">
      { !props.hideProgress && (
        <CircularProgress 
          key={`${props.keyId}-box`}
          thickness={props.thickness || 2}
          variant={props.variant || "determinate"} {...props}
          classes={{
            root  : classes.root
          }}
        />
      )}
      
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color={props.dotColor}
        key={`${props.keyId}-box2`}
      >
        {!props.hideDot && <Dot/> }
      </Box>
    </Box>
  );
}

CustomCircularProgress.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default CustomCircularProgress;