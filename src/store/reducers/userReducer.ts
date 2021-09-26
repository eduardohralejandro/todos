import {
  IUserInitialState, 
  ActionTypesUser, 
  REGISTER_SUCCESS, 
  REGISTER_FAIL, 
  LOGIN_SUCCESS, 
  LOGIN_FAIL, 
  LOGOUT,
  GET_USERS_SUCCESS
} from '../types/auth';  


  const user = JSON.parse(localStorage.getItem('user') as string);
  
  const initialState = user
                      ? { isLoggedIn: true, user, message: '' }
                      : { isLoggedIn: false, user: null, message: '' };
  
  export const userReducer = (state: IUserInitialState = initialState, action: ActionTypesUser): any => {
    
    const { type, payload } = action;

    switch (type) {
      case GET_USERS_SUCCESS:
          return {
            ...state,
            users: payload,
        };
      case REGISTER_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
        };
      case REGISTER_FAIL:
        return {
          ...state,
          isLoggedIn: false,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          payload: payload.user,
        };
      case LOGIN_FAIL:
        return {
          ...state,
          isLoggedIn: false,
          payload: null,
        };
      case LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          payload: null,
        };
      default:
        return state;
    }
  }