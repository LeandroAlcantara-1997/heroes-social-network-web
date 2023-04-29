import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Form from './hero/form_hero/Form';
import GetHero from './hero/get_hero/GetHero';
import FormTeam from './team/post_team.tsx/form_team';

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/register-hero">Form</Link><br />
          <Link to="/register-team">Form Team</Link>

        </li>
      </ul>
      <Switch>
        <Route path='/register-hero'>
          <Form />
        </Route>
        <Route path='/get-hero/:id?' component={GetHero}>
        </Route>
        <Route path='/register-team'>
          <FormTeam />
        </Route>
      </Switch>
    </Router>
    );
}

export default App;
