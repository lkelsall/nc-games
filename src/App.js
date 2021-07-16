import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { UserContext } from "./contexts/user";
import GlobalStyle from "./components/styled/GlobalStyle";
import Header from "./components/Header";
import Nav from "./components/Nav";
import SingleReview from "./components/SingleReview";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import { AppGrid } from "./components/styled/Lib";

function App() {
  const [user, setUser] = useState("cooljmessy");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <GlobalStyle />
      <AppGrid>
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
        <Footer />
      </AppGrid>
    </UserContext.Provider>
  );
}

export default App;
