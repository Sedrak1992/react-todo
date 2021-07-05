import './App.css';
import List from "./List";

const todos = ["Todo 01","Todo 02","Todo 03","Todo 04","Todo 05","Todo 06"];

function App() {
  return (
    <div className="App">
      <h1>React todo</h1>
        <div className="todo_input">
           <input type="text" placeholder="new todo...." />
           <button type="button">add</button>
        </div>
        <h2>lorem20 </h2>
        <h2>lorem20 </h2>
        <List items={todos} />
    </div>
  );
}
export default App;
