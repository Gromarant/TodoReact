import PropTypes from 'prop-types';
import './Item.css'


const Item = ({todo, deleteItem}) => {
  return (
    <article className='task'>
      <h3>{todo}</h3>
      <button onClick={deleteItem}>Delete</button>
    </article>
  )
};

Item.propTypes = {
  todo: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
}

export default Item;