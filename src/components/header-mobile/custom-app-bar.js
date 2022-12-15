import React from 'react';
import { AppBar as MUIAppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { appBgColor, colors, smallMargin, margin } from 'variables';

const useStyles = makeStyles(() => ({
  root: {
    background: colors.white
  }
}))

const CustomAppBar = ({children}) => {
  const classes = useStyles();

  return (
    <MUIAppBar 
      color="default" 
      classes={{
        root: classes.root
      }}
      position="fixed" 
      elevation={0}
    >{children}</MUIAppBar>
  )
}

export default CustomAppBar;