import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Dialog } from '@material-ui/core';
import CustomButton from 'components/custom-button';
import { makeStyles  } from '@material-ui/core/styles';
import { getCustomWidthCat, isSmallAndExtraSmall } from 'utils/screenWidth';
import { colors, iconSizeConfig, sidebarDrawerTransitionDuration, smallMargin } from 'variables';
import { ReactComponent as TriangleMenu } from 'svg/Triangle_Menu.svg';
import { PrimaryIcon } from "components/custom-icon/PrimaryIcon";
import List from './list';

const useStyles = makeStyles(theme => ({
  backdrop: {
    opacity: '0!important'
  },
  paper: {
    // opacity: '0.75!important',
    opacity: '1!important'
  }
}))

const MenuIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 18px;
  right: 12px;
  z-index: 999;
`

function CloseMenuIcon({hide = false, onClick, widthCat, width}) {
  const customWidthCat = getCustomWidthCat(widthCat, width);
  const _isSmallAndExtraSmall = isSmallAndExtraSmall(getCustomWidthCat(customWidthCat, width));
  
  if (hide) return null;

  return (
    <MenuIconWrapper>
      <CustomButton 
        onClick={onClick} edge="start" 
        color={colors.white}
        aria-label="menu"
        fontSize={_isSmallAndExtraSmall ? '1.5rem' : '1.75rem'}
        iconLarge
      >
        <i class="fa-solid fa-xmark"></i>
      </CustomButton>
    </MenuIconWrapper>
  )
}

const MenuWrapper = styled.div`
  width: ${props => props.width}px;
  height: 100%;
  background: ${props => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Menu({ open, onClose, width, height, widthCat, isMobile }) {
  const navigate  = useNavigate();
  const classes = useStyles();

  const onClick = (url) => {
    navigate(url);
    onClose();
  }

  return (
      <Dialog 
          open={open} 
          onClose={onClose} 
          fullScreen
          //transitionDuration={{enter: sidebarDrawerTransitionDuration.enter, exit: sidebarDrawerTransitionDuration.exit}}
          ModalProps={{
            BackdropProps:{
              classes:{
                root:classes.backdrop
              }
            }
          }}
          PaperProps={{
            classes:{
              root:classes.paper
            }
          }}
        >
            <MenuWrapper width={width} bgColor={colors.violet}>
              <CloseMenuIcon onClick={onClose} />
              <List onClick={onClick} width={width} height={height} widthCat={widthCat} isMobile={isMobile} />
            </MenuWrapper>
      </Dialog>
  )
}

export default Menu;