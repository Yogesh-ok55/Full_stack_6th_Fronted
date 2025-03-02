import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: "Yogesh",
    isAuthenticated: false,
    token: Cookies.get("authToken") || null,
  });

  // 🔹 Login Function (Using fetch)
  const login = async (email, password) => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      Cookies.set("authToken", data.token, { expires: 7 });

      setAuth({ user: data.user, isAuthenticated: true, token: data.token });
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  // 🔹 Logout Function
  const logout = () => {
    Cookies.remove("authToken");
    setAuth({ user: null, isAuthenticated: false, token: null });
  };

  // 🔹 Check Authentication on Load
  useEffect(() => {
    const token = Cookies.get("authToken");

    if (token) {
      fetch("/api/me", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => {
          if (!res.ok) throw new Error("Not authenticated");
          return res.json();
        })
        .then((data) => {
          setAuth({ user: data.user, isAuthenticated: true, token });
        })
        .catch(() => logout());
    }
  }, []);

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 🔹 Custom Hook to Use Auth
export const useAuth = () => useContext(AuthContext);
