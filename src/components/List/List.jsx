import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import tasks from './dataTasks';
import Item from './Item/Item.jsx';
import Form from '../Form/Form';
import './List.css'

const List = () => {
  const [items, setItems] = useState(tasks);

  const paint = () => items.map((task) => <Item todo={task.task} key={task.id} deleteItem={() =>deleteTask(task.id)}/>)

  const addTask = (task) => {
    setItems([...items, {id: uuidv4(), task}])
  }

  const deleteTask = (id) => setItems(items.filter(task => task.id !== id));
  const deleteTasks = () => setItems([]);
  const reloadTasks = () => setItems(tasks);

  return (
    <>
      <section> 
        <Form addTask={addTask} />
        <button onClick={deleteTasks}>Delete Tasks</button>
        <button onClick={reloadTasks}>Reload Tasks</button>
        {paint()}
      </section>
    </>
  )
}

export default List;