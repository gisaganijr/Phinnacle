import React from 'react';
import { find, toInteger, includes, split, first, last, ceil, filter, round, floor, sum } from "lodash";
import { appBarMinHeight, smallMargin, margin, colors } from 'variables';

const getFontFamily = (fontType) => {
  switch(fontType) {
    case 'light': {
      return 'Roc Grotesk Light';
    }
    case 'bold': {
      return 'Roc Grotesk Bold';
    }
    case 'medium': {
      return 'Roc Grotesk Medium';
    }
    case 'extra-light': {
      return 'Roc Grotesk Extra Light';
    }
    case 'thin': {
      return 'Roc Grotesk Thin';
    }
    default:
      return 'Roc Grotesk Thin';
  }
}

const getDimensions = (ele) => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const getFontSize = (size = 'sm', widthCat = 'xl') => {
  switch(size) {
    case 'xxs': {
      return '0.675rem';
    }
    case 'xs': {
      return '0.750rem';
    }
    case 'normal': {
      return '0.875rem';
    }
    case 'sm': {
      return '1rem';
    }
    case 'md': {
      return '1rem';
    }
    case 'lg': {
      return '1.5rem';
    }
    case 'xl': {
      return '2rem';
    }
    default:
      return size;
  }
}

const getLineHeight = (size = 'sm') => {
  const defaultLineHeight = '2rem';

  switch(size) {
    // case 'xs': {
    //   return defaultLineHeight;
    // }
    // case 'normal': {
    //   return defaultLineHeight;
    // }
    // case 'sm': {
    //   return defaultLineHeight;
    // }
    // case 'md': {
    //   return defaultLineHeight;
    // }
    case 'lg': {
      return '2.5rem';
    }
    case 'xl': {
      return '3rem';
    }
    default:
      return defaultLineHeight;
  }
}

const getHeaderTextSize = (size = 'xl', widthCat = 'xl', smallest) => {

  if (size === "xl") {
    switch(widthCat) {
      case 'xs': 
      case 'sm': {
        return smallest || '2rem';
      }
      case 'md': 
        return '1.5rem';
      case 'lg': 
        return '2.5rem';
      case 'xl': {
        return '3rem';
      }
      default:
        return '2.5rem';
    }
  }
  else if (size === "lg") {
    switch(widthCat) {
      case 'xs': 
      case 'sm': {
        return smallest || '1.4rem';
      }
      case 'md': 
        return '1.5rem';
      case 'lg': 
      case 'xl': {
        return '2rem';
      }
      default:
        return '2rem';
    }
  }
  else if (size === "md") {
    switch(widthCat) {
      case 'xs': {
        return smallest || '1rem';
      }
      case 'sm': {
        return '1.2rem';
      }
      case 'md': 
      case 'lg': 
      case 'xl': {
        return '1.5rem';
      }
      default:
        return '1.5rem';
    }
  }
  else if (size === "sm") {
    switch(widthCat) {
      case 'xs': {
        return smallest || '0.750rem';
      }
      case 'sm': {
        return '1rem';
      }
      case 'md': 
      case 'lg': 
      case 'xl': {
        return '1.2rem';
      }
      default:
        return '1.2rem';
    }
  }
  else {
    return '1rem';
  }

}

function getMenuSetting(divRefMenuSettings, divId) {
  const divRefMenuSetting = find([...divRefMenuSettings], (o) => { return o.divId === divId; });
  if (divRefMenuSetting) 
    return { 
      menuColor: divRefMenuSetting.menuColor, 
      isLogoColoured: divRefMenuSetting.isLogoColoured, 
      appBarBgColor: divRefMenuSetting.appBarBgColor 
    }

  return colors.black;
}

function getNavigationColor(sectionRefs, isWideScreen, clientHeight, scrollTop) {
  let refSettingForLogo = null;
  let refMenuSetting = null;
  let refAppBarSetting = null;
  const scrollPosforMobile = scrollTop + appBarMinHeight;
  const menuIconY = isWideScreen ? clientHeight / 2 : scrollPosforMobile; 
  const scrollPositionMenu = isWideScreen ? scrollTop + menuIconY : scrollPosforMobile;
  const scrollPositionForAppBar = scrollPosforMobile;
  const scrollPositionLogo = isWideScreen ? scrollTop + toInteger(margin.page.top.replace('px','')) : scrollPosforMobile;
  let logoBasedSectionRef = null;

  let selectedForMenuIcon = sectionRefs.find((ref) => {
    const ele = ref.ref.current;
    if (ele !== undefined && ele !== null) {
      const { offsetBottom, offsetTop } = getDimensions(ele);
      return scrollPositionMenu > offsetTop && scrollPositionMenu < offsetBottom;
    }
  });

  let selectedForAppBar = sectionRefs.find((ref) => {
    const ele = ref.ref.current;
    if (ele !== undefined && ele !== null) {
      const { offsetBottom, offsetTop } = getDimensions(ele);
      return scrollPositionForAppBar > offsetTop && scrollPositionForAppBar < offsetBottom;
    }
  });

  let selectedRefForLogo = sectionRefs.find((ref) => {
    const ele = ref.ref.current;
    if (ele) {
      logoBasedSectionRef = ele;
      const { offsetBottom, offsetTop } = getDimensions(ele);
      return scrollPositionLogo > offsetTop && scrollPositionLogo < offsetBottom;
    }
  });

  if (selectedForAppBar === undefined && scrollTop === 0)
    selectedForAppBar = sectionRefs[0]
  
  if (selectedForMenuIcon === undefined && scrollTop === 0)
    selectedForMenuIcon = sectionRefs[0]

  if (selectedRefForLogo === undefined && scrollTop === 0)
    selectedRefForLogo = sectionRefs[0]

  return { 
    menuColor: selectedForMenuIcon ? selectedForMenuIcon.menuColor : null, 
    isLogoColoured: selectedRefForLogo ? selectedRefForLogo. isLogoColoured : null,
    appBarBgColor: selectedForAppBar ? selectedForAppBar.appBarBgColor : null,
    logoBasedSectionRef: logoBasedSectionRef
  }
}

function isRefScrolled(sectionRef, scrollTop) {
  const ele = sectionRef.current;
  const isScrolled = ele.getBoundingClientRect().top <= window.innerHeight;
  return false;
}

function px2vw(size, width = 1440) { 
  return `${(size / width) * 100}vw`
};

function isEven(n) {
  return n % 2 == 0;
}

function getImageDimensionOnFilename(imageFilename) {
  const imagesSplitByUnderscore = split(imageFilename, '_');
  const dimensionAndFileType = last(imagesSplitByUnderscore);
  const dimensionAndFileTypeSplit = split(dimensionAndFileType, '.');
  const dimension = first(dimensionAndFileTypeSplit);
  const dimensionSplit = split(dimension, 'x');

  return { 
    width: toInteger(dimensionSplit[0]), 
    height: toInteger(dimensionSplit[1]),
    widthPx: `${dimensionSplit[0]}px`, 
    heightPx: `${dimensionSplit[1]}px`
  }
}

async function generateGridItems(items, rowHeight, windowInnerWidth, isWideScreen) {
  let updatedItems = items;
  const layoutUsed = isWideScreen ? "layout" : "smLayout";
  const maxHeightSourceUsed = isWideScreen ? "maxHeightSource" : "smMaxHeightSource";

  items.map((item => {
    if (item.image) {
      const layout = item[layoutUsed];
      const image = isWideScreen ? item.image : item.smImage || item.image;
      const imageOrigSize = getImageDimensionOnFilename(image);
      const colWidth = (windowInnerWidth / 12).toFixed(2);
      const imageWidth = ceil(colWidth * layout.w);
      const ratio =  (imageWidth / imageOrigSize.width).toFixed(2);
      const imageHeight = ceil(imageOrigSize.height * ratio);
     
      if (item[maxHeightSourceUsed]) {
        const propsToUpdate = { 
          convertedWidthPx: imageWidth,
          convertedHeightPx: imageHeight
        }
          
        updatedItems = updateItem(updatedItems, item, propsToUpdate);
        return;
      }

      const convertedImgHeight = imageHeight / rowHeight;
      const finalImgHeight = toInteger(floor(convertedImgHeight));

      if (item[layoutUsed].h !== finalImgHeight) {
        const propsToUpdate = { 
          [layoutUsed]: {...item[layoutUsed], h: finalImgHeight },
          convertedWidthPx: imageWidth,
          convertedHeightPx: imageHeight
        }
        
        updatedItems = updateItem(updatedItems, item, propsToUpdate);
      }
    }
  }));
  
  const itemsWithMaxHeightSources = filter(updatedItems, (o) => {
    return o[maxHeightSourceUsed] !== null && o[maxHeightSourceUsed] !== undefined;
  });

  itemsWithMaxHeightSources.map((item) => {
    const maxHeightSources = filter(updatedItems, (o) => {
      return includes(item[maxHeightSourceUsed], o.itemId);
    });
    const maxHeightSourceLayouts = maxHeightSources.map((o) => o[layoutUsed].h)
    const totalMaxHeight = sum(maxHeightSourceLayouts);
    if (item[layoutUsed].h !== totalMaxHeight)
      updatedItems = updateItem(updatedItems, item, { [layoutUsed]: { ...item[layoutUsed], h: totalMaxHeight}});

  })
 
  return updatedItems;
}

function updateItem(items, itemToUpdate, columnToUpdate) {
  let updatedItems = items.map(item => {
    if (item.itemId === itemToUpdate.itemId) {
      return {
        ...item,
        ...columnToUpdate
      }
    }

    return item;
  })

  return updatedItems;
}

function getContentType(_width, _height) {
  const _device = !!navigator.maxTouchPoints ? 'mobile' : 'desktop';
  if (_device === 'mobile') {
    if (_width < _height) 
      return 'mobile';
  }

  return 'desktop';
}

export { 
  isEven, 
  px2vw, 
  getFontFamily, 
  getLineHeight, 
  getFontSize, 
  getHeaderTextSize, 
  getDimensions, 
  getMenuSetting, 
  getNavigationColor, 
  isRefScrolled,
  getImageDimensionOnFilename,
  generateGridItems,
  getContentType
}