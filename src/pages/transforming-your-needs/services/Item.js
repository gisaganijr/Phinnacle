import React, { forwardRef } from 'react';
import { Link } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { includes } from 'lodash';
import { getCustomWidthCat, isSmallAndExtraSmall } from 'utils/screenWidth';
import CustomSVG from 'components/custom-svg';
import { colors, pageMargin } from 'variables';
import P from 'components/p';

const Title = ({ text, color, widthCat, paddingBottom = false }) => {
    return (
        <P { ...paddingBottom && { twClass: 'mb-8' } } fontType="medium" header noMargin widthCat={widthCat} size="lg" smallest="2rem" style={{color: color, letterSpacing: '2px' }}>
            { text }
        </P>
    )
}

const Icon = ({ icon, iconWidth, widthCat, iconViewBox, color, isSmallAndExtraSmall }) => {

    const _width = !isSmallAndExtraSmall ? '250px' : '200px';

    return (
        <div style={{ 
            color: color,
            width: iconWidth,
            minWidth: iconWidth,
            maxWidth: iconWidth,
        }}>
            <CustomSVG 
                component={icon} 
                viewBox={iconViewBox}
            />
        </div>
    )
}

const Description = ({ children, title, isSmallAndExtraSmall, color, widthCat, minWidth = '100%' }) => {
    return (
        <div 
            class="flex justify-center" 
            style={{ 
                color: colors.black, backgroundColor: colors.lightGray, 
                padding: `0px ${pageMargin[widthCat].left}` 
            }}
        >
            <div style={{ marginTop: !isSmallAndExtraSmall ? '100px' : '75px', minWidth: minWidth, maxWidth: minWidth,  }}>
                { isSmallAndExtraSmall && <Title text={title} color={colors.violet} widthCat={widthCat} paddingBottom /> }
                { children }
            </div>
        </div>  
    )
}

// const Description = ({ children, title, isSmallAndExtraSmall, color, widthCat, minWidth = '100%' }) => {
//     return (
//         <div 
//             class="flex justify-center" 
//             style={{ 
//                 color: colors.black, backgroundColor: colors.lightGray, 
//                 padding: `0px ${pageMargin[widthCat].left}` 
//             }}
//         >
//             <div style={{ marginTop: !isSmallAndExtraSmall ? '100px' : '75px', minWidth: minWidth, maxWidth: minWidth,  }}>
//                 { isSmallAndExtraSmall && <Title text={title} color={colors.violet} widthCat={widthCat} paddingBottom /> }
//                 { children }
//             </div>
//         </div>  
//     )
// }


const Item = forwardRef((props, ref) => {
    const navigate  = useNavigate();
    const { services, widthCat, width, color, bgColor, icon, iconViewBox, titleColor, title, isMobile, children, noPaddingBottom, iconWidth } = props;
    
    const _isSmallAndExtraSmall = isSmallAndExtraSmall(getCustomWidthCat(widthCat, width));
    const customWidthCat = getCustomWidthCat(widthCat, width);

    if (!_isSmallAndExtraSmall) {
        const _mainWidth = includes(['lg', 'xl'], customWidthCat) ? '80%' : '100%';

        return (
            <div class='w-full flex flex-col justify-center' style={{ paddingBottom: '100px' }}>
                <div 
                    class='w-full flex justify-center items-center' 
                    style={{ 
                        height: '150px', color, backgroundColor: bgColor,
                        padding: `0px ${pageMargin[props.widthCat].left}`
                    }}
                >
                    <div class="relative flex flex-row justify-between items-center" style={{ 
                        maxHeight: '150px', 
                        minWidth: _mainWidth, 
                        maxWidth: _mainWidth
                    }}>
                        <div>
                            <Title text={title[customWidthCat]} color={color} widthCat={widthCat} />
                        </div>
                        <Icon icon={icon} iconViewBox={iconViewBox} color={color} iconWidth={iconWidth[customWidthCat]} widthCat={customWidthCat} isSmallAndExtraSmall={_isSmallAndExtraSmall} />
                    </div>
                </div>
                <div 
                    class="flex justify-center" 
                    style={{ 
                        color: colors.black, backgroundColor: colors.lightGray, 
                        padding: `0px ${pageMargin[widthCat].left}` 
                    }}
                >
                    <div style={{ marginTop: !isSmallAndExtraSmall ? '100px' : '75px', minWidth: _mainWidth, maxWidth: _mainWidth,  }}> 
                    {
                        services.map((service) => (
                            <P
                                size="sm" 
                                twClass="mb-2"
                            >
                                <Link 
                                    color="inherit" variant="inherit" 
                                    // onClick={() => navigate('/services')}
                                    onClick={() => navigate(`/service/${service.name}`)}
                                    style={{ cursor: !service.disabled ? 'pointer' : 'unset' }}
                                >
                                    {service.title}
                                </Link>
                            </P>
                        ))
                    }
                    </div>
                </div>
                {/* <Description 
                    widthCat={widthCat} 
                    minWidth={_mainWidth}
                    isSmallAndExtraSmall={_isSmallAndExtraSmall}
                >
                    { children }
                </Description> */}
        </div>
        );
    } 

    return (
        <div class='w-full flex flex-col justify-center' style={{ paddingBottom: '100px' }}>
            <div 
                class='w-full flex justify-center items-center' 
                style={{ 
                    height: '100px', color, backgroundColor: bgColor,
                    padding: `0px ${pageMargin[props.widthCat].left}`,
                }}
            >
                <div class="w-full relative flex flex-row justify-end items-center" style={{ maxHeight: '100px', minWidth: '100%', maxWidth: '100%' }}>
                    <Icon icon={icon} iconViewBox={iconViewBox} color={color} widthCat={widthCat}  iconWidth={iconWidth[customWidthCat]} isSmallAndExtraSmall={_isSmallAndExtraSmall} />
                </div>
            </div>
            <div 
                class="flex justify-center" 
                style={{ 
                    color: colors.black, backgroundColor: colors.lightGray, 
                    padding: `0px ${pageMargin[widthCat].left}` 
                }}
            >
                <div style={{ marginTop: !isSmallAndExtraSmall ? '100px' : '75px', minWidth: '100%', maxWidth: '100%',  }}> 
                <Title text={title[customWidthCat]} color={colors.violet} widthCat={widthCat} paddingBottom />
                {
                    services.map((service) => (
                        <P 
                            size="sm" 
                            twClass="mb-2"            
                        >
                            <Link 
                                color="inherit" variant="inherit" underline="always"
                                onClick={() => navigate(`/service/${service.name}`)}
                            >
                                {service.title}
                            </Link>
                        </P>
                    ))
                }
                </div>
            </div>
            {/* <Description title={title[customWidthCat]} widthCat={widthCat} isSmallAndExtraSmall>
                { children }
            </Description> */}
        </div>
    );
})

export default Item;