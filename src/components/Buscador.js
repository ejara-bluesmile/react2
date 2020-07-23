import React, { Component } from "react";

class Buscador extends Component {
  busquedaRef = React.createRef();

  obtenerDato = (e) => {
    e.preventDefault();

    console.log(this.busquedaRef.current.value);
    const busqueda = this.busquedaRef.current.value;
    this.props.datosBusqueda(busqueda);
  };

  render() {
    return (
      <form onSubmit={this.obtenerDato}>
        <div className="">
          <div className="form-inline my-2 my-lg-0">
            <input
              ref={this.busquedaRef}
              type="text"
              className="form-control form-control-lg col-md-8 mr-sm-2"
              placeholder="Busca tu libro favorito..."
            />
            <input
              className="btn btn-lg btn-danger bt-block col-md-3 my-sm-0"
              type="submit"
              value="Buscar..."
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Buscador;
