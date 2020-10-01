import React, { useState } from "react";
import { useForm } from "./Hooks/useForm";

export const TodoAdd = ({ handleAddTodo }) => {
  const [text, setText] = useState(false);

  const [{ task }, handleInputChange, reset] = useForm({
    task: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === "") {
      setText(true);
      setTimeout(() => {
        setText(false);
      }, 1500);
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      task: task,
      done: false,
      del: false,
    };

    console.log("Submited");
    handleAddTodo(newTodo);
    reset();
  };

  return (
    <div className="input-container">
      <form onSubmit={handleSubmit} className='form'>
        <input
          type="text"
          name="task"
          onChange={(e) => handleInputChange(e)}
          value={task}
          autoComplete="off"
          placeholder="Nueva tarea..."
        />
        <button className="btn-add"> Agregar tarea </button>
      </form>
      {text ? <small>Por favor ingresa una tarea primero</small> : null}
    </div>
  );
};
