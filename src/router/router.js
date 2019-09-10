import React from "react";
import { Route } from "react-router-dom";
import App from "../client/App";

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={App} />
      </React.Fragment>
    );
  }
}

export default ReactRouter;
