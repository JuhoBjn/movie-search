import Config from "./config.json";
import Navbar from "./components/Navbar";
import MovieSearch from "./pages/MovieSearch";
import Watchlist from "./pages/Watchlist";
import { Route, Switch } from "react-router-dom";

import "./App.css";

const App = () => {
  const apiKey = Config.APIKEY;

  return (
    <div className="background">
      <Navbar />
      <h1>Hello and welcome to Movie Search!</h1>
      <Switch>
        <Route path="/" exact>
          <MovieSearch apiKey={apiKey} />
        </Route>
        <Route path="/watchlist">
          <Watchlist />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
