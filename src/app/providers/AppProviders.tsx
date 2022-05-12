import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();

const theme = createTheme({
  typography: {
    fontFamily: 'Raleway',
    fontSize: 16,
  },
});

const AppProviders = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export { AppProviders };
