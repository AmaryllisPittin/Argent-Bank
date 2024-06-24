// Protection des routes et accès aux pages
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = useSelector(state => state.userLogin.success);

  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/sign-in" />;
};

export default ProtectedRoute;
