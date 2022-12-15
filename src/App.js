import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './global-styles';
import compose from 'recompose/compose';
import windowDimensions from 'react-window-dimensions';
import { renameProp } from 'recompose';
import withWidth from '@material-ui/core/withWidth';
import useGlobalStore from 'store';
import ScrollToTop from 'common/scroll-to-top';
import { isWideScreen } from 'utils/isWideScreen';
import Menu from 'components/menu';
import { routeUrl } from './constants';
import HomePage from 'pages/home/index';
import OverviewPage from 'pages/overview';
import NavigateYourNextWithUsPage from 'pages/navigate-your-next-with-us';
import TransformingYourNeedsPage from 'pages/transforming-your-needs';
import ServicePage from 'pages/service';
import ContactUsPage from 'pages/contact-us';
import WelcomePage from 'pages/welcome';
import Footer from 'components/footer';
import { getContentType } from 'helpers';
import { useLocation } from "react-router-dom";

function App({width, height, widthCat}) {
  const isMenuOpen = useGlobalStore((state) => state.isNavMobileOpen);
  const closeMenu = useGlobalStore((state) => state.closeMenu);
  const [contentType, setContentType] = useState();
  const _isWideScreen = isWideScreen(widthCat);

  useEffect(() => {
    setContentType(getContentType(width, height)); 
  }, [width, height]);

  const isMobile = contentType === 'mobile';
  const route = useLocation();

  function getConfig(widthCat) {
    switch(widthCat) {
      case 'xs': {
        return {
          'minFontSize': 14,
          'maxFontSize': 16,
          'minVw': 200,
          'maxVw': 600,
        }
      }
      case 'sm': {
        if (height > 1000)  {
          return {
            'minFontSize': 16,
            'maxFontSize': 30,
            'minVw': 600,
            'maxVw': 960,
          }
        }

        return {
          'minFontSize': 14,
          'maxFontSize': 16,
          'minVw': 600,
          'maxVw': 960,
        }
      }
      case 'md': {
        return {
          'minFontSize': 16,
          'maxFontSize': 30,
          'minVw': 960,
          'maxVw': 1280,
        }
      }
      case 'lg': {
        return {
          'minFontSize': 14,
          'maxFontSize': 32,
          'minVw': 1280,
          'maxVw': 1920,
        }
      }
      case 'xl': {
        return {
          'minFontSize': 16,
          'maxFontSize': 70,
          'minVw': 1920,
          'maxVw': 5000
        }
      }
      default: {
        return {
          'minFontSize': 12,
          'maxFontSize': 20,
        }
      }
    }
  }
  
  return (
    <div>
      <GlobalStyle widthCat={widthCat} {...getConfig(widthCat)}/>
      <ScrollToTop />
      <Menu open={isMenuOpen} width={width} height={height} onClose={closeMenu} widthCat={widthCat} isMobile={isMobile} />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path={routeUrl.HOME} element={<HomePage />} />
        <Route path={routeUrl.OVERVIEW} element={<OverviewPage />} />
        <Route path={routeUrl.DIGITIZE_WITH_US} element={<NavigateYourNextWithUsPage />} />
        <Route path={routeUrl.TRANSFORMING_YOUR_NEEDS} element={<TransformingYourNeedsPage />} />
        <Route path={routeUrl.SERVICE} element={<ServicePage />} />
        <Route path={routeUrl.CONTACT_US} element={<ContactUsPage />} />
      </Routes>
      { route.pathname !== '/' &&
        <Footer isWideScreen={_isWideScreen} widthCat={widthCat} width={width} height={height} isMobile={isMobile}/>
      }
    </div>
  );
}

export default compose(
  compose(withWidth(), renameProp('width', 'widthCat')),
  windowDimensions()
)(App);
