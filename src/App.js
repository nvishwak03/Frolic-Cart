// src/App.js
import React from 'react';
import RouteConfig from './routes/RouteConfig';
import { AuthProvider } from './contexts/AuthContext'; // Wrap the app in AuthContext provider

const App = () => {
  return (
    <AuthProvider>
      <RouteConfig />
    </AuthProvider>
  );
};

export default App;
