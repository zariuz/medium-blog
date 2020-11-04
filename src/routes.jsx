import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Article } from 'pages/Article';
import { GlobalFeed } from 'pages/GlobalFeed';
import { Auth } from 'pages/Auth';
import { TagFeed } from 'pages/TagFeed';

export const Routes = () => {
  return (
    <Switch>
      <Route path='/' component={GlobalFeed} exact />
      <Route path='/tags/:slug' component={TagFeed} />
      <Route path='/login' component={Auth} />
      <Route path='/register' component={Auth} />
      <Route path='/articles/:slug' component={Article} />
    </Switch>
  );
};
