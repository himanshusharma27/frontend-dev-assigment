import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeEditDrawer, updateTodo } from '../redux/actions';

const EditDrawer = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const editingTodo = useSelector(state => state.editingTodo);
  const dispatch = useDispatch();

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = e => {
    setDescription(e.target.value);
  };

  const handleUpdateTodo = () => {
    const updatedTodo = {
      ...editingTodo,
      title,
      description,
    };
    dispatch(updateTodo(updatedTodo));
    dispatch(closeEditDrawer());
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Description"
      ></textarea>
      <button onClick={handleUpdateTodo}>Save</button>
    </div>
  );
};

export default EditDrawer;
