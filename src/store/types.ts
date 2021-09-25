export interface Todo {
  id: string;
  title: string;
  checked: boolean;
  description: string;
}

export interface Store {
  todos: Todo[];
  newTodo: string;
}