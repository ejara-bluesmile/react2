import React, { useState } from "react";
import UserTable from "./UserTable";
import AddUserForm from "./AddUserForm";

import EditUserForm from "./EditUserForm";
import { v4 as uuidv4 } from "uuid";

const Crud = () => {
  const usersData = [
    { id: uuidv4(), name: "Papelucho", username: "Marcela Paz" },
    { id: uuidv4(), name: "Harry Potter", username: "J. K. Rowling" },
    {
      id: uuidv4(),
      name: "A Game of Thrones ",
      username: "George R.R. Martin",
    },
  ];

  const [users, setUsers] = useState(usersData);

  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: "",
    username: "",
  });

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
    });
  };

  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updateUser : user)));
  };

  return (
    <div className="container">
      <h1>Crud Libreria</h1>
      <hr />
      <div className="row">
        <div className="form-group col-6">
          {editing ? (
            <div>
              {" "}
              <h2>Editar Libro</h2>
              <EditUserForm currentUser={currentUser} updateUser={updateUser} />
            </div>
          ) : (
            <div>
              <h2>Añadir Libro</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="form-group col-6">
          <h2>Listado</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
};

export default Crud;
