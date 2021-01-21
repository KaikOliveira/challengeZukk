import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './routes';

import SignIn from '../pages/SigIn';

import Welcome from '../pages/Welcome';

function Routes() {
  return(
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/welcome" component={Welcome} isPrivate />
  </Switch>
  );
}

export default Routes;