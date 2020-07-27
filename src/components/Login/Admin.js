import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Biblioteca from "../Biblioteca";

export default class Admin extends Component {
  constructor(props) {
    super(props);
    const token = localStorage.getItem("token");
    let loggedIn = true;
    if (token == null) {
      loggedIn = false;
    }
    this.state = {
      loggedIn,
    };
  }
  render() {
    if (this.state.loggedIn === false) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Biblioteca nick={this.state.nick} />
      </div>
    );
  }
}
