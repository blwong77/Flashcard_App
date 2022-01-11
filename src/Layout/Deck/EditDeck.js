import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Crumb from "../Common/Crumb";
import { readDeck, updateDeck } from "../../utils/api";
import DeckForm from "../Common/DeckForm";

export default function EditDeck({
  formData,
  setFormData,
  currentDeck,
  setCurrentDeck,
  handleInput,
}) {
  const { deckId } = useParams();
  const history = useHistory();

  useEffect(() => {
    const aborter = new AbortController();
    readDeck(deckId, aborter.signal).then((resp) => {
      setCurrentDeck(resp);
      setFormData({ name: resp.name, description: resp.description });
    });
  }, [deckId, setCurrentDeck, setFormData]);

  const handleCancel = () => {
    history.go(-1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const combinedDeck = { ...formData, id: currentDeck.id };
    updateDeck(combinedDeck).then(readDeck(deckId)).then(setCurrentDeck);
  };

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <Crumb destination={"/"} name={"Home"} />
          <Crumb destination={`/decks/${deckId}`} name={currentDeck.name} />
          <Crumb name={"Edit Deck"} isActive={true} />
        </ol>
      </nav>
      <div>
        <h2>Edit Deck</h2>
        <DeckForm
          formData={formData}
          handleCancel={handleCancel}
          handleInput={handleInput}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}
