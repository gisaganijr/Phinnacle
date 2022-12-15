import create from 'zustand'
import { isNumber } from 'lodash';
import { appBgColor, colors, smallMargin, margin } from 'variables';
import { getNextSlide, getPrevSlide } from '../helpers';

const sliders = [
    {
      index: 0, 
      fontColor: '#ffffff', 
      bgColor: colors.turquoise, 
      title: <span style={{ whiteSpace: 'nowrap'}}>OUR CORE IS I.T.</span>,
      subText: 'We take pride in making IT work by hands-on approach with our client partners that result in deeper understanding of your business needs, smoother turn around and a more cost-efficient output.',
      subTextMobile: 'We take pride in making IT work by hands-on approach with our client partners that result in deeper understanding of your business needs, smoother turn around and a more cost-efficient output.',
      subTitle: {
        xs: <span>OUR CORE IS I.T.</span>,
        sm: <span>OUR CORE IS I.T.</span>,
        md: <span>OUR CORE IS I.T.</span>,
        lg: <span>OUR CORE IS I.T.</span>,
        xl: <span>OUR CORE IS I.T.</span>,
      },
      imageSrc: `${process.env.PUBLIC_URL}/images/carousel/Desktop_1st_Image.jpg`,
      imageMobileSrc: `${process.env.PUBLIC_URL}/images/carousel/Mobile_1st_Image.jpg`,
      active: true,
      prevActiveSlideIndex: false,
      indicatorColor: '#ec008c',
    },
    {
      index: 1, 
      fontColor: '#ffffff', 
      bgColor: colors.turquoise, 
      title: <span style={{ whiteSpace: 'nowrap'}}><span>WE UNDERSTAND.</span><br/>WE DELIVER.</span>,
      subText: 'What makes working with Phinnacle IT ideal? It is in our set-up. In this era, what comes to mind when “offshore or outsourcing” is oftentimes large multinational BPO companies.',
      subTextMobile: 'What makes working with Phinnacle IT ideal? It is in our set-up. In this era, what comes to mind when “offshore or outsourcing” is oftentimes large multinational BPO companies.',
      subTitle: {
        xs: <span><span>WE UNDERSTAND.</span><br/>WE DELIVER.</span>,
        sm: <span><span>WE UNDERSTAND.</span><br/>WE DELIVER.</span>,
        md: <span>WE UNDERSTAND. WE DELIVER.</span>,
        lg: <span>WE UNDERSTAND. WE DELIVER.</span>,
        xl: <span>WE UNDERSTAND. WE DELIVER.</span>,
      },
      imageSrc: `${process.env.PUBLIC_URL}/images/carousel/Desktop_2nd_Image.jpg`,
      imageMobileSrc: `${process.env.PUBLIC_URL}/images/carousel/Mobile_2nd_Image.jpg`,
      active: false,
      prevActiveSlideIndex: false,
      indicatorColor: '#ec008c',
    },
    {
      index: 2, 
      fontColor: '#ffffff', 
      bgColor: colors.turquoise, 
      title: <span style={{ whiteSpace: 'nowrap'}}><span>WE HEAR YOU.</span><br/>WE COLLABORATE WITH YOU.</span>,
      titleMobile: <span style={{ whiteSpace: 'nowrap'}}><span>WE HEAR YOU.</span><br/><span>WE COLLABORATE</span><br/>WITH YOU.</span>,
      subText: 'To thrive in these fast evolving times, it is inevitable that organizations adapt into having automated, technology-enabled and more intelligent systems in every facet of their businesses.',
      subTextMobile: 'To thrive in these fast evolving times, it is inevitable that organizations adapt into having automated, technology-enabled and more intelligent systems in every facet of their businesses.',
      subTitle: {
        xs: <span><span>WE HEAR YOU.</span><br/><span>WE COLLABORATE</span><br/><span>WITH YOU.</span></span>,
        sm: <span><span>WE HEAR YOU.</span><br/><span>WE COLLABORATE</span><br/><span>WITH YOU.</span></span>,
        md: <span><span>WE HEAR YOU.</span><br/><span>WE COLLABORATE WITH YOU.</span></span>,
        lg: <span>WE HEAR YOU. WE COLLABORATE WITH YOU.</span>,
        xl: <span>WE HEAR YOU. WE COLLABORATE WITH YOU.</span>,
      },
      imageSrc: `${process.env.PUBLIC_URL}/images/carousel/Desktop_3rd_Image.jpg`,
      imageMobileSrc: `${process.env.PUBLIC_URL}/images/carousel/Mobile_3rd_Image.jpg`,
      active: false,
      prevActiveSlideIndex: false,
      indicatorColor: '#ec008c',
    },
];

const useStore = create(set => ({
  sliders,
  activeSlideIndex: 0,
  prevSlideIndex: 2,
  selectedSlider: sliders[0],
  changeSlide: (newSlide) => set(state => {
    const prevActiveSlideIndex = state.prevActiveSlideIndex;
    let newSlideIndex;
    if (isNumber(newSlide))
      newSlideIndex = newSlide;
    else
      newSlideIndex = newSlide === 'next' ? getNextSlide(state.activeSlideIndex, state.sliders.length - 1) : getPrevSlide(state.activeSlideIndex);

    const newSliders = [...state.sliders].map((slider) => ({ 
      ...slider, 
      active: slider.index === newSlideIndex ? true : false,
      prevActiveSlideIndex: slider.index === prevActiveSlideIndex ? true : false,
    }));
    
    return {
      sliders: newSliders,
      activeSlideIndex: newSlideIndex,
      prevActiveSlideIndex
    }
  })
}))

export default useStore;