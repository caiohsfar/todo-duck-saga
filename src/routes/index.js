import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Main from '../pages/main';

const Routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={Main} />
  </BrowserRouter>
);

export default Routes;