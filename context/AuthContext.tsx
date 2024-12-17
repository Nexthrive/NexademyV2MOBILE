import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Create a context
const AuthContext = createContext<{
  isLoggedIn: boolean | null;
  login: () => void;
  logout: () => void;
} | null>(null);

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// AuthProvider component
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  // Check login status when the app starts
  useEffect(() => {
    const checkLoginStatus = async () => {
      const userToken = await AsyncStorage.getItem("userToken");
      setIsLoggedIn(!!userToken);
    };
    checkLoginStatus();
  }, []);

  // Login function
  const login = async () => {
    await AsyncStorage.setItem("userToken", "someToken");
    setIsLoggedIn(true); // Update state
  };

  // Logout function
  const logout = async () => {
    await AsyncStorage.removeItem("userToken");
    setIsLoggedIn(false); // Update state
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
