import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles'; 
import styled from 'styled-components';

const SpinnerWrapper = styled.div`
width: 100%;
height: 100%;
background: transparent;
position: absolute;
top: 10%;
left: 0px;
${props => props.show ? {
  display: 'flex', 
  flexDirection: 'column', 
  justifyContent: 'flex-start', 
  alignItems: 'center' } : {display: 'none'}}
`;

const useStyles = makeStyles({
root: props => ({
  color: props.color
})
})

const Spinner = ({ show, color }) => {
  const classes = useStyles({color: color});

  return (
    <SpinnerWrapper show={show}>
      <CircularProgress 
        variant="indeterminate" 
        value="100" 
        thickness={2} 
        classes={{
          root  : classes.root
        }}
      />
    </SpinnerWrapper>
  )
}

export default Spinner;