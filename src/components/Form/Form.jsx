import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import './Form.css';

Form.propTypes  = {
  addTask: PropTypes.func,
}

const Form = ({addTask}) => {
  const [value, setValue] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (e.target.value>5) {
      setValue(e.target.value)
      addTask(value);
    }
    setValue("");
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue("");
    }, 20000);
    return () => clearTimeout(timer);
  }, [value]);
  
  return (
    <form className='todo_form' onSubmit={handleAdd}>
      <label htmlFor="addInput">Add new task</label><br/>
      <input className='todo_input' type="text" name="addInput" value={value} placeholder="add a new task" onChange={(e) => setValue(e.target.value)}/>
      {value.length > 0 && <input className='add_btn' type="submit" value="ADD" />}
    </form>
  )
};


export default Form;