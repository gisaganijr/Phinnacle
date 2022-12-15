import React, { useEffect, useState } from 'react';
import { useTrail, a } from '@react-spring/web'
import classNames from "classnames";
import { colors, pagesMargin } from 'variables'
import { routeUrl } from 'constants';
import { getCustomWidthCat } from 'utils/screenWidth';
import P from 'components/p';
import Logo from 'components/logo';
import Item from './item';
import './index.css'

const Trail = ({ open, children }) => {
    const items = React.Children.toArray(children)
    const trail = useTrail(items.length, {
      config: { mass: 5, tension: 2000, friction: 200 },
      opacity: open ? 1 : 0,
      x: open ? 0 : 20,
      height: open ? 110 : 0,
      from: { opacity: 0, x: 20, height: 0 },
    })
    return (
      <div>
        {trail.map(({ height, ...style }, index) => (
          <a.div key={index} className='trailsText' style={style}>
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    )
  }
  

const List = ({ onClick, isMobile, widthCat, width, height, children, innerHeight, activeSlideIndex, isWideScreen}) => {
    const [hoveredMenu, setHoveredMenu] = useState(null);
    const [openTrail, setOpenTrail] = useState(false);

    const customWidthCat = getCustomWidthCat(widthCat, width);

    useEffect(() => {
        setTimeout(() => setOpenTrail(true), 250);
    })

    const items = [{
        menuId: 0,
        title: {
            'xs': <span>Overview</span>,
            'sm': <span>Overview</span>,
            'md': <span>Overview</span>,
            'lg': <span>Overview</span>,
            'xl': <span>Overview</span>,
        },
        url: routeUrl.OVERVIEW
    },{
        menuId: 1,
        title: {
            'xs': <><span>Digitize With Us</span></>,
            'sm': <><span>Digitize With Us</span></>,
            'md': <><span>Digitize With Us</span></>,
            'lg': <><span>Digitize With Us</span></>,
            'xl': <><span>Digitize With Us</span></>,
        },
        url: routeUrl.DIGITIZE_WITH_US
    },{
        menuId: 2,
        title: {
            'xs': <><span>Transforming</span><br /><span>Your Needs</span></>,
            'sm': <><span>Transforming</span><br /><span>Your Needs</span></>,
            'md': <><span>Transforming Your Needs</span></>,
            'lg': <><span>Transforming Your Needs</span></>,
            'xl': <><span>Transforming Your Needs</span></>,
        },
        url: routeUrl.TRANSFORMING_YOUR_NEEDS
    }, {
        menuId: 3,
        title: {
            'xs': <span>Contact Us</span>,
            'sm': <span>Contact Us</span>,
            'md': <span>Contact Us</span>,
            'lg': <span>Contact Us</span>,
            'xl': <span>Contact Us</span>,
        },
        url: routeUrl.CONTACT_US
    }]
    const isSmallHeight = height <= 450;

    return (
        <div className="w-full flex flex-col items-center justify-center" style={{ color: colors.white }}>
            { !isSmallHeight && <div class='mb-24 w-full'><div class="flex justify-center"><Logo width={isMobile ? '80%' : '30%'} isColoured={false} /></div></div> }
            {/* <div class="flex flex-col items-start justify-center mt-24">
                <Trail open={openTrail}>
                { items.map((item, i) => (
                    <Item 
                        menuId={item.menuId} url={item.url} 
                        onClick={onClick}
                        hoveredMenu={hoveredMenu}
                        setHoveredMenu={setHoveredMenu}
                    >
                        { item.title[widthCat] }
                    </Item>
                ))}
                </Trail>
            </div> */}
            <div 
                className={classNames("flex flex-col justify-center", !isSmallHeight ? 'item-start' : 'items-center')}
                onMouseLeave={() => setHoveredMenu(null)}
            >
                { items.map((item, i) => (
                    <Item 
                        menuId={item.menuId} url={item.url} 
                        onClick={onClick}
                        totalMenu={items.length - 1}
                        hoveredMenu={hoveredMenu}
                        setHoveredMenu={setHoveredMenu}
                        isMobile={isMobile}
                        disabled={item.disabled}
                    >
                        { item.title[customWidthCat] }
                    </Item>
                ))}
            </div>
        </div>
    )
}

export default React.memo(List);
