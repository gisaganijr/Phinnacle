import { includes } from 'lodash';

const getCustomWidthCat = (_widthCat, _width) => {
  if (_widthCat === 'sm' && _width <= 896) {
      return 'md';
  }

  return _widthCat;
} 

const isMediumAndSmaller = (width) => {
    if (includes(['xs', 'sm', 'md'], width))
      return true;

    return false;
}

const isSmallAndExtraSmall = (width) => {
  if (includes(['xs', 'sm'], width))
    return true;

  return false;
}

export {
    getCustomWidthCat,
    isMediumAndSmaller,
    isSmallAndExtraSmall
}