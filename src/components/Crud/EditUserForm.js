import React from "react";
import { useForm } from "react-hook-form";

const EditUserForm = (props) => {
  const { register, errors, handleSubmit, setValue } = useForm({
    defaultValues: props.currentUser,
  });
  // setValue("name", props.currentUser.name);
  // setValue("username", props.currentUser.username);

  const onSubmit = (data, e) => {
    console.log(data);

    props.updateUser(props.currentUser.id, data);
    // props.addUser(data);
    e.target.reset();
  };
  return (
    <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
      <label>Titulo</label>
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
        Editar
      </button>
    </form>
  );
};

export default EditUserForm;
