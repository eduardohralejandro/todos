import { Todo } from './types';


export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const CHECK_TODO = 'CHECK_TODO';
export const SET_NEWTODO = 'SET_NEWTODO';
export const SET_TODOS = 'SET_TODOS';


export type ActionTypes = 
  | { type: typeof ADD_TODO; }
  | { type: typeof REMOVE_TODO; payload: string; }
  | { type: typeof CHECK_TODO; payload: string; }
  | { type: typeof SET_NEWTODO; payload: string }
  | { type: typeof SET_TODOS; payload: Todo[] }


export const addTodo = (): ActionTypes => ({
  type: ADD_TODO,
});

export const removeTodo = (id: string): ActionTypes => ({
  type: REMOVE_TODO,
  payload: id,
});

export const checkTodo = (id: string): ActionTypes => ({
  type: CHECK_TODO,
  payload: id,
});

export const setNewTodo = (title: string): ActionTypes => ({
  type: SET_NEWTODO,
  payload: title,
});

export const setTodos = (todos: Todo[]): ActionTypes => ({
  type: SET_TODOS,
  payload: todos,
});


