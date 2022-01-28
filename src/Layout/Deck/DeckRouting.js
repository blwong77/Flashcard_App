import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import EditDeck from "./EditDeck";
import CreateDeck from "./CreateDeck";
import ViewDeck from "./ViewDeck";
import Study from "../Study/Study";
import NewCard from "./NewCard";
import EditCard from "./EditCard";
import NotFound from "../NotFound";

export default function DeckRouting({ setDecks }) {
  const INITIAL_FORM_DATA_DECK = {
    name: "",
    description: "",
  };
  const INITIAL_FORM_DATA_CARD = {
    front: "",
    back: "",
  };
  const [formDataDeck, setFormDataDeck] = useState(INITIAL_FORM_DATA_DECK);
  const [formDataCard, setFormDataCard] = useState(INITIAL_FORM_DATA_CARD);
  const [currentDeck, setCurrentDeck] = useState([]);

  const handleInput = ({ target }) => {
    if (target.name === "name" || target.name === "description") {
      setFormDataDeck({
        ...formDataDeck,
        [target.name]: target.value,
      });
    } else {
      setFormDataCard({
        ...formDataCard,
        [target.name]: target.value,
      });
    }
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
            setDecks={setDecks}
            formDataDeck={formDataDeck}
            setFormDataDeck={setFormDataDeck}
            currentDeck={currentDeck}
            setCurrentDeck={setCurrentDeck}
            handleInput={handleInput}
          />
        </Route>

        <Route exact path={"/decks/:deckId/cards/new"}>
          <NewCard
            setDecks={setDecks}
            formDataCard={formDataCard}
            setFormDataCard={setFormDataCard}
            currentDeck={currentDeck}
            setCurrentDeck={setCurrentDeck}
            handleInput={handleInput}
            INITIAL_FORM_DATA_CARD={INITIAL_FORM_DATA_CARD}
          />
        </Route>

        <Route exact path={"/decks/:deckId/cards/:cardId/edit"}>
          <EditCard
            INITIAL_FORM_DATA_CARD={INITIAL_FORM_DATA_CARD}
            currentDeck={currentDeck}
            setCurrentDeck={setCurrentDeck}
            formDataCard={formDataCard}
            setFormDataCard={setFormDataCard}
            handleInput={handleInput}
          />
        </Route>

        <Route exact path="/decks/:deckId/study">
          <Study currentDeck={currentDeck} setCurrentDeck={setCurrentDeck} />
        </Route>

        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}
