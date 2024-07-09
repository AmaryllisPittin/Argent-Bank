// Protection des routes et accès aux pages
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = useSelector((state) => state.userLogin.token);
  return token ? children : <Navigate to="/sign-in" />;
};

export default ProtectedRoute;

