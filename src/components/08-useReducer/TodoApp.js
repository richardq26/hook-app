import React, { useEffect, useReducer } from "react";
import { useForm } from "../../hooks/useForm";
import "./styles.css";
import { todoReducer } from "./todoReducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  const handleAddTodo=(newTodo)=>{
    dispatch({
      type: 'add',
      payload: newTodo
    });
  }

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

  // Función para tachar la tarea
  const handleToggle = (todoId) =>{
    dispatch({ 
      type: 'toggle',
      payload: todoId
    })
  }

  return (
    <>
      <ToastContainer />
      <h1>TodoApp: {todos.length}</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} handleToggle = {handleToggle } handleDelete = {handleDelete}/>
        </div>
        <div className="col-5">
          <TodoAdd handleAddTodo={handleAddTodo}/>
        </div>
      </div>
    </>
  );
};
