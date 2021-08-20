import "./App.css";
import Cast from "./Components/Cast";
import Home from "./Components/Home";
import Header from "./Components/Header";
import ffCast from "./Data/Cast";

import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          path="/cast"
          render={(props) => {
            return <Cast castArray={ffCast} {...props} />;
          }}
        />
        <Route exact path="/home" component={Home} />
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
