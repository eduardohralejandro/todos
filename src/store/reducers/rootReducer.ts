import { combineReducers } from 'redux';
import { todoReducer } from './todoReducer';
import { userReducer } from './userReducer';

const RootReducer = combineReducers({
  usersTodo: todoReducer,
  user: userReducer,
});


export default RootReducer;