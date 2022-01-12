import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";
import Crumb from "../Common/Crumb";
import DeleteButton from "../Common/DeleteButton";
import Card from "./Card";

export default function ViewDeck({currentDeck, setCurrentDeck}) {
  const { deckId } = useParams();

  useEffect(() => {
    const aborter = new AbortController();
    readDeck(deckId, aborter.signal).then(setCurrentDeck);
  }, [deckId, setCurrentDeck]);

  if (currentDeck.id) {
    return (
      <>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <Crumb destination={"/"} name={"Home"} />
            <Crumb name={currentDeck.name} isActive={true} />
          </ol>
        </nav>
        <div>
          <h4>{currentDeck.name}</h4>
          <p>{currentDeck.description}</p>
          <Link to={`/decks/${deckId}/edit`}>
            <button type="btn" className="btn btn-secondary">
              Edit
            </button>
          </Link>

          <Link to={`/decks/${deckId}/study`}>
            <button type="btn" className="btn btn-primary">
              Study
            </button>
          </Link>

          <button type="btn" className="btn btn-primary">
            +Add Cards
          </button>
          <DeleteButton deckId={deckId} />
        </div>
        <div>
          <h3>Cards</h3>
          <div className="list-group">
            {currentDeck.cards.map((card) => (
              <Card card={card} deckId={deckId} key={card.id} />
            ))}
          </div>
        </div>
      </>
    );
  }
  return <p>Loading ViewDeck...</p>;
}
