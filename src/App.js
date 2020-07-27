import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Biblioteca from "./components/Biblioteca";
import LoginLogin from "./components/Login/Login";
import Admin from "./components/Login/Admin";
import Logout from "./components/Login/Logout";
import Crud from "./components/Crud/FormCrud";

function App() {
  return (
    <Router>
      <div className="">
        <Switch>
          <Route exact path="/" component={LoginLogin}></Route>
          <Route exact path="/biblioteca" component={Biblioteca}></Route>
          <Route exact path="/admin" component={Admin}></Route>
          <Route exact path="/logout" component={Logout}></Route>
          <Route exact path="/crud" component={Crud}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
