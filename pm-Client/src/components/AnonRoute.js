//components/AnonRoute.justify

import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../lib/Auth";

function AnonRoute(props) {
  const { component: Component, isLoggedIn, ...rest } = props;
   // const { component: Component, isLoggedIn, exact, path } = props;
 
  return (
    <Route
      //exact={exact} path={path}
      {...rest}
      render={function (props) {
        if (isLoggedIn) return <Redirect to="/projects" />;
        else if (!isLoggedIn) return <Component {...props} />;
      }}
    />
  );
}

export default withAuth(AnonRoute);