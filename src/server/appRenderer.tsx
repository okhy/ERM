import * as React from "react";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import wrapAppStringWithTemplate from "./wrapAppStringWithTemplate";
// components
import App from "./../index";

type renderAppToStringType = (state?: any) => string;
const renderAppToString: renderAppToStringType = state => {
  return wrapAppStringWithTemplate(
    renderToString(<App state={state} router={StaticRouter} />)
  );
};

export default renderAppToString;
