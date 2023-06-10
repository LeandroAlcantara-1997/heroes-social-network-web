import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Form from './hero/form_hero/Form';
import GetHero from './hero/get_hero/GetHero';
import FormTeam from './team/post_team.tsx/form_team';
import GetTeam from './team/get_team/GetTeam';
import DeleteTeam from './team/delete_team/delete_team';

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/register-hero">Form</Link><br />
          <Link to="/register-team">Form Team</Link><br />
          <Link to="/get-team/e36b3582-f936-47b7-8832-47da045ea4e9">Get Team by id</Link>
          <Link to="/delete-team/">Delete Team by id</Link>
        </li>
      </ul>
      <Switch>
        <Route path='/register-hero'>
          <Form />
        </Route>

        <Route path='/get-hero/:id?' component={GetHero}></Route>
        <Route path='/get-team/:id?' component={GetTeam}></Route>
        <Route path='/delete-team/:id?' component={DeleteTeam}></Route>
        <Route path='/register-team'>
          <FormTeam />
        </Route>
      </Switch>
    </Router>
    );
}

export default App;
