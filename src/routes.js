import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Article } from 'pages/Article';
import { GlobalFeed } from 'pages/GlobalFeed';
import { Auth } from 'pages/Auth';

export default () => {
  return (
    <Switch>
      <Route path="/" component={GlobalFeed} exact />
      <Route path="/login" component={Auth} />
      <Route path="/register" component={Auth} />
      <Route path="/articles/:slug" component={Article} />
    </Switch>
  );
};
