import React, { createContext, useContext, useState, useEffect } from 'react';
import supabase from '../utils/supabaseClient';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = supabase.auth.user();
    setCurrentUser(user); // Set the current user when the app loads

    // Optionally subscribe to auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange((_, user) => {
      setCurrentUser(user);
    });

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
