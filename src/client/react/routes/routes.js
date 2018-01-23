import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../App';
import Home from '../Home';
import UserProfile from '../UserProfile';
import Counter from '../Counter';

export const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
  </Route>
);

export default routes;