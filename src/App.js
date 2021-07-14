import Navbar from "./components/CustomNavbar";
import Routes from "./Routes";
import UserContext from "./contexts/UserContext";
import { useState } from "react";

const App = () => {
  const [token, setToken] = useState(null);

  const loginHandler = (token) => setToken(token);

  const logoutHandler = () => setToken(null);

  return (
    <UserContext.Provider value={{ token, loginHandler, logoutHandler }}>
      <Navbar />
      <Routes />
    </UserContext.Provider>
  );
};

export default App;
