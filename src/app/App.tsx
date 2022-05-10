import { ReactQueryDevtools } from 'react-query/devtools';
import React from 'react';
import { AppProviders } from './providers/AppProviders';
import { UnauthenticatedApp } from './unauthenticated/UnauthenticatedApp';

const App = () => {
  return (
    <AppProviders>
      <UnauthenticatedApp />
      <ReactQueryDevtools initialIsOpen={true} />
    </AppProviders>
  );
};

export { App };
