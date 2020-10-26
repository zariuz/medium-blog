import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from 'routes';
import { TopBar } from 'components/TopBar';
import { CurrentUserProvider } from 'contexts/currentUser';
import { CurrentUserChecker } from 'components/CurrentUserChecker';

export const App = () => {
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
        <Router>
          <TopBar />
          <Routes />
        </Router>
      </CurrentUserChecker>
    </CurrentUserProvider>
  );
};
