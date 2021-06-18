import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Game from "./pages/Game";
import "./styles/main.scss";
import Pokedex from "./components/Pokedex";
import Details from "./components/Details";


const App = () => {

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/game" exact component={Game} />
          <Route path="/" exact render={(props) => <Pokedex {...props} />} />
          <Route path="/:pokemonId" exact render={(props) => <Details {...props} /> } />
          
        </Switch>
      </Router>
    </>
  );
};

export default App;
