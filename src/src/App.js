import React from 'react';
import TodoList from './components/TodoList';
import EditDrawer from './components/EditDrawer';

const App = () => {
  return (
    <div>
      <h1>Decentralized Trello</h1>
      <TodoList />
      <EditDrawer />
    </div>
  );
};

export default App;

