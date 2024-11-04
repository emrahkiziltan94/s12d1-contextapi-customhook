import { useState, createContext } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState(null);
  const login = (user) => {
    setUsername(user);
  };
  const logOut = () => {
    setUsername(null);
  };

  return (
    <AuthContext.Provider value={{ username, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
