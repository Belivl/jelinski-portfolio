import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  isAdmin: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    const adminSession = localStorage.getItem("adminSession");
    if (adminSession === "true") {
      setIsAdmin(true);
    }
  }, []);

  const login = (password: string) => {
    // In a real app, this would be a hash comparison or a server call.
    // For this portfolio, we use an env variable.
    const CORRECT_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

    if (password === CORRECT_PASSWORD) {
      setIsAdmin(true);
      localStorage.setItem("adminSession", "true");
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem("adminSession");
  };

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
