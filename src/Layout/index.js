import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import { listDecks } from "../utils/api";
import NotFound from "./NotFound";
import DeckList from "./Deck/DeckList";
import EditDeck from "./Deck/EditDeck";
import CreateDeck from "./Deck/CreateDeck";
import ViewDeck from "./Deck/ViewDeck";
import Study from "./Study/Study";

function Layout() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const aborter = new AbortController();
    listDecks(aborter.signal).then(setDecks)
    
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

          <Route exact path="/decks/new">
            <CreateDeck setDecks={setDecks} />
          </Route>

          <Route exact path="/decks/:deckId">
            <ViewDeck decks={decks} />
          </Route>

          <Route exact path={"/decks/:deckId/edit"}>
            <EditDeck />
          </Route>

          <Route exact path="/decks/:deckId/study">
            <Study />
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
