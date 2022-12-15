import React from 'react';
import { isSmallAndExtraSmall } from 'utils/screenWidth';
import CustomButton from 'components/custom-button';
import classNames from "classnames";

const Pagination = ({
    onPrevious, onNext, previousTitle, nextTitle, disablePrevious, disableNext, widthCat, className
}) => {
    const _isSmallAndExtraSmall = isSmallAndExtraSmall(widthCat);

    return (
        <div className={classNames("flex flex-row w-full justify-between", className)}>
            <CustomButton 
                edge="start" 
                iconLarge
                title={previousTitle}
                onClick={onPrevious}
                disabled={disablePrevious}
                // { ...!_isSmallAndExtraSmall && { startIcon: <i class="fa-solid fa-chevron-left"></i> }}
                startIcon={<i class="fa-solid fa-chevron-left"></i>}
                normalcase
            >
                { !_isSmallAndExtraSmall ? previousTitle || 'None' : 'Previous' }
            </CustomButton>
            <CustomButton 
                edge="start" 
                iconLarge
                title={nextTitle}
                onClick={onNext}
                disabled={disableNext}
                endIcon={<i class="fa-solid fa-chevron-right"></i>}
                normalcase
            >
                { !_isSmallAndExtraSmall ? nextTitle || 'None' : 'Next' }
            </CustomButton>
        </div>
    )
}

export default Pagination;