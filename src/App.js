import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import User from './pages/User';
import Form from './pages/Form';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userProfile } from './redux/actions';
import ProtectedRoute from './redux/ProtectedRoute';

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.userLogin.token);

  useEffect(() => {
    if (token) {
      dispatch(userProfile(token));
    }
  }, [dispatch, token]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          }
        />
        <Route
          path="/formulaire"
          element={
            <ProtectedRoute>
              <Form />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;


