import React from "react";
import { Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Auth = ({ component: Component, path, loggedIn, exact}) => {
  return ( <Route
    path={path}
    exact={exact}
    render={props =>
      !loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />)
};

const Protect = ({ component: Component, path, loggedIn, exact, location }) => {
  return (<Route
    path={path}
    exact={exact}
    render={props =>
      !loggedIn ? <Redirect to={{ pathname: "/login", state: { from: location }}}/> : <Component {...props} />
    }
  />)
};

const mapStateToProps = state => {
  return { loggedIn: Boolean(state.session.id) };
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectRoute = withRouter(connect(mapStateToProps, null)(Protect));
