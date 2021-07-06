import {useRef,useState} from "react";
import List from "./List";
import './App.css';
 
function App() {
  const inputEl = useRef(null);
  const [todos,setTodos] = useState([])
  const handleAdd = () => {
     const todo = inputEl.current.value;
     if(todo){
       setTodos([todo,...todos]);
       inputEl.current.value = "";
     }else{
       alert("empty input")
     }
   }
  const del = (i) => {
    const newTodos = todos.filter((t,index) => index != i);
    setTodos(newTodos);
  }
  return (
    <div className="App">
      <h1>React todo</h1>
        <div className="todo_input">
           <input className="input" ref={inputEl} type="text" placeholder="new todo...."  />
           <button type="button" onClick={handleAdd} id='button'>add</button>
        </div>
        <List items={todos} del={del} />
    </div>
  );
}

export default App;