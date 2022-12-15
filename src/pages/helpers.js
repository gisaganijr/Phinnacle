const getPrevSlide = (_slideIndex) => {
    if (parseInt(_slideIndex) === 1)
      return 4;
    else 
      return parseInt(_slideIndex) - 1
}

const getNextSlide = (_slideIndex, totalSlides) => {
  if (parseInt(_slideIndex) === totalSlides)
    return 1;
  else 
    return parseInt(_slideIndex) + 1
}

export {
  getPrevSlide,
  getNextSlide,
};
  