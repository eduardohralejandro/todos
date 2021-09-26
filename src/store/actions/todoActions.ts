import axios from 'axios';
import { Dispatch } from 'redux';
import { GET_TODOS_SUCCESS, 
         GET_TODOS_FAIL,
         REMOVE_TODO,
         ADD_TODO, 
         Todo } from '../types/todo';


export const getTodo = (token: string) => async (dispatch: Dispatch)  => {

  try {
    
    const accessToken = JSON.parse(token);

    const data = await axios.get('http://localhost:8000/todos', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    dispatch({ type: GET_TODOS_SUCCESS, payload: data });
 
  } catch (error) {
    
    dispatch({ type: GET_TODOS_FAIL, payload: 'unable to fetch data' });
    
  }
}


export const addTodo = (body: Todo, token: string) => async (dispatch: Dispatch, state: any): Promise<void> => {

try {
  const accessToken = JSON.parse(token);

  const response = await axios.post('http://localhost:8000/todos', { ...body }, { headers: { 'Authorization': `Bearer ${accessToken}` }});

    dispatch({ type: ADD_TODO, payload: response });

} catch (error) {
    dispatch({ type: GET_TODOS_FAIL, payload: 'unable to fetch data' });
}
  
}


export const removeTodo = (id: string) => async (dispatch: Dispatch): Promise<any> => {
    
  try {
     await axios.delete(`http://localhost:8000/todos/${id}`, { params: { id } });

     dispatch({ type: REMOVE_TODO, payload: id });

  } catch (error) {
    dispatch({ type: GET_TODOS_FAIL, payload: 'unable to delete todo' });
  }
  
}