import { FC, useEffect } from 'react';
import { useDispatch, useSelector,  } from 'react-redux';
import { Link } from 'react-router-dom';

import Todo from './Todo';
import AddTodo from './AddTodo';
import RemoveTodo from '../components/RemoveTodo';
import { getTodo } from '../store/actions/todoActions';
import { Todo as TodoType } from '../store/types/todo';



const TodoLayout: FC = () => {
  const todos = useSelector((state: any) => state.usersTodo);
  const dispatch = useDispatch();
  const token = localStorage.getItem('user') as string;
  
  useEffect(() => {
    dispatch(getTodo(token)) 
  }, [dispatch, token]);

  return (
    <div>
      <AddTodo />
      <Link to='/users'>Users</Link>
      {todos?.todos?.data?.map((todo: TodoType) => {
        return (
          <div key={todo.id}>
            <Todo title={todo.title} />
            <RemoveTodo id={todo.id} />
          </div>
        )
      })}
      <Todo />
    </div>
  );
}


export default TodoLayout;