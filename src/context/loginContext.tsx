import Cookies from "js-cookie";
import React, { createContext, useState } from "react";

interface LoginContextTypes {
  token: string | null;
  login: (newToken: string) => void;
  logout: () => void;
}

const LoginContext = createContext<LoginContextTypes>({
  token: "",
  login: (newtoken: string) => {},
  logout: () => {},
});
export { LoginContext };

interface LoginContextProviderTypes {
  children: React.ReactNode;
}

export default function LoginContextProvider({
  children,
}: LoginContextProviderTypes) {
  const [token, setToken] = useState<string | null>(Cookies.get("token") || "");

  const login = (newToken: string) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
  };
  const logout = () => {
    setToken("");
    localStorage.clear();
  };
  return (
    <LoginContext.Provider value={{ token, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
}
