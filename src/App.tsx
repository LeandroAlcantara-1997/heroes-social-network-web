import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Form from './form_hero/Form';
import GetHero from './get_hero/GetHero';

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
        <Route path='/get-hero/:id?' component={GetHero}>
        </Route>
      </Switch>
    </Router>
    );
}

export default App;
