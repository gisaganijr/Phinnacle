import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  iconRoot: props => ({
    width: '320px',
    height: '320px',
  }),
}));

function Dot(props) {
  const classes = useStyles();

  return (
    <SvgIcon key={props.keyId} viewBox="0 0 320 320">
      {/* <circle cx="160" cy="160" r="100" stroke="#000000" fill="none" stroke-width="10" stroke-linecap="round" style="stroke-dashoffset: 628px; stroke: rgb(255, 255, 255); opacity: 0;"></circle> */}
    </SvgIcon>
  );
}

export default Dot;