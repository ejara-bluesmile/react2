import React from "react";

const UserTable = (props) => {
  console.log(props.users);
  return (
    <div className="row">
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Autor</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>
          {props.users.length > 0 ? (
            props.users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-outline-info my-sm-1"
                    onClick={() => {
                      props.editRow(user);
                    }}
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger my-sm-1"
                    onClick={() => {
                      props.deleteUser(user.id);
                    }}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>No books</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
