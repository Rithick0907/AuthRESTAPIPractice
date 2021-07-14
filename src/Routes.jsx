import { Redirect, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/profile" component={Profile} />
      <Redirect to="/login" />
    </Switch>
  );
};

export default Routes;
