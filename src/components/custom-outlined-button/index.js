import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { iconColorConfig, iconSizeConfig, colors } from 'variables';
import { makeStyles } from '@material-ui/core/styles';
import CustomButton from 'components/custom-button';

const useStyles = makeStyles(theme => ({
  outlined: props => ({
    border: `1px solid ${props.borderColor}`,
  }),
  root: {
    borderRadius: '0px'
  },
  label: props => ({
    color: !props.disabled ? `${props.color}` : 'unset'
  })
}));

const CustomOutlinedButton = forwardRef((props, ref) => {
  const classes = useStyles({color: props.color, borderColor: props.borderColor || props.color, disabled: props.disabled});
  
  return (
      <CustomButton 
        ref={ref}
        disabled={props.disabled}
        variant="outlined"
        //className={`${classes.outlined} ${classes.root} ${classes.label}`}
        classes={{
          root: classes.root,
          outlined: classes.outlined,
          label: classes.label
        }} 
        size="small"
        onClick={props.onClick}
      >
        {props.children}
      </CustomButton>
  )
})

export default CustomOutlinedButton;
