import React from 'react';
import { SvgIcon } from '@material-ui/core';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  iconRoot: props => ({
    width: '8px',
    height: '8px',
  }),
}));

function Dot(props) {
  const classes = useStyles();

  return (
      <SvgIcon 
        viewBox="0 0 15 15"
        color={props.color}
        classes={{
          root: classes.iconRoot
        }}
      >
        <circle class="st0" cx="7.5" cy="7.5" r="7.5"/>
      </SvgIcon>
  );
}

export default Dot;