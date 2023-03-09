import logo from './logo.svg';
import './App.css';
import CounterContainer from './containers/CounterContainer'
import Counter from './components/Counter';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';


function App() {
  return (
    <>
      <TodoInsert />
      <TodoList />
    </>
  );
}

export default App;
