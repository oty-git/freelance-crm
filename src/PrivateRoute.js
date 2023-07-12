import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import {
  setCurrentUser,
  setUserFromLocalStorage,
} from "./store/actions/authentication";
import { useDispatch } from "react-redux";
import MainLayout from "./components/layout/main";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();

  let authorized = dispatch(setUserFromLocalStorage());

  useEffect(() => {
    if (authorized) {
      dispatch(setCurrentUser(authorized));
    }
  }, [authorized, dispatch]);

  return (
    <Route
      {...rest}
      render={(props) =>
        authorized ? (
          <MainLayout>
            <Component {...props} />
          </MainLayout>
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
};
export default PrivateRoute;
