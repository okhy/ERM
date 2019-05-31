import * as React from "react";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import wrapAppStringWithTemplate from "./wrapAppStringWithTemplate";
// components
import App, { handleError } from "./../index";

type renderAppToStringType = (store?: any) => string;
const renderAppToString: renderAppToStringType = store => {
  return wrapAppStringWithTemplate(
    store,
    renderToString(<App router={StaticRouter} errorHandler={handleError} />)
  );
};

export default renderAppToString;
