import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Article } from 'pages/Article';
import { GlobalFeed } from 'pages/GlobalFeed';
import { Auth } from 'pages/Auth';
import { TagFeed } from 'pages/TagFeed';
import { YourFeed } from 'pages/YourFeed';
import { CreateArticle } from 'pages/CreateArticle';
import { EditArticle } from 'pages/EditArticle';
import { Settings } from 'pages/Settings';

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={GlobalFeed} exact />
      <Route path="/settings" component={Settings} />
      <Route path="/articles/new" component={CreateArticle} />
      <Route path="/articles/:slug/edit" component={EditArticle} />
      <Route path="/feed" component={YourFeed} />
      <Route path="/tags/:slug" component={TagFeed} />
      <Route path="/login" component={Auth} />
      <Route path="/register" component={Auth} />
      <Route path="/articles/:slug" component={Article} />
    </Switch>
  );
};
