import { createTheme } from '@mui/material';
import { Theme } from '@mui/system';
import { useState } from 'react';

export enum ThemeColorMode {
  'light' = 'light',
  'dark' = 'dark',
}

const defaultThemeStyles = {
  typography: {
    fontFamily: 'Raleway, sans-serif',
    letterSpacing: 'inherit',
    fontSize: 16,
    button: {
      letterSpacing: 'inherit',
    },
    h6: {
      letterSpacing: 'inherit',
    },
  },
};

const darkTheme = createTheme({
  ...defaultThemeStyles,
  palette: {
    mode: ThemeColorMode.dark,
    text: {
      primary: '#d05ac9',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#d05ac9',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#d05ac9',
        },
      },
    },
  },
});

const lightTheme = createTheme({
  ...defaultThemeStyles,
  palette: {
    mode: ThemeColorMode.light,
    text: {
      primary: '#661462',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#661462',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#661462',
        },
      },
    },
  },
});

interface ColorModeThemeProps {
  defaultColorMode?: ThemeColorMode;
}

type ColorModeTheme = {
  setColorMode: (colorMode: ThemeColorMode) => void;
  colorMode: ThemeColorMode;
  activeTheme: Theme;
};

const useColorModeTheme = (
  { defaultColorMode = ThemeColorMode.light }: ColorModeThemeProps = {
    defaultColorMode: ThemeColorMode.light,
  },
): ColorModeTheme => {
  const [colorMode, setColorMode] = useState(defaultColorMode);
  const activeTheme = colorMode === ThemeColorMode.light ? lightTheme : darkTheme;
  console.log('activeTheme', activeTheme);
  return {
    setColorMode,
    colorMode,
    activeTheme,
  };
};

export { useColorModeTheme };
