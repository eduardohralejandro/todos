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
          <Route exact path="/" component={Signin} />
          <Route path='/todos'>
            <TodoLayout />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
