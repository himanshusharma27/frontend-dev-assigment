// Write Calls
const addList = async (listName) => {
    const transaction = await contract.addList(listName);
    await transaction.wait();
  };
  
  const addTodo = async (listName, name, description) => {
    const transaction = await contract.addTodo(listName, name, description);
    await transaction.wait();
  };
  
  const updateTodo = async (todoId, listName, name, description) => {
    const transaction = await contract.updateTodo(todoId, listName, name, description);
    await transaction.wait();
  };
  
  const deleteTodo = async (todoId, listName) => {
    const transaction = await contract.deleteTodo(todoId, listName);
    await transaction.wait();
  };
  
  // Read Calls
  const getTodos = async () => {
    const todos = await contract.getTodos();
    return todos;
  };
  