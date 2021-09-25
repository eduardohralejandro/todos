import { createStore } from 'redux';

import RootReducer from './reducers/rootReducer';


const Store = createStore(RootReducer);

export type RootStore = ReturnType<typeof RootReducer>

export default Store