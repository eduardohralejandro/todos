import { v4 as uuidv4 } from 'uuid';

import {
  ActionTypes,
  SET_TODOS,
  REMOVE_TODO,
  SET_NEWTODO,
  CHECK_TODO,
  ADD_TODO,
} from '../actions';

import { Store, Todo } from '../types';


const addTodo = (todos: Todo[], title: string): Todo[] => [
  ...todos,
  {
    id: uuidv4(),
    title,
    checked: false,
  },
];

const removeTodo = (todos: Todo[], id: string): Todo[] => todos.filter((todo) => todo.id !== id);

const checkTodo = (todos: Todo[], id: string): Todo[] => todos.map((todo) => ({
  ...todo,
  done: todo.id === id ? !todo.checked : todo.checked,
  }));


export function todoReducer(state: Store = { todos: [],
    newTodo: '',
  },
  action: ActionTypes
) {
  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case SET_NEWTODO:
      return {
        ...state,
        newTodo: action.payload,
      };
    case CHECK_TODO:
      return {
        ...state,
        todos: checkTodo(state.todos, action.payload),
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: removeTodo(state.todos, action.payload),
      };
    case ADD_TODO:
      return {
        ...state,
        newTodo: '',
        todos: addTodo(state.todos, state.newTodo),
      };
    default:
      return state;
  }
}
