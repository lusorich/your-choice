import { ReactQueryDevtools } from 'react-query/devtools';
import React from 'react';
import { Box, ThemeProvider } from '@mui/material';
import { ThemeColorMode, useColorModeTheme } from 'widgets/theme/ui/useColorModeTheme';
import { ThemeSwitcher } from 'widgets/theme/ui/ThemeSwitcher';
import { MainContainer } from 'pages/unauthenticated/ui/style';
import { AppProviders } from './providers/AppProviders';
import { UnauthenticatedApp } from '../pages/unauthenticated/ui/UnauthenticatedApp';

const App = () => {
  const { colorMode, setColorMode, activeTheme } = useColorModeTheme();
  const toggleTheme = () => setColorMode(
    colorMode === ThemeColorMode.light ? ThemeColorMode.dark : ThemeColorMode.light,
  );
  return (
    <ThemeProvider theme={activeTheme}>
      <MainContainer
        maxWidth={false}
        sx={{
          backgroundImage: 'url(./images/main-background.jpg)',
          backgroundRepeat: 'round',
        }}
      >
        <AppProviders>
          <UnauthenticatedApp />
          <ReactQueryDevtools initialIsOpen />
        </AppProviders>
        <Box
          sx={{
            position: 'sticky',
            top: '97vh',
            display: 'flex',
            alignSelf: 'flex-start',
          }}
        >
          <ThemeSwitcher
            checked={colorMode === ThemeColorMode.dark}
            onChange={toggleTheme}
          />
        </Box>
      </MainContainer>
    </ThemeProvider>
  );
};

export { App };
