import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Biblioteca from "../Biblioteca";

export default class Login extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    const nick = localStorage.getItem("nick");
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    this.state = {
      username: "",
      password: "",
      loggedIn,
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();
    const { username, password } = this.state;

    if (username === "sebas" && password === "bluesmile") {
      localStorage.setItem("token", "ansfdjanfdkjasdknf");
      localStorage.setItem("nick", username);
      this.setState({
        loggedIn: true,
      });
    }
  }
  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/admin"></Redirect>;
    }
    return (
      <div>
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
              <form onSubmit={this.submitForm}>
                <div class=" row form-group">
                  <label for="">Nombre Usuario</label>
                  <input
                    type="text"
                    placeholder="username"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange}
                    className="form-control"
                  />
                  <label for="">Contraseña</label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    className="form-control"
                    id=""
                  />
                  <br />
                  <input
                    className="btn btn-primary btn-lg "
                    type="submit"
                    placeholder="Entrar"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
