import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import tasks from './dataTasks';
import Item from './Item/Item.jsx';
import Form from '../Form/Form';
import './List.css'


const List = () => {
  const [items, setItems] = useState(tasks);
  const [messageText, setMessageText] = useState("")
  const [value, setValue] = useState("");


  const paint = () => items.map((task) => <Item todo={task.task} key={task.id} deleteItem={() =>deleteTask(task.id)}/>)

  const handleAdd = (e) => {
    e.preventDefault();
    if(value.length > 5) {
      taskMessageDisplay("tarea añadida");
      addTask(value);
      setValue("");
    }
    else {
      taskMessageDisplay("La tarea debe tener 6 caracteres como mínimo");
    }
  };
  
  const addTask = (task) => setItems([{id: uuidv4(), task}, ...items]);
  const deleteTask = (id) => setItems(items.filter(task => task.id !== id));
  const deleteTasks = () => setItems([]);
  const reloadTasks = () => setItems(tasks);

  const taskMessageDisplay = (message) => {
    setMessageText(message);
    setTimeout(() => setMessageText(""), 5000)
  };
  

  return (
    <>
      <section>
        <Form addTask={addTask} handleAdd={handleAdd} value={value} setValue={setValue}/>
        <section className='section_buttons'>
          <button className="deleteBtn" onClick={deleteTasks}>Delete Tasks</button>
          <button onClick={reloadTasks}>Reload Tasks</button>
        </section>
        { messageText.length > 0 && <p>{messageText}</p>}
      </section>
      {paint()}
    </>
  )
}

export default List;