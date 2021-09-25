import { useSelector, useDispatch } from 'react-redux';

import { setNewTodo, addTodo } from '../store/actions';
import { Store } from '../store/types';

const AddTodo = () => {

  const newTodo = useSelector((state: Store) => state.newTodo);
  const dispatch = useDispatch();

  return (
    <div>
      <input type='text' value={newTodo} onChange={(event) => dispatch(setNewTodo(event.target.value))} />
      <button  onClick={() => dispatch(addTodo())}>add todo</button>
    </div>
  )
}

export default  AddTodo;