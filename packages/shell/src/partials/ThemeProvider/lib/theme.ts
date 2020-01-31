import { createMuiTheme, Theme } from '@material-ui/core/styles';
import { MIKE_COLORS } from './colors';
import { Palette, PaletteColor } from '@material-ui/core/styles/createPalette';
import { palette as muiPalette } from '@material-ui/system';

export interface IMikePalette extends Palette {
  ultimate?: PaletteColor;
}

export interface IMikeTheme extends Theme {
  palette: IMikePalette;
}

export const mikePalette = {
  ...muiPalette,
  primary: {
    main: MIKE_COLORS.BRANDBLUE_DEFAULT,
    dark: MIKE_COLORS.BRANDBLUE_DARK,
    light: MIKE_COLORS.BRANDBLUE_LIGHT,
    contrastText: MIKE_COLORS.WHITE,
  },
  secondary: {
    main: MIKE_COLORS.ACTIONBLUE_DEFAULT,
    dark: MIKE_COLORS.ACTIONBLUE_DARK,
    light: MIKE_COLORS.ACTIONBLUE_LIGHT,
    contrastText: MIKE_COLORS.WHITE,
  },
  error: {
    main: MIKE_COLORS.PINK_DEFAULT,
    dark: MIKE_COLORS.PINK_DARK,
    light: MIKE_COLORS.PINK_LIGHT,
    contrastText: MIKE_COLORS.WHITE,
  },
  darkGrey: {
    main: MIKE_COLORS.DARKGREY_DEFAULT,
    dark: MIKE_COLORS.DARKGREY_DARK,
    light: MIKE_COLORS.DARKGREY_LIGHT,
    contrastText: MIKE_COLORS.BLACK,
  },
  mediumGrey: {
    main: MIKE_COLORS.MEDIUMGREY_DEFAULT,
    dark: MIKE_COLORS.MEDIUMGREY_DARK,
    light: MIKE_COLORS.MEDIUMGREY_LIGHT,
    contrastText: MIKE_COLORS.BLACK,
  },
  lightGrey: {
    main: MIKE_COLORS.XLIGHTGREY,
    contrastText: MIKE_COLORS.BLACK,
  },
  text: {
    primary: MIKE_COLORS.BRANDBLUE_DEFAULT,
    secondary: MIKE_COLORS.DARKGREY_DEFAULT,
    disabled: MIKE_COLORS.MEDIUMGREY_DEFAULT,
    hint: MIKE_COLORS.ACTIONBLUE_DEFAULT,
  },
  background: {
    default: MIKE_COLORS.XLIGHTGREY,
  },

  devider: {
    default: MIKE_COLORS.MEDIUMGREY_DEFAULT,
  },

  // Custom 'intention' objects
  ultimate: {
    main: MIKE_COLORS.GREEN_DEFAULT,
    dark: MIKE_COLORS.GREEN_DARK,
    light: MIKE_COLORS.GREEN_LIGHT,
    contrastText: MIKE_COLORS.WHITE,
  },
};

const defaultTheme = createMuiTheme();

export const mikeSharedTheme = {
  typography: {
    htmlFontSize: 16,
    fontSize: 14,
    fontFamily: ['Roboto', '-apple-system', 'BlinkMacSystemFont', 'Arial', 'sans-serif'].join(','),
  },
  palette: mikePalette,
  shape: {
    borderRadius: 4, // default mui: 4
  },
  overrides: {
    MuiTypography: {
      root: {
        color: mikePalette.primary.main,
      },
      h1: {
        fontSize: '2rem', // 32px
        lineHeight: 1.25, // 40px - default mui:1
        fontWeight: 'normal',
      },
      h2: {
        fontSize: '1.5rem', // 24px
        lineHeight: 1.33, // 32px  - default mui:1
        fontWeight: 'normal',
      },
      h3: {
        fontSize: '1.25rem', // 20px
        lineHeight: 1.2, // 24px  - default mui:1.04
        fontWeight: 'bold',
      },
      h4: {
        fontSize: '1rem', // 16px
        lineHeight: 1.25, // 20px  - default mui:1.17
        fontWeight: 'bold',
      },
      h5: {
        // not defined in DHI guidelines
        fontSize: '1rem', // 16px
        lineHeight: 1, // 16px  - default mui:1.33
        fontWeight: 'bold',
      },
      h6: {
        // Used by mui for DialogTitles
        fontSize: '1.25rem', // 20 px
        lineHeight: 1.2, // 24px  - default mui:1.6
        fontWeight: 'bold',
      },
      subtitle1: {}, // default mui: 1rem / 1.75
      subtitle2: {}, // default mui: 0.875rem / 1.57
      body1: {
        // default mui: 1rem / 1.5.
        fontSize: '1rem', // 16px
        lineHeight: 1.374, // 22px
      },
      body2: {
        // default mui: 0.875rem / 1.43
        fontSize: '0.875rem', // 14px
        lineHeight: 1.286, // 18px
      },
      button: {}, // default mui: 0.875rem / 1.75 / UPPERCASE
      caption: {}, // default mui: 0.75rem / 1.66
      overline: {}, // default mui: 0.75rem / 2.66 / UPPERCASE
    },

    MuiAppBar: {
      colorPrimary: {
        backgroundColor: MIKE_COLORS.MEDIUMGREY_LIGHT,
        height: '60px',
        borderBottom: '4px solid #DBE4E9', // MEDIUMGREY
      },
    },
    MuiDialog: {},
    MuiDialogTitle: {},
    MuiDialogContentText: {
      root: {
        color: mikePalette.text.primary,
      },
    },
    MuiButton: {
      root: {
        fontWeight: 500,
        letterSpacing: 0.1,
        textTransform: 'none',
        height: '3rem', // 48px
        '&:disabled': {
          height: '3rem', // 48px
        },
      },
      sizeLarge: {
        minWidth: 304,
      },
      sizeSmall: {
        height: '2.5rem', // 40px
        minWidth: 0,
        padding: '0 1rem', // 16px
      },
      outlined: {
        minWidth: 150,
        border: '2px solid',
      },
      contained: {
        minWidth: 150,
      },
      containedPrimary: {
        '&:disabled': {
          backgroundColor: mikePalette.primary.light,
          color: '#fff',
        },
      },
      containedSecondary: {
        '&:disabled': {
          backgroundColor: mikePalette.secondary.light,
          color: '#fff',
        },
      },
      outlinedPrimary: {
        border: '2px solid',
        '&:hover': {
          border: '2px solid',
          borderColor: mikePalette.primary.dark,
        },
        '&:disabled': {
          border: '2px solid',
          color: mikePalette.primary.light,
          borderColor: mikePalette.primary.light,
        },
      },
      outlinedSecondary: {
        border: '2px solid',
        '&:hover': {
          border: '2px solid',
          borderColor: mikePalette.secondary.dark,
        },
        '&:disabled': {
          border: '2px solid',
          color: mikePalette.secondary.light,
          borderColor: mikePalette.secondary.light,
        },
      },
      textPrimary: {
        '&:disabled': {
          color: mikePalette.primary.light,
        },
      },
      textSecondary: {
        '&:disabled': {
          color: mikePalette.secondary.light,
        },
      },
    },
    MuiBadge: {
      colorPrimary: {
        backgroundColor: mikePalette.error.main,
      },
    },
    MuiBreadcrumbs: {},
    MuiCheckbox: {
      indeterminate: {
        color: MIKE_COLORS.GREEN_DEFAULT,
      },
      colorSecondary: {
        '&$checked': {
          color: MIKE_COLORS.GREEN_DEFAULT,
        },
      },
    },
    MuiFab: {
      primary: {
        '&:disabled': {
          backgroundColor: mikePalette.primary.light,
          color: '#fff',
        },
        '&:hover': {
          backgroundColor: mikePalette.primary.dark,
        },
      },
      secondary: {
        '&:disabled': {
          backgroundColor: mikePalette.secondary.light,
          color: '#fff',
        },
        '&:hover': {
          backgroundColor: mikePalette.secondary.dark,
        },
      },
    },
    MuiIconButton: {
      root: {
        borderRadius: 0,
        '&:hover': {
          backgroundColor: MIKE_COLORS.MEDIUMGREY_DEFAULT,
        },
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        [defaultTheme.breakpoints.up('xs')]: {
          fontSize: '0.75rem', // 12 px
          fontWeight: 'normal',
          paddingLeft: '1.5rem', // 24 px
          paddingRight: '1.5rem',
          minWidth: '0',
        },
        '&:hover, &:focus': {
          color: mikePalette.primary.main,
        },
        '&$selected': {
          fontWeight: 'bold', // todo hevo: should we use theme.typography.fontWeight instead?
        },
      },
      selected: {},
    },
    MuiTabs: {
      scrollButtons: {
        [defaultTheme.breakpoints.up('xs')]: {
          minWidth: 0,
          width: 'auto',

          '&&& > *:first-child': {
            width: 40,
          },
        },
      },
    },
    MuiTable: {
      root: { overflowX: 'auto' },
    },
    MuiTableCell: {
      body: {
        height: '44px',
        color: mikePalette.primary.main,
        padding: '0',
        userSelect: 'none',
        width: '300px',
      },
      head: {
        padding: '0',
        height: '44px',
        backgroundColor: mikePalette.lightGrey.main,
        borderBottom: '2px solid ' + mikePalette.devider.default,
      },
    },
    MuiTableRow: {
      root: {
        '&:hover, &:focus': {
          backgroundColor: mikePalette.lightGrey.main,
        },
      },
    },
  },
  props: {
    MuiAppBar: {
      position: 'fixed',
      elevation: 0,
    },
    MuiButton: {
      color: 'secondary', // set the default color prop for  buttons to secondary.
    },
    MuiCircularProgress: {
      color: 'secondary', // set the default color prop for spinners to secondary.
    },
    MuiFab: {
      color: 'secondary',
    },
    MuiTabs: {
      indicatorColor: 'primary',
      textColor: 'primary',
    },
    MuiTableCell: {
      align: 'left',
    },
    MuiLink: {
      color: 'secondary',
    },
  },
};

export default mikeSharedTheme;
