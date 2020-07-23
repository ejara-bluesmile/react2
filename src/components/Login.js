import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Biblioteca from "./Biblioteca";

function Login() {
  return (
    <Router>
      <div className="container">
        <div className="row justify-content-center mt5- pt-5">
          <div className="col-md-7">
            <h1 className=" display-4">Bibliomatica</h1>
            <hr />
            <p className="pb-0 mb-0">
              Ingresa a la mejor pagina para encontrar tu libro favorito!
            </p>
            <p className="text-primary small pt-0 mt-0">
              Añade tus datos, solo ficticio por ahora
            </p>
            <form>
              <div class=" row form-group">
                <label for="">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id=""
                  placeholder="Ingresa tu Nombre"
                />

                <label for="">Correo</label>
                <input
                  type="email"
                  className="form-control"
                  id=""
                  placeholder="Ingresa tu correo"
                />
                <label for="">Edad</label>
                <input
                  type="text"
                  className="form-control"
                  id=""
                  placeholder="Ingresa tu correo"
                />
              </div>
            </form>
          </div>
          {/* <Switch>
            <Route path="/biblioteca">
              <Biblioteca />
            </Route>
          </Switch> */}
        </div>
      </div>
    </Router>
  );
}

export default Login;
