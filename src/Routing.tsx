import * as React from "react";
// router
import { HashRouter, Route, Switch } from "react-router-dom";
// views
import SearchPage from "Views/SearchPage/SearchPage";
import DetailsPage from "Views/DetailsPage/DetailsPage";
import ErrorPage from "Views/ErrorPage/ErrorPage";

const Routes: React.SFC = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={SearchPage} />
      <Route exact path="/movie/:id" component={DetailsPage} />
      <Route exact path="/404" component={ErrorPage} />
    </Switch>
  </HashRouter>
);

export default Routes;
