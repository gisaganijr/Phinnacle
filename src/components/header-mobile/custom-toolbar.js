import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Toolbar } from '@material-ui/core';
import { appBgColor, appBarMinHeight, iconColorConfig, iconSizeConfig, colors } from 'variables';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: props => ({
    background: `${props.bgColor}`,
    justifyContent: 'space-between',
    padding: '24px 36px',
    maxHeight: appBarMinHeight
  }),
}))

const CustomToolbar = forwardRef((props, ref) => {
  const classes = useStyles({bgColor: appBgColor});
  
  return (
      <Toolbar 
        ref={ref}
        variant="dense"
        classes={{
          root: classes.root,
        }} 
      >
        {props.children}
      </Toolbar>
  )
})

export default CustomToolbar;
