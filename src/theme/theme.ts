// theme.ts
import { createTheme, responsiveFontSizes } from '@mui/material';
import { ThemeColors } from './themeColors';

export const appTheme = responsiveFontSizes(createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: ThemeColors.colorPrimary,
      contrastText: ThemeColors.colorContrast,
    },
    background: {
      default: ThemeColors.colorWhitePrimary,
      paper: ThemeColors.colorPaper,
    },
    text: {
      primary: ThemeColors.colorTextPrimary,
      secondary: ThemeColors.colorTextSecondary,
      disabled: ThemeColors.colorTextDisabled,
    },
    divider: ThemeColors.colorDivider,
    success: {
      main: ThemeColors.colorSuccess,
    },
    warning: {
      main: ThemeColors.colorWarning,
    },
    error: {
      main: ThemeColors.colorError,
    },
    info: {
      main: ThemeColors.colorInfo,
    },
  },

  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    button: {
      textTransform: 'none', // Avoid ALL CAPS
    },
  },

  components: {
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: ThemeColors.colorTextPrimary,
        },
        secondary: {
          color: ThemeColors.colorTextSecondary,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: ThemeColors.colorDivider,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: ThemeColors.colorPrimary,
          color: ThemeColors.colorContrast,
        },
      },
    },
    MuiListItemButton: {
        styleOverrides: {
          root: {
            color: ThemeColors.colorTextPrimary, // Ensure text is visible
            backgroundColor: ThemeColors.colorAccent + '11', // translucent background,
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            '&:hover': {
              backgroundColor: ThemeColors.colorAccent + '22', // translucent hover
            },
          },
        },
    },
    // Add more global component overrides here as needed
  },
}));
