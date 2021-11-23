

import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../../hooks/useAuth";
const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, isLoading } = useAuth();
  console.log(admin);
  if (isLoading) {
    return (
      <div class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
