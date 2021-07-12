import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import SingleReview from "./components/SingleReview";
import Reviews from "./components/Reviews";
import { UserContext } from "./contexts/user";

function App() {
  const [user, setUser] = useState("cooljmessy");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Header />
        <Nav />
        <Switch>
          <Route path="/reviews/id/:review_id">
            <SingleReview />
          </Route>
          <Route path="/reviews/category/:category_slug">
            <Reviews />
          </Route>
          <Route path="/">
            <Reviews />
          </Route>
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;
