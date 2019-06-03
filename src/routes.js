import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from 'components/pages/App';
import Test from 'components/pages/Test';
import Users from 'components/pages/Users';

function UsersRoute(props) {
  const { path } = props.match;

  return (
    <Switch>
      <Route path={`${path}/new`} component={Users} />
      <Route path={`${path}/:userId`} component={Users} />
      <Route component={Users} />
    </Switch>
  );
}


function AppRoute() {
  return <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/users" component={UsersRoute} />
      <Route path="/test" component={Test} />
      <Redirect to="/" />
    </Switch>
  </Router>;
}

export default AppRoute;