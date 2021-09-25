import { FC } from 'react';
import { useSelector } from 'react-redux';

import Todo from './Todo';
import AddTodo from './AddTodo';
import RemoveTodo from '../components/RemoveTodo';
import { Store, Todo as TodoType } from '../store/types';



const TodoLayout: FC = () => {
  const todos = useSelector((state: any) => state.todos);

  return (
    <div>
      <AddTodo />
      {todos?.todos.map((todo: TodoType) => {
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