import Navbar from "./components/Navbar";
import MovieSearch from "./pages/MovieSearch";
import Watchlist from "./pages/Watchlist";
import { Route, Switch } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <div className="background">
      <Navbar />
      <h1>Hello and welcome to Movie Search!</h1>
      <Switch>
        <Route path="/" exact>
          <MovieSearch />
        </Route>
        <Route path="/watchlist">
          <Watchlist />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
