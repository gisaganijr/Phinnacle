import { button } from 'variables';

export const muiOverrides = {
    MuiButton: {
      root: {
        textTransform: 'none',
      },
      outlinedSecondary: {
        color: `${button.outlined.gray.color}!important`
      },
      sizeSmall: {
        padding: '2px 16px!important'
      }
    },
    MuiIconButton: {
      root: {
        padding: '6px'
      }
    },
    MuiListItemIcon: {
      root: {
        minWidth: '36px'
      }
    }
}