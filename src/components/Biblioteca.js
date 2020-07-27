import React, { Component } from "react";
import Buscador from "./Buscador";
import Resultado from "./Resultados";
import Header from "./Header";

class Biblioteca extends Component {
  state = { book: "", objeto: [], isLoggedIn: false };

  consultarApi = () => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.book}`;
    console.log(url);
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) => this.setState({ objeto: resultado.items }));
  };

  datosBusqueda = (book) => {
    this.setState(
      {
        book,
      },
      () => {
        this.consultarApi();
      }
    );
    // console.log(busqueda);
  };

  render() {
    return (
      <div>
        {/* <nav className="navbar  navbar-dark bg-primary">
          <a className="navbar-brand" href="">
            Bibliomatica
          </a>
          <Link to="/crud">
            <a className="navbar-brand" href="">
              Administracion
            </a>
          </Link>
          <form className="form-inline">
            <Link to="/logout">
              <button className="btn btn-warning my-2 my-sm-0" type="button">
                Logout
              </button>
            </Link>
          </form>
        </nav> */}
        <Header />
        <div className="jumbotron container">
          <h1 className="display-3">Hola {this.props.nick} !</h1>
          <p className="lead">
            Estas entrando al buscador mas increible de la web! Busca el libro
            que mas te guste y llena ese cerebro de conocimiento :D!
          </p>

          <hr />
        </div>
        <div className="container">
          <div className="">
            <Buscador datosBusqueda={this.datosBusqueda} />
          </div>
          <Resultado libros={this.state.objeto} />
        </div>
      </div>
    );
  }
}

export default Biblioteca;
