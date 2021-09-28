import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Login } from "./components/Login";
import { Meal } from "./components/Meal";
import { Meals } from "./components/Meals";
import { Nav } from "./components/Nav";
import { useUser } from "./context/UserContext";

function App() {
  const { login } = useUser();
  const validation = () => {
    return login ? true : false;
  };

  const Private = (props) => {
    return validation() ? <Route {...props} /> : <Redirect to="/" />;
  };

  const Public = (props) => {
    return !validation() ? <Route {...props} /> : <Redirect to="/meals" />;
    return !validation() ? <Route {...props} /> : <Redirect to="/meal" />;
  };

  return (
    <Router>
      <Nav />
      <Switch>
        <Public path="/" exact component={Login} />
        <Private path="/meals" component={Meals} />
        <Private path="/meal:id" component={Meal} />
      </Switch>
    </Router>
  );
}

export default App;
