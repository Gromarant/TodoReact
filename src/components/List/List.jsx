import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import tasks from './dataTasks';
import Item from './Item/Item.jsx';
import Form from '../Form/Form';
import './List.css'
uuidv4();

const List = () => {
  const [items, setItems] = useState(tasks);

  const paint = () => items.map((task, i) => <Item description={task.description} key={i}/>)

  const addTask = (task) => {
    setItems([...items, {id: uuidv4, task}])
    console.log(items);
  }

  return (
    <>
      <section>
        <Form addTask={addTask} />
        {paint()}
      </section>
    </>
  )
}

export default List;