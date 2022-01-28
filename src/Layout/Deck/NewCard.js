import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { createCard, listDecks, readDeck } from "../../utils/api";
import Crumb from "../Common/Crumb";
import CardForm from "../Common/CardForm";

export default function NewCard({
  setDecks,
  formDataCard,
  setFormDataCard,
  currentDeck,
  setCurrentDeck,
  handleInput,
  INITIAL_FORM_DATA_CARD,
}) {
  const { deckId } = useParams();
  const history = useHistory();

  useEffect(() => {
    readDeck(deckId).then(setCurrentDeck);
  }, [deckId, setCurrentDeck]);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const newCard = {
      ...formDataCard,
      deckId: currentDeck.id,
    };
    createCard(deckId, newCard).then(() => {
      setFormDataCard(INITIAL_FORM_DATA_CARD);
      listDecks().then(setDecks);
    });
  };
  
  const handleDone = () => {
    setFormDataCard(INITIAL_FORM_DATA_CARD);
    history.push(`/decks/${deckId}`);
  };

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <Crumb destination={"/"} name={"Home"} />
          <Crumb destination={`/decks/${deckId}`} name={currentDeck.name} />
          <Crumb name={"Add Card"} isActive={true} />
        </ol>
      </nav>
      <div>
        <h2>{currentDeck.name}: Add Card</h2>
        <CardForm
          formDataCard={formDataCard}
          handleDone={handleDone}
          handleInput={handleInput}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}
