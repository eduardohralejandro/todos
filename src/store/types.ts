export interface Todo {
  id: string;
  title: string;
  checked: boolean;
}

export interface Store {
  todos: Todo[];
  newTodo: string;
}