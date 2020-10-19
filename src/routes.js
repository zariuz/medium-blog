import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Article } from 'pages/Article';
import { GlobalFeed } from 'pages/GlobalFeed';

export default () => {
  return (
    <Switch>
      <Route path='/' component={GlobalFeed} exact />
      <Route path='/articles/:slug' component={Article} />
    </Switch>
  );
};
