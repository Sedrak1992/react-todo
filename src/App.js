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
       console.log(todos);
       inputEl.current.value = "";
     }else{
       alert("empty input")
     }
  }
  return (
    <div className="App">
      <h1>React todo</h1>
        <div className="todo_input">
           <input ref={inputEl} type="text" placeholder="new todo...."  />
           <button type="button" onClick={handleAdd}>add</button>
        </div>
        <List items={todos} />
    </div>
  );
}

export default App;