import React, { useEffect, useState } from "react";
import "./effects.css";
import Message from "./Message";
const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });
  const { name, email } = formState;

  useEffect(() => {
    console.log("XDDDDD");
    // Si se envia ,[] solo se carga una vez al inicio
  }, []);

  // Pendiente del form
  useEffect(() => {
    console.log('FormState cambió: ' , formState);
  }, [formState]);

  // Pendiente del email
  useEffect(() => {
    console.log('Email cambió: ' , formState.email);
  }, [email]);


  const handleInputChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />
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
      <div className="form-group">
        <input
          onChange={handleInputChange}
          type="email"
          name="email"
          className="form-control"
          placeholder="email@gmail.com"
          value={email}
        />
      </div>

      {(name == 123) && <Message />}
    </>
  );
};

export default SimpleForm;
