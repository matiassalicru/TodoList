import React, { useContext } from 'react'
import { TodoListItem } from './TodoListItem';
import { FuncContext } from './UserContext';

export const TodoList = ({state}) => {

  const funciones = useContext(FuncContext);

  const {handleToggle, handleDelete} = funciones;

  return (
    <ul>
      {state.map((todo, i) => (
        <TodoListItem
          key={i}
          todo={todo}
          i={i}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};
