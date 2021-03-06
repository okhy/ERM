import * as React from "react";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import wrapAppStringWithTemplate from "./wrapAppStringWithTemplate";
// components
import App, { handleError } from "./../index";

type renderAppToStringType = (options: {
  store?: any;
  location?: any;
}) => string;
const renderAppToString: renderAppToStringType = ({ store, location }) => {
  const context = {};
  const RouterStatic: React.SFC = (props: any) => (
    <StaticRouter location={location} context={context}>
      {props.children}
    </StaticRouter>
  );
  return wrapAppStringWithTemplate(
    store,
    renderToString(<App router={RouterStatic} errorHandler={handleError} />)
  );
};

export default renderAppToString;
