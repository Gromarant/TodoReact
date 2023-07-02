import PropTypes from 'prop-types';
import { useEffect } from 'react';
import './Form.css';


const Form = ({ handleAdd, value, setValue}) => {
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setValue("");
    }, 20000);
    return () => clearTimeout(timer);
  }, [value, setValue]);
  
  return (
    <form className='todo_form' onSubmit={handleAdd}>
      <label htmlFor="addInput">Add new task</label><br/>
      <input className='todo_input' id="addInput" type="text" name="addInput" value={value} placeholder="add a new task" onChange={(e) => setValue(e.target.value)}/>
      {value.length > 0 && <input className='add_btn' type="submit" value="ADD"/>}
    </form>
  )
};

Form.propTypes  = {
  addTask: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
}

export default Form;