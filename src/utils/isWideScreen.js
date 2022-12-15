export const isWideScreen = (width) => {
    if (width === 'md' || width === 'lg' || width === 'xl')
      return true;

    return false;
}

