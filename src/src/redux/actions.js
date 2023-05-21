export const openEditDrawer = todo => {
    return {
      type: 'OPEN_EDIT_DRAWER',
      payload: todo,
    };
  };
  
  export const closeEditDrawer = () => {
    return {
      type: 'CLOSE_EDIT_DRAWER',
    };
  };
  
  export const updateTodo = todo => {
    return {
      type: 'UPDATE_TODO',
      payload: todo,
    };
  };
  