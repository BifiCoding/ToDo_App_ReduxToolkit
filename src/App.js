import TodoList from './components/TodoList';
import InputTodo from './components/InputTodo';

import '../src/css/App.css';

function App() {
  return (
    <div className='App'>
      <InputTodo />
      <TodoList />
    </div>
  );
}

export default App;
