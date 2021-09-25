import { FC } from 'react';
import { useDispatch } from 'react-redux';

import { removeTodo } from '../store/actions';


type RemoveProps = {
  id: string;
}

const RemoveTodo: FC<RemoveProps> = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(removeTodo(id))}>remove</button>
  )
}


export default RemoveTodo;