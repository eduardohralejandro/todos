export interface IUser {
  id: string,
  email: string,
  name?: string,
  password: string, 
}

export interface IUserInitialState {
  isLoggedIn: boolean,
  payload?: IUser | null,
  message: string,
}

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';
export const SET_MESSAGE = 'SET_MESSAGE';
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';

export type ActionTypesUser = 
  | { type: typeof REGISTER_SUCCESS, payload: string }
  | { type: typeof REGISTER_FAIL, payload: string }
  | { type: typeof LOGIN_FAIL, payload: string }
  | { type: typeof LOGIN_SUCCESS, payload: string }
  | { type: typeof GET_USERS_SUCCESS, payload: string }
  | { type: typeof LOGOUT, payload:  string | any }