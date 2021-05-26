import "./App.css";
import Cast from "./Components/Cast";

import Header from "./Components/Header";
import { Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Cast />
    </div>
  );
}

export default App;
