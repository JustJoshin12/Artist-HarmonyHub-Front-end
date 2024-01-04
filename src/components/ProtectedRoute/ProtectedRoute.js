import React from "react";
import { Route, Redirect } from "react-router-dom";
import  AppContext  from "../../contexts/AppContext";

const ProtectedRoute = ({ children, ...props }) => {
  const value = React.useContext(AppContext);

  return (
    <Route
      {...props}
      children={
        value.state.loggedIn === true ? (
          children
        ) : (
          <Redirect to="/"/>
        )
      }
    />
  );
};

export default ProtectedRoute;