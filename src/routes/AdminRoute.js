import React from 'react';
import { Route } from 'react-router-dom';
import { redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // Assuming you have an AuthContext

const AdminRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth(); // Get current user from context

  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser && currentUser.role === 'admin' ? (
          <Component {...props} />
        ) : (
          <redirect to="/" />
        )
      }
    />
  );
};

export default AdminRoute;
