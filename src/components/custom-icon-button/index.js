/* eslint-disable no-unused-vars */
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { colors, iconColorConfig, iconSizeConfig } from 'variables';
import { SvgIcon, IconButton } from '@material-ui/core';
import {
  makeStyles,
  MuiThemeProvider,
} from '@material-ui/core/styles';
import { omit } from 'lodash';

const useStyles = makeStyles(theme => ({
  label: props => ({
    color: props.color || colors.white,
    //width: props.iconSize === 'xs' ? '0.75em' : '1em',
    //height: props.iconSize === 'xs' ? '0.75em' : '1em',
  }),
  svgRoot: props => ({
    overflow: 'visible!important',
    //width: props.iconSize === 'xs' ? '0.75em' : '1em',
    //height: props.iconSize === 'xs' ? '0.75em' : '1em',
  }),
}));

const CustomIconButton = forwardRef((props, ref) => {
  const { icon, color, iconSize, iconWidth = "25", iconHeight = "25", iconViewBox = "0 0 25 25"} = props;
  const classes = useStyles({ color, iconSize });

  return (
    <IconButton
      ref={ref}
      {...omit(props, ['color', 'icon', 'iconSize'])}
      classes={{
        label: classes.label,
      }}
    >
      <SvgIcon classes={{ root: classes.svgRoot }} component={icon} width={iconWidth} height={iconHeight} viewBox={iconViewBox} />
    </IconButton>
  );
});

export default CustomIconButton;
