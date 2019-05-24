import * as React from "react";
// router
import { HashRouter, Route, Switch } from "react-router-dom";
// views
import SearchPage from "Views/SearchPage/SearchPage";
import DetailsPage from "Views/DetailsPage/DetailsPage";
import ErrorPage from "Views/ErrorPage/ErrorPage";

type RoutesPropsType = {
  router?: any;
};
const Routes: React.SFC<RoutesPropsType> = ({ router }) => {
  const Router = router || HashRouter;
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route exact path="/movie/:id" component={DetailsPage} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
