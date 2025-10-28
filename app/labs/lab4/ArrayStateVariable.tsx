import { useState } from "react";
import { useSelector } from "react-redux";

export default function ArrayStateVariable() {
  const todos = useSelector((state: any) => state.todosReducer?.todos || []);
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
  
  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <button onClick={addElement}>Add Element</button>
      <ul>
        {array.map((item, index) => (
          <li key={index}> 
            {item}
            <button onClick={() => deleteElement(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      
      <hr />
      
      <ul>
        {todos.map((todo: any) => (
          <li key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
      
      <hr />
    </div>
  );
}