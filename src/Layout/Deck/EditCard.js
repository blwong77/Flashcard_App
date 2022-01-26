import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { readCard, readDeck, updateCard } from "../../utils/api";
import CardForm from "../Common/CardForm";
import Crumb from "../Common/Crumb";

export default function EditCard({
  currentDeck,
  setCurrentDeck,
  formDataCard,
  setFormDataCard,
  handleInput,
}) {
  const { deckId, cardId } = useParams();
  const history = useHistory();

  useEffect(() => {
    readDeck(deckId).then((resp) => {
      setCurrentDeck(resp);
      readCard(cardId).then((resp) => {
        setFormDataCard({ front: resp.front, back: resp.back });
      });
    });
  }, [cardId, deckId, setCurrentDeck, setFormDataCard]);

  const handleDone = () => {
    history.push(`/decks/${deckId}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const combinedCard = { ...formDataCard, id: cardId, deckId: currentDeck.id };
    updateCard(combinedCard).then(history.push(`/decks/${deckId}`));
  };

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <Crumb destination={"/"} name={"Home"} />
          <Crumb destination={`/decks/${deckId}`} name={currentDeck.name} />
          <Crumb name={`Edit Card ${cardId}`} isActive={true} />
        </ol>
      </nav>
      <div>
        <h2>Edit Card</h2>
        <CardForm
          isEdit={true}
          formDataCard={formDataCard}
          handleInput={handleInput}
          handleDone={handleDone}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}
