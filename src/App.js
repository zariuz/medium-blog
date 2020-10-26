import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from 'routes';
import { TopBar } from 'components/TopBar';
import { CurrentUserProvider } from 'contexts/currentUser';

export const App = () => {
  return (
    <CurrentUserProvider>
      <Router>
        <TopBar />
        <Routes />
      </Router>
    </CurrentUserProvider>
  );
};
