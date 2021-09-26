import { FC } from 'react';
import { useDispatch } from 'react-redux';

import { removeTodo } from '../store/actions/todoActions';


type RemoveProps = {
  id: string;
}

const RemoveTodo: FC<RemoveProps> = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(removeTodo(id))}>remove</button>
    </div>
  )
}


export default RemoveTodo;