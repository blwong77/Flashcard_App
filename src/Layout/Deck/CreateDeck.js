import React from "react";
import { useHistory } from "react-router-dom";
import { createDeck, listDecks } from "../../utils/api";
import Crumb from "../Common/Crumb";
import DeckForm from "../Common/DeckForm";

export default function CreateDeck({ handleInput, formData, setDecks }) {
  const history = useHistory();

  const handleCancel = () => {
    history.push("/");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    createDeck(formData).then((newDeck) => {
      listDecks()
        .then(setDecks)
        .then(() => history.push(`/decks/${newDeck.id}`));
    });
  };

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <Crumb destination={"/"} name={"Home"} />
          <Crumb name={"Create Deck"} isActive={true} />
        </ol>
      </nav>
      <h2>Create Deck</h2>
      <DeckForm
        formData={formData}
        handleCancel={handleCancel}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
