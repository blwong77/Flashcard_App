import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import EditDeck from "./EditDeck";
import CreateDeck from "./CreateDeck";
import ViewDeck from "./ViewDeck";
import Study from "../Study/Study";
import NewCard from "./NewCard";

export default function DeckRouting({ setDecks }) {
  const INITIAL_FORM_DATA = {
    name: "",
    description: "",
  };
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [currentDeck, setCurrentDeck] = useState([]);

  const handleInput = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <Switch>
        <Route exact path="/decks/new">
          <CreateDeck
            handleInput={handleInput}
            formData={formData}
            setDecks={setDecks}
          />
        </Route>

        <Route exact path="/decks/:deckId">
          <ViewDeck currentDeck={currentDeck} setCurrentDeck={setCurrentDeck}/>
        </Route>

        <Route exact path={"/decks/:deckId/edit"}>
          <EditDeck
            formData={formData}
            setFormData={setFormData}
            currentDeck={currentDeck}
            setCurrentDeck={setCurrentDeck}
            handleInput={handleInput}
          />
        </Route>

        <Route exact path={"/decks/:deckId/cards/new"}>
          <NewCard />
        </Route>

        <Route exact path="/decks/:deckId/study">
          <Study currentDeck={currentDeck} setCurrentDeck={setCurrentDeck} />
        </Route>
      </Switch>
    </>
  );
}
