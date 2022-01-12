import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import EditDeck from "./EditDeck";
import CreateDeck from "./CreateDeck";
import ViewDeck from "./ViewDeck";
import Study from "../Study/Study";
import NewCard from "./NewCard";

export default function DeckRouting({ setDecks }) {
  const INITIAL_FORM_DATA_DECK = {
    name: "",
    description: "",
  };
  const [formDataDeck, setFormDataDeck] = useState(INITIAL_FORM_DATA_DECK);
  const [currentDeck, setCurrentDeck] = useState([]);

  const handleInput = ({ target }) => {
    setFormDataDeck({
      ...formDataDeck,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <Switch>
        <Route exact path="/decks/new">
          <CreateDeck
            handleInput={handleInput}
            formDataDeck={formDataDeck}
            setDecks={setDecks}
          />
        </Route>

        <Route exact path="/decks/:deckId">
          <ViewDeck currentDeck={currentDeck} setCurrentDeck={setCurrentDeck} />
        </Route>

        <Route exact path={"/decks/:deckId/edit"}>
          <EditDeck
            formDataDeck={formDataDeck}
            setFormDataDeck={setFormDataDeck}
            currentDeck={currentDeck}
            setCurrentDeck={setCurrentDeck}
            handleInput={handleInput}
          />
        </Route>

        <Route exact path={"/decks/:deckId/cards/new"}>
          <NewCard currentDeck={currentDeck} setCurrentDeck={setCurrentDeck} />
        </Route>

        <Route exact path="/decks/:deckId/study">
          <Study currentDeck={currentDeck} setCurrentDeck={setCurrentDeck} />
        </Route>
      </Switch>
    </>
  );
}
