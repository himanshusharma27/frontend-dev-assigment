const initialState = {
    todoLists: [],
    editingTodo: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO_LIST':
      case 'ADD_TODO':
      case 'UPDATE_TODO':
      case 'DELETE_TODO':
      case 'FETCH_TODOS':
        return {
          ...state,
          todoLists: action.payload,
        };
      case 'OPEN_EDIT_DRAWER':
        return {
          ...state,
          editingTodo: action.payload,
        };
      case 'CLOSE_EDIT_DRAWER':
        return {
          ...state,
          editingTodo: null,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  
  