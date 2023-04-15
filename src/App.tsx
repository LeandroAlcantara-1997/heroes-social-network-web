import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Form from './form_hero/Form';

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/register-hero">Form</Link>
        </li>
      </ul>
      <Switch>
        <Route path='/register-hero'>
          <Form />
        </Route>
      </Switch>
    </Router>
    );
}

export default App;
