import React from "react";
import "./Libros.css";

const Libros = (props) => {
  const { volumeInfo, etag } = props.libros;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card border-primary mb-3">
        <div className="card-header" id="text">
          Titulo: {volumeInfo.title}
        </div>
        <img
          src={volumeInfo.imageLinks.smallThumbnail}
          alt={etag}
          className="card-img-top"
        />
        <div className="card-body">
          <p className="card-text" id="text">
            Autor: {volumeInfo.authors}
          </p>
          <p className="card-text" id="text">
            Fecha Publicacion: {volumeInfo.publishedDate}
          </p>
          <p className="card-text" id="text">
            Publicado por: {volumeInfo.publisher}
          </p>
          <a
            href={volumeInfo.previewLink}
            target="_black"
            className="btn btn-primary btn-block"
          >
            Ir al Libro
          </a>
        </div>
      </div>
    </div>
  );
};

export default Libros;
