import "./App.css";
import Cast from "./Components/Cast";
import Home from './Components/Home'
import Header from "./Components/Header";
import ffCast from "./Data/Cast";

import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/home" component={Home}/>
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
