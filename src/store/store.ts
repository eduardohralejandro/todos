import { createStore } from 'redux';

import RootReducer from './reducers/rootReducer';


const store = createStore(RootReducer);

export type RootStore = ReturnType<typeof RootReducer>

export default store;