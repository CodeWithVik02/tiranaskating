import React from 'react';
import { Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const AuthRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('token');
const navigate = useNavigate();
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
         navigate('/')
        )
      }
    />
  );
};

export default AuthRoute;
