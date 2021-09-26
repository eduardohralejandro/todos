import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addTodo } from '../store/actions/todoActions';


const AddTodo = () => {
  const [newTodo, setNewTodo] = useState<string>('');
  const dispatch = useDispatch();

  const onNewTodo = () => {
    const token = localStorage.getItem('user') as string;
    const body = {
      id: uuidv4(),
      title: newTodo,
      checked: false,
      userId: 3
    }
    
    dispatch(addTodo(body, token));
  }
  return (
    <div>
      <input type='text' onChange={(event) => setNewTodo(event.target.value)} />
      <button  onClick={onNewTodo}>add todo</button>
    </div>
  )
}

export default  AddTodo;