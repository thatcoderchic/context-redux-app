import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState("");

  const login = (name, userRole) => {
    setIsLoggedIn(true);
    setUserName(name);
    setRole(userRole);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserName("");
    setRole("");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userName, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
