import React from "react";
import { useParams } from "react-router-dom";
import Crumb from "../Common/Crumb";

export default function ViewDeck({ decks }) {
  const { deckId } = useParams();
  const currentDeck = decks.find((deck) => deck.id === Number(deckId));
  
  if (currentDeck) {
    return (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <Crumb destination={"/"} name={"Home"} />
          <Crumb name={currentDeck.name} isActive={true} />
        </ol>
      </nav>
    );
  }
  return <p>Loading...</p>;
}
