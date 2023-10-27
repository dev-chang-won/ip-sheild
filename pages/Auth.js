import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext();

export const useAuth = () => {
const value = useContext(AuthContext);
  return value;
};

export const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const value = {
    isLoggedIn,
    setIsLoggedIn
  };

  return <AuthContext.Provider value={value}> {children}</AuthContext.Provider>;
};