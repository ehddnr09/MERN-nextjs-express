import { useCallback, useState } from "react";
import Layout from "../src/layout";
import { AuthContext } from "../src/shared/context/auth-context";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </AuthContext.Provider>
  );
}

export default MyApp;
