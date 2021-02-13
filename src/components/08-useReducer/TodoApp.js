import React, { useEffect, useReducer } from "react";
import { useForm } from "../../hooks/useForm";
import "./styles.css";
import { todoReducer } from "./todoReducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];

  //   return [
  //     {
  //       id: new Date().getTime(),
  //       desc: "Aprender React",
  //       done: false,
  //     },
  //   ];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  // Usando el useForm de hooks propios
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) {
      return toast.warn("¡Debe agregar un value!", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };

    dispatch(action);
    reset();
  };

  const handleDelete = (todoId) => {
    console.log(todoId);
    const action = {
      type: "delete",
      payload: todoId,
    };
    toast.warn('Tarea borrada',{autoClose: 1000});
    dispatch(action);
    // No es necesario actualizar el localstorage debido al useEffect
  };

  return (
    <>
      <ToastContainer />
      <h1>TodoApp: {todos.length}</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((todo, i) => (
              <li className="list-group-item" key={todo.id}>
                <p className="text-center">
                  {i + 1}. {todo.desc}
                </p>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(todo.id)}
                >
                  Borrar
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-5">
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
            <button
              className="btn btn-outline-primary col-12 mt-2"
              type="submit"
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
