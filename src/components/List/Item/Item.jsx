import './Item.css'

const Item = ({todo, deleteItem}) => {
  return (
    <article className='task'>
      <h3>{todo}</h3>
      <button onClick={deleteItem}>Delete</button>
    </article>
  )
};

export default Item;