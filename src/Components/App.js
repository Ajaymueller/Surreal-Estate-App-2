import React, { useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "../styles/App.css";

import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import Favourites from "./Favourites";
import HomePage from "./HomePage";
import Footer from "./Footer";

const App = () => {
  const [userID, setUserID] = useState("");

  const handleLogin = (response) => {
    setUserID(response.userID);
  };

  const handleLogout = () => window.FB.logout(() => setUserID(""));

  return (
    <div className="App">
      <NavBar onLogin={handleLogin} onLogout={handleLogout} userID={userID} />
      <BrowserRouter>
      <Switch>
      <Route
          path="/"
          exact
          render={(props) => <HomePage {...props} userID={userID} />}
        />
        <Route
          path="/properties"
          exact
          render={(props) => <Properties {...props} userID={userID} />}
        />
        <Route
          path="/saved-properties"
          exact
          render={(props) => <Favourites {...props} userID={userID} />}
        />
        <Route path="/add-property" component={AddProperty} exact />
      </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
