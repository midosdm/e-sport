import React,{useState, useEffect} from 'react';
import LeagueList from "./components/leagues/LeagueList";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import League from './components/league/League';
import PageNotFound from './errors/PageNotFound';
import TeamsList from './components/Teams/TeamsList';
import Team from './components/Team/Team';
import Games from './components/games/Games';
import contextSelectedGame from "./context/Context";
import Navbar from './components/navbar/Navbar';

function App() {

  const [selectedGame, setSelectedGame] = useState("");

     const handleChange = (e) => {
        //  dispatch(selectGame(e.target.value));
        setSelectedGame(e.target.value);
        localStorage.setItem("selectedGame", e.target.value);
     }


  return (
    <div className="App">
      <Router>
        
        <Switch>
        

        <contextSelectedGame.Provider value={{selectedGame, setSelectedGame}}>
        <Route exact path="/">
            <Redirect to="/leagues"/>
        </Route>
        <Navbar handleChange={handleChange}/>
          <Route exact path="/leagues">
            <LeagueList />
          </Route>

          <Route exact path="/leagues/:id">
            <League />
          </Route> 

          <Route exact path="/teams">
            <TeamsList />
          </Route>

          <Route exact path="/teams/:id">
            <Team />
          </Route>

        </contextSelectedGame.Provider>

        
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
