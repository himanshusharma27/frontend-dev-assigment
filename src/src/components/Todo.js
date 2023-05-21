import React from 'react';
import { useDispatch } from 'react-redux';
import { openEditDrawer } from '../redux/actions';

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const handleEditTodo = () => {
    dispatch(openEditDrawer(todo));
  };

  return (
    <div>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <button onClick={handleEditTodo}>Edit</button>
    </div>
  );
};

export default Todo;
