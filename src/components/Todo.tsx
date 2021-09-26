import { FC } from 'react';


type TodoProps = {
  title?: string
}

const Todo: FC<TodoProps> = ({ title }) => {
  return (
    <div className='list-item'>
      {title}
    </div>
  )
}


export default Todo;