export interface Todo {
  id: string;
  title: string;
  loading?: boolean;
  error?: string
}

export interface Store {
  todos: Todo[];
  newTodo: string;
}

export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const CHECK_TODO = 'CHECK_TODO';
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const GET_TODOS_REQUEST = 'GET_TODOS_REQUEST';
export const GET_TODOS_FAIL = 'GET_TODOS_FAIL';

export type ActionTypesTodo = 
  | { type: typeof ADD_TODO, payload: string }
  | { type: typeof GET_TODOS_SUCCESS, payload: string }
  | { type: typeof REMOVE_TODO; payload: string; }
  | { type: typeof CHECK_TODO; payload: string; }
  | { type: typeof GET_TODOS_REQUEST, payload: string }