import LeagueList from "./components/leagues/LeagueList";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import League from './components/league/League';
import PageNotFound from './errors/PageNotFound';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/leagues">
            <LeagueList />
          </Route>

          <Route exact path="/leagues/:id">
            <League />
          </Route> 

          <Route exact path="/">
            <Redirect to="/leagues"/>
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
