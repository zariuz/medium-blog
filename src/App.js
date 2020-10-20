import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from 'routes';
import { TopBar } from 'components/TopBar';

export const App = () => {
  return (
    <div>
      <Router>
        <TopBar />
        <Routes />
      </Router>
    </div>
  );
};
