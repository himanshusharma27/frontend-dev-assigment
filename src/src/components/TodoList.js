import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

const TodoList = () => {
  const todoLists = useSelector(state => state.todoLists);

  return (
    <div>
      {todoLists.map(todoList => (
        <div key={todoList.id}>
          <h2>{todoList.title}</h2>
          {todoList.todos.map(todo => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
