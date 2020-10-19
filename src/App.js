import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from 'routes';

export const App = () => {
  return (
    <div>
      <h3>Welcome to hooks</h3>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
};
