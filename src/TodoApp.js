import React, { useEffect, useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";
import { FuncContext } from "./UserContext";

const init = () => {
  return JSON.parse(localStorage.getItem("todos") || []);
};

export const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, [], init);


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);


  const handleAddTodo = (newTodo) => {
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };

  const handleDelete = (todo) => {
    todo.del = true;

    setTimeout(() => {
      dispatch({
        type: "delete",
        payload: todo.id,
      });
    }, 200);
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: "toggle",
      payload: todoId,
    });
  };

  return (
    <FuncContext.Provider value={{handleToggle, handleDelete}}>
      <div>
        <header className="header">
          <h1>Todo List App</h1>
        </header>

        <TodoAdd handleAddTodo={handleAddTodo} task />

        <div className="todos-container">
          <TodoList
            state={state}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
      </div>
    </FuncContext.Provider>
  );
};
