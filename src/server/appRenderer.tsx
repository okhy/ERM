import * as React from "react";
import { StaticRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";
import wrapAppStringWithTemplate from "./wrapAppStringWithTemplate";
// components
import App from "./../index";

type renderAppToStringType = (store?: any) => string;
const renderAppToString: renderAppToStringType = store => {
  return wrapAppStringWithTemplate(
    store,
    renderToString(
      <App errorHandler={error => console.log(error)} router={StaticRouter} />
    )
  );
};

export default renderAppToString;
