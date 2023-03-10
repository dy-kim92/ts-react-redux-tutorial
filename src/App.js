import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import GithubProfileLoader from './containers/GithubProfileLoader';

//
function App() {
  return (
    <>
      {/* <TodoInsert />
      <TodoList /> */}
      <GithubProfileLoader />
    </>
  );
}

export default App;