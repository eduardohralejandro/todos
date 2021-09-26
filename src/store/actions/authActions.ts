import {Dispatch} from 'redux';


import {IUser, LOGIN_FAIL, LOGIN_SUCCESS, SET_MESSAGE} from '../types/auth';
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