import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Biblioteca from "./components/Biblioteca";

function App() {
  return (
    <Router>
      <div className="">
        <Route path="/" exact>
          <Login />
          <div className="row justify-content-center">
            <Link to="biblioteca" className="btn btn-primary btn-lg ">
              Entrar
            </Link>
          </div>
        </Route>
        <Switch>
          <Route path="/biblioteca">
            <Biblioteca />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
