import React from 'react';
import { Redirect, Route } from 'react-router-dom';


const PrivateRoutes = ({ component: Component, ...rest }) => {
  var session_token = localStorage.getItem('jsonwebtoken')

  return (
    <Route {...rest} render={props => (
      session_token !== null ? (
        < Component {...rest} {...props} />
      ) : (
        <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }}
        />
      )
    )}
    />
  )
};

export default PrivateRoutes;