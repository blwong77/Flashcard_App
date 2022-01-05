import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import DeckList from "./DeckList/DeckList";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <Link to="/create">
              <button type="button" className="btn btn-primary">
                +Create Deck
              </button>
            </Link>
            <hr />
            <DeckList />
          </Route>
          <Route path="/create">
            <h1>Creating</h1>
          </Route>
          <Route exact path="/deck/:deckId">
            <h1>Viewing Deck</h1>
          </Route>
          <Route exact path="/deck/:deckId/study">
            <h1>Study!</h1>
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
