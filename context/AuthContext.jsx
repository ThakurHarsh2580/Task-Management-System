import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(() => {
      const storedUser = localStorage.getItem("loggedInUser")

      return storedUser ? JSON.parse(storedUser) : null;
    }); 

  return (
    <AuthContext.Provider value={{user, setUser}}> 
        {children}      
    </AuthContext.Provider>
  )
}