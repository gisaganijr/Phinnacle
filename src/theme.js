import { createMuiTheme } from "@material-ui/core/styles";
import { appBgColor } from 'variables';

export default createMuiTheme({
  overrides: {
    MuiLink: {
        root: {
          fontSize: '12px',
          padding: '5px 10px'
        }
    },
    MuiAppBar: {
        colorDefault: {
          boxShadow: 'unset',
          backgroundColor: appBgColor
        }
    },
    MuiButton: {
        root: {
            minWidth: '10px',
            marginRight: '6px',
            padding: '0px',
            // '&:hover': {
            //   backgroundColor: 'transparent'
            // }
        },
        text: {
          padding: '3px',
        }
    },
    MuiToolbar: {
        root: {
          justifyContent: 'space-between',
          backgroundColor: 'transparent'
        }
    },
    MuiDialog: {
      paperFullScreen: {
        backgroundColor: appBgColor,
      }
    },
    MuiDrawer: {
      paper: {
        backgroundColor: appBgColor,
      }
    },
  }
});