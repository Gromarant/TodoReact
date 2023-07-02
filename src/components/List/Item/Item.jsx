import PropTypes from 'prop-types';
import './Item.css'


const Item = ({todo, deleteItem}) => {
  return (
    <article className='task'>
      <p>{todo}</p>
      <button className="deleteBtn" onClick={deleteItem}>Delete</button>
    </article>
  )
};

Item.propTypes = {
  todo: PropTypes.string.isRequired,
  deleteItem: PropTypes.func.isRequired,
}

export default Item;