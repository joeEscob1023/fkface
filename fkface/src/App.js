import "./App.css";
import Cast from "./Components/Cast";

import Header from "./Components/Header";
import ffCast from "./Data/Cast";

import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <h2>What is F**k Face?</h2>
        <p>F**k Face is a weekly podcast that has the joining forces of Geoff Ramsey, Gavin Free and Andrew Panton</p>
        <p>Coming to you live from Austin TX, every Wednesday, catch a new episode of these dip shits talk about the failures in their lives, mushrooms in their skinks and honey mustard.</p>
      </div>
      <Switch>
        <Route path="/cast" 
        render={(props) => {
          return(
            <Cast castArray={ffCast} {...props} />
          )
        }}/>
      
      </Switch>
    </div>
  );
}

export default App;
