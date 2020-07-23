import React, { Component } from "react";
import Buscador from "./Buscador";
import Resultado from "./Resultados";

class App extends Component {
  state = { book: "", objeto: [], isLoggedIn: false };

  consultarApi = () => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.book}`;
    // console.log(url);
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
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="">
            Bibliomatica
          </a>
        </nav>
        <div className="jumbotron container">
          <h1 className="display-3">Hola Lector!</h1>
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

export default App;
// const Biblioteca = () => {
//   const [book, setBook] = React.useState([]);

//   React.useEffect(() => {
//     console.log("useEffect");
//     obtenerDatos();
//   }, []);

//   const obtenerDatos = async () => {
//     const data = await fetch(
//       `https://www.googleapis.com/books/v1/volumes?q=${this.state.books}`
//     );
//     const libros = await data.json();
//     console.log(libros);
//     setBook(libros.items);
//   };

//   const datosBusqueda = (book) => {
//     this.setState(
//       {
//         book,
//       },
//       () => {
//         this.obtenerDatos();
//       }
//     );
//   };

//   return (
//     <div>
//       <h1>Biblioteca</h1>
//       <div className="jumbotron">
//         <Buscador datosBusqueda={this.datosBusqueda} />
//       </div>
//       <ul>
//         {book.map((item) => (
//           <li key={item.id}> {item.volumeInfo.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Biblioteca;
