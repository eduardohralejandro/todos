import { FC } from 'react';


type TodoProps = {
  title?: string
}

const Todo: FC<TodoProps> = ({ title }) => {
  return (
    <div>
      {title}
    </div>
  )
}


export default Todo;