import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext();

export const useAuth = () => {
const value = useContext(AuthContext);
  return value;
};


export const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return <AuthContext.Provider value={ {isLoggedIn, setIsLoggedIn}}> {children}</AuthContext.Provider>;
};