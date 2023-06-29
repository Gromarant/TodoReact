import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import tasks from './tashData';
import Items from './Items/Items';

const List = () => {

  const [items, setItems] = useState(tasks);
  const render = () => items.map(task => <Items number={task.number} description={task.descript} key={uuidv4()}/>);

  const handleAddTask = (e) => {
    e.preventDefault();
    const number = e.target.number.value;
    const description = e.target.descript.value;

    const newTask = {number, description};

    setItems([...items], newTask)
  }

  return (
    <>
      <form onSubmit={handleAddTask}>
        <label>
          Agregar tarea: <input name="taskInput" />
        </label>
        <button name='addTask'>Agregar tarea</button>
      </form>
    
      {/* // <button onClick={}></button>
      // <button onClick={}></button> */}

      <h2>Tareas por hacer:</h2>
      {render()}
    </>
  );
};

export default List;
