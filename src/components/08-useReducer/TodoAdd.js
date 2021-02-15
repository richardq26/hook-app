import React from "react";
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({handleAddTodo}) => {
    // Usando el useForm de hooks propios
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  const handleSubmit =(e)=>{
      e.preventDefault();
      const newTodo = {
        id: new Date().getTime(),
        desc: description,
        done: false,
      };

      handleAddTodo(newTodo);
      reset();
  }
  return (
    <>
      <h4>Agregar ToDo</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="text"
          name="description"
          placeholder="Aprender..."
          autoComplete="off"
          onChange={handleInputChange}
          value={description}
        />
        <button className="btn btn-outline-primary col-12 mt-2" type="submit">
          Agregar
        </button>
      </form>
    </>
  );
};
