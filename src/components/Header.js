import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar  navbar-dark bg-primary">
      <Link to="/admin">
        <a className="navbar-brand" href="">
          Bibliomatica
        </a>
      </Link>
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
    </nav>
  );
}
export default Header;
