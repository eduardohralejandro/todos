import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addTodo } from '../store/actions/todoActions';
import '../index.css'

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
    <div className='todo-container'>
      <input  className='input-todo'type='text' onChange={(event) => setNewTodo(event.target.value)} />
      <button className='btn-add-todo' onClick={onNewTodo}>add todo</button>
    </div>
  )
}

export default  AddTodo;