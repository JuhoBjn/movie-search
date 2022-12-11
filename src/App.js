import Config from "./config.json";
import Navbar from "./components/Navbar";
import MovieSearch from "./pages/MovieSearch";
import Watchlist from "./pages/Watchlist";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

const App = () => {
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    setApiKey(Config.APIKEY);
  }, []);

  return (
    <div className="background">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <MovieSearch apiKey={apiKey} />
        </Route>
        <Route path="/watchlist">
          <Watchlist apiKey={apiKey} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
