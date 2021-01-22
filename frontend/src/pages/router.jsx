import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from './SignIn/index';
import Welcome from './Welcome/index';

function Routes() {
  return(
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/welcome" component={Welcome} />
    </Switch>
  );
}

export default Routes;