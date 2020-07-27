import React from "react";
import { userForm, useForm } from "react-hook-form";

const AddUserForm = (props) => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    props.addUser(data);
    e.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Titulo</label> <br />
        <input
          className="form-control mr-sm-2"
          type="text"
          name="name"
          ref={register({
            required: { value: true, message: "campo requerido" },
          })}
        />
        <div>{errors?.name?.message}</div>
        <label>Autor</label>
        <br />
        <input
          className="form-control mr-sm-2"
          type="text"
          name="username"
          ref={register({
            required: { value: true, message: "campo requerido" },
          })}
        />
        <div>{errors?.username?.message}</div>
        <button type="submit" className="btn btn-outline-primary my-sm-0">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;
