import React from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';

export interface Config {
  path: string;
  exact?: boolean;
  component: JSX.Element;
}

interface RouterProps {
  configRoute: Config[];
}

const Router = ({ configRoute }: RouterProps) => {
  const match = useRouteMatch();

  return (
    <Switch>
      {configRoute.map(({ path, exact, component }) => (
        <Route path={`${match.path}/${path}`} exact={exact} key={path}>
          {component}
        </Route>
      ))}
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default Router;
