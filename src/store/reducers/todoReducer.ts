import {
  ADD_TODO,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAIL,
  GET_TODOS_REQUEST,
  REMOVE_TODO,
  Todo,
} from '../types/todo';


const defaultState = {
  todos: [],
  loading: false,
  error: '',
}


export const todoReducer = (state: any = defaultState, action: any) => {
    
  const { payload, type } = action;
  
  switch (type) {
      case ADD_TODO:
          return {
              ...state,
              loading: true,
              todos: [...state.todos, payload]
          };
          case REMOVE_TODO:
          return {
              ...state,
              loading: true,
              todos: state.todos.filter((todo: Todo) => todo.id !== payload)
          };
      case GET_TODOS_REQUEST:
          return {
              ...state,
              loading: true,
              todos: []
          };
      case GET_TODOS_SUCCESS:
          return {
              ...state,
              loading: false,
              todos: payload,
          };
      case GET_TODOS_FAIL:
          return {
              ...state,
              todos: [],
              error: payload,
          };
      default:
          return state;
  }
}
