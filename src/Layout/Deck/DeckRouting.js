import React from "react";
import { Route, Switch } from "react-router-dom";
import EditDeck from "./EditDeck";
import CreateDeck from "./CreateDeck";
import ViewDeck from "./ViewDeck";
import Study from "../Study/Study";

export default function DeckRouting({ setDecks }) {
  return (
    <>
      <Switch>
        <Route exact path="/decks/new">
          <CreateDeck setDecks={setDecks} />
        </Route>

        <Route exact path="/decks/:deckId">
          <ViewDeck />
        </Route>

        <Route exact path={"/decks/:deckId/edit"}>
          <EditDeck />
        </Route>

        <Route exact path="/decks/:deckId/study">
          <Study />
        </Route>
      </Switch>
    </>
  );
}