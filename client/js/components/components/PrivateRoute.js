import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = (props) => {
  const { render: Component } = props;
  let redirectUrl;
  const token = "hello" ;
  if (!token) {
      redirectUrl = `/login?redirect=${window.location.href}`;
  }
  return (
    <Route
      {...props}
      render={prop => (token ? <Component {...prop} /> : <Redirect to={redirectUrl}/>)}
    />
  );
};

export default PrivateRoute;