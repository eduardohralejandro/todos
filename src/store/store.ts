import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import RootReducer from './reducers/rootReducer';


const store = createStore(RootReducer, applyMiddleware(thunk));

export type RootStore = ReturnType<typeof RootReducer>

export default store;