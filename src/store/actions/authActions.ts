import {Dispatch} from 'redux';
import axios from 'axios';

import {GET_USERS_SUCCESS, IUser, LOGIN_FAIL, LOGIN_SUCCESS, SET_MESSAGE} from '../types/auth';
import AuthService from '../services/auth-service';

  
export const login = (user: IUser) => async (dispatch: Dispatch): Promise<void> => {

  const response = await AuthService.login(user.email, user.password);

  try {
    dispatch({ type: LOGIN_SUCCESS, payload: { user: response }, });
  } catch (error) {
        
    dispatch({ type: LOGIN_FAIL, });
  
    dispatch({ type: SET_MESSAGE, payload: 'unable to login', });
  }
};


export const getUsers = ( token: string) => async (dispatch: Dispatch): Promise<void> => {

  const accessToken = JSON.parse(token);
  try {
    const data = await axios.get('http://localhost:5000/users', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    console.log("USERS", data);
    dispatch({ type: GET_USERS_SUCCESS, payload: data });

  } catch (error) {
    dispatch({ type: SET_MESSAGE, payload: 'unable to fetch users' });
  }
    

};