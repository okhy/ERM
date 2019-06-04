import * as React from "react";
// router
import { Route, Switch } from "react-router-dom";
// views
import DetailsPage from "Views/DetailsPage/DetailsPage";
import ErrorPage from "Views/ErrorPage/ErrorPage";
import SearchPage from "Views/SearchPage/SearchPage";

export type RouterType = React.ElementType;
const Routes: React.SFC<{ PassedRouter: RouterType }> = ({ PassedRouter }) => {
  return (
    <PassedRouter>
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route exact path="/movie/:id" component={DetailsPage} />
        <Route component={ErrorPage} />
      </Switch>
    </PassedRouter>
  );
};

export default Routes;
