
import React, {useState} from 'react';
import styled from 'styled-components';
import { iconColorConfig, iconSizeConfig } from 'variables'

const StyledIcon = styled.div`
    color: ${iconColorConfig.primary.normal};
    :hover {
        svg {
            fill: ${iconColorConfig.primary.hover};
        }
    }
`;

export function PrimaryIcon(IconComponent, props) {
    return class extends React.Component {
        componentWillReceiveProps(nextProps) {
        }
        render() {
          return (
            <StyledIcon>
                <IconComponent
                    {...iconSizeConfig.small}
                    //{...props ? props.size === 'medium' ? iconSizeConfig.medium : null: null}
                    //  {...props ? props.size === 'extraSmall' ? iconSizeConfig.extraSmall : null: null}
                    {...props}
                   
                />
            </StyledIcon>  
          )
        }
    }
}