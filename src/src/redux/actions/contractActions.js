import { addList, addTodo, updateTodo, deleteTodo, getTodos } from './contractUtils';

export const addTodoList = (listName) => {
  return async (dispatch) => {
    try {
      await addList(listName);
      const todos = await getTodos();
      dispatch({ type: 'ADD_TODO_LIST', payload: todos });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addNewTodo = (listName, name, description) => {
  return async (dispatch) => {
    try {
      await addTodo(listName, name, description);
      const todos = await getTodos();
      dispatch({ type: 'ADD_TODO', payload: todos });
    } catch (error) {
      console.log(error);
    }
  };
};

// Implement other actions (updateTodo, deleteTodo) similarly

export const fetchTodos = () => {
  return async (dispatch) => {
    try {
      const todos = await getTodos();
      dispatch({ type: 'FETCH_TODOS', payload: todos });
    } catch (error) {
      console.log(error);
    }
  };
};
