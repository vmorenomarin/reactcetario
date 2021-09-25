import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "./components/Login";
import { Meals } from "./components/Meals";
import { Nav } from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/meals" component={Meals} />
      </Switch>
    </Router>
  );
}

export default App;
