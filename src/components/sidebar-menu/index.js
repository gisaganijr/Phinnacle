import React from 'react';
import { colors, pageMargin } from 'variables';
import { replace } from 'lodash';
import P from 'components/p';

const SidebarMenu = ({isWideScreen, widthCat, width }) => {
    if (!isWideScreen) return null;
    
    return (
        <div 
            class='flex flex-row items-start justify-between' 
            style={{ 
                position: 'fixed', height: '100vh', top: 0, right: 0, 
                padding: `${replace(pageMargin[widthCat].top, 'px', '') - 8}px ${pageMargin[widthCat].left}`,  
                zIndex: '999',
            }}
        >
            <P 
                fontType="medium" noMargin widthCat={widthCat} size="sm" 
                style={{
                    color: colors.white, lineHeight: '1.2rem',
                    textAlign: 'center',
                    flexDirection: 'column',
                    width: '1em',
                    wordBreak: 'break-all'
                }}>
                MENU
            </P>
        </div>
    )
}

export default SidebarMenu;