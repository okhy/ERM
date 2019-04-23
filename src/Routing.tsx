import * as React from "react";
// router
import { BrowserRouter, Route, Switch } from "react-router-dom";
// views
import SearchPage from "Views/SearchPage/SearchPage";
import DetailsPage from "Views/DetailsPage/DetailsPage";

const Routes: React.SFC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SearchPage} />
      <Route exact path="/movie/:id" component={DetailsPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
