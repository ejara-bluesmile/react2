import React, { Component } from "react";
import Libros from "./Libros";

class Resultado extends Component {
  mostrarLibros = () => {
    const libros = this.props.libros;
    console.log(libros);

    return (
      <React.Fragment>
        <div className="col-12 p-5 row">
          {libros.map((libros) => (
            <Libros key={libros.id} libros={libros} />
          ))}
        </div>
      </React.Fragment>
    );
  };
  render() {
    return <React.Fragment>{this.mostrarLibros()}</React.Fragment>;
  }
}
export default Resultado;
