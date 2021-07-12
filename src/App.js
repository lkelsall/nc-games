import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import SingleReview from "./components/SingleReview";
import Reviews from "./components/Reviews";

function App() {
  return (
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
  );
}

export default App;
