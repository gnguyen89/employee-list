import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from 'components/pages/App';
import Users from 'components/pages/Users';

function UsersRoute(props) {
  const { path } = props.match;

  return (
    <Switch>
      <Route path={`${path}/all`} component={Users} />
      <Route path={`${path}/new`} component={Users} />
      <Route path={`${path}/:userId`} component={Users} />
      <Route path={`${path}/:userId/edit`} component={Users} />
      <Redirect to={`${path}/all`} />
    </Switch>
  );
}


function AppRoute() {
  return <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/users" component={UsersRoute} />
      <Redirect to="/" />
    </Switch>
  </Router>;
}

export default AppRoute;