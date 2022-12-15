import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { omit } from 'lodash';

const CustomButton = styled(({ ...other }) => <Button {...omit(other, ['color'])} />)`
    // border-radius: 40px!important;
    ${props => props.bold && { "font-family": "Roc Grotesk Medium!important"}};
    ${props => props.fontSize && { "font-size": props.fontSize }};
    ${props => props.color && { "color": props.color}};
    ${props => props.normalcase && { "text-transform": "none"}};
    margin-right: 0px!important;
`;

export default CustomButton;
