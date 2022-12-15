import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  iconRoot: props => ({
    width: '100%',
    height: '100%',
    //overflow: 'visible!important',
  }),
}));

function CustomSVG({component, color, width, height, viewBox}) {
  const classes = useStyles();

  return (
    <SvgIcon 
      component={component} 
      viewBox={viewBox}
      // color={color}
      width={width}
      height={height}
      classes={{
        root: classes.iconRoot
      }}
    />
  );
}

export default CustomSVG;