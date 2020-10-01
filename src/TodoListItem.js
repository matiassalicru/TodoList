import React from "react";
import trashCan from "./TrashCan.png";

export const TodoListItem = ({ todo, i, handleToggle, handleDelete }) => {

  return (
    <li
      key={todo.id}
      onClick={() => handleToggle(todo.id)}
      className={` ${todo.done ? "complete-li" : null} ${
        todo.del ? "delete-animation" : null
      }`}
    >
      <p className={` ${todo.done ? "complete" : null} `}>
        {i + 1}. {todo.task}
      </p>
      <button onClick={() => handleDelete(todo)}>
        <img className="trash-can" src={trashCan} alt="trashCan" />
      </button>
    </li>
  );
};
