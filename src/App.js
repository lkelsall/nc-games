import { useState } from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import SingleReview from "./components/SingleReview";
import Reviews from "./components/Reviews";
import { UserContext } from "./contexts/user";

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: min-content min-content auto;
  grid-template-areas: "header" "nav" "reviews";
  min-height: 100vh;
`;

function App() {
  const [user, setUser] = useState("cooljmessy");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <GridLayout>
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
      </GridLayout>
    </UserContext.Provider>
  );
}

export default App;
