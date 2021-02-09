import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import "./effects.css";

const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = formValues;

  useEffect(() => {
    console.log("Email cambió");
  }, [email]);

  const handleSubmit = (e)=>{
    // el e.preventDefault porque cuando se envía un formulario la página se recarga
    e.preventDefault();
    console.log(formValues);
  }
  return (
    <>
      <h1>FormWithCustomHook</h1>
      <hr />
      <form onSubmit = { handleSubmit }>
        <div className="form-group mb-3">
          <input
            onChange={handleInputChange}
            type="text"
            name="name"
            className="form-control"
            placeholder="Nombre"
            value={name}
          />
        </div>
        <div className="form-group mb-3">
          <input
            onChange={handleInputChange}
            type="email"
            name="email"
            className="form-control"
            placeholder="email@gmail.com"
            value={email}
          />
        </div>
        <div className="form-group mb-3">
          <input
            onChange={handleInputChange}
            type="password"
            name="password"
            className="form-control"
            placeholder="Your password"
            value={password}
          />
        </div>
        <button type="submit" className="btn btn-primary">Subir</button>
      </form>
    </>
  );
};

export default FormWithCustomHook;
