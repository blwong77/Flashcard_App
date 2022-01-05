import React, { useState, useEffect} from "react";
import { Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import { listDecks } from "../utils/api";
import NotFound from "./NotFound";
import DeckList from "./DeckList/DeckList";
import Study from "./Study/Study";

function Layout() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const aborter = new AbortController();
    async function listingDecks() {
      const deckArr = await listDecks(aborter.signal);
      setDecks(deckArr);
    }
    listingDecks();
    return () => {
      aborter.abort();
    };
  }, []);

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
            <DeckList decks={decks} />
          </Route>
          <Route path="/create">
            <h1>Creating</h1>
          </Route>
          <Route exact path="/deck/:deckId">
            <h1>Viewing Deck</h1>
          </Route>
          <Route exact path="/deck/:deckId/study">
            <Study decks={decks}/>
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
