import Navbar from "./components/CustomNavbar";
import Routes from "./Routes";
import UserContext from "./contexts/UserContext";
import { useState } from "react";

const App = () => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider value={{ token, loginHandler, logoutHandler }}>
      <Navbar />
      <Routes />
    </UserContext.Provider>
  );
};

export default App;
