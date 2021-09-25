import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


import TodoLayout from './components/TodoLayout';
import Signin from './components/Signin';
import Signup from './components/Signup';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/about'>
            <TodoLayout />
          </Route>
          <Route path='/signin'>
            <Signin />
          </Route>
          <Route path='/'>
            <Signup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
