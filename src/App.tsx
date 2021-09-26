import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import TodoLayout from './components/TodoLayout';
import Signin from './components/Signin';
import Signup from './components/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import Users from './components/Users';



function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Signin} />
        </Switch>
        <Switch>
          <Route path='/signup' component={Signup} />
        </Switch>
        <Switch>
          <ProtectedRoute  exact path='/todos' component={TodoLayout} />
        </Switch>
        <Switch>
          <ProtectedRoute  exact path='/users' component={Users} />
        </Switch>
      </Router>
    </div>
  );
}


export default App;
