import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import { listDecks } from "../utils/api";
import DeckList from "./Deck/DeckList";
import DeckRouting from "./Deck/DeckRouting";

function Layout() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const aborter = new AbortController();
    listDecks(aborter.signal).then(setDecks);

    return () => {
      aborter.abort();
    };
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Link to="/decks/new">
              <button type="button" className="btn btn-primary">
                +Create Deck
              </button>
            </Link>
            <hr />
            <DeckList decks={decks} />
          </Route>

          <DeckRouting decks={decks} setDecks={setDecks} />

        </Switch>
      </div>
    </>
  );
}
export default Layout;
