import { useState } from 'react';

const Form = ({addTask}) => {
  const [value, setValue] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    setValue(e.target.value)
    addTask(value);
    setValue("");
  }

  return (
    <form className='todo_form' onSubmit={handleAdd}>
      <label htmlFor="addInput">Add new task</label><br/>
      <input className='todo_input' type="text" name="addInput" value={value} placeholder="add a new task" onChange={(e) => setValue(e.target.value)}/>
      <input className='add_btn' type="submit" value="ADD" /><br/>
    </form>
  )
};

export default Form;