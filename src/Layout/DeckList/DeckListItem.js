import React from "react";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";

export default function DeckListItem({ deckId, name, cards, description}) {
  return (
    <li className="list-group-item">
      <h3>{name}</h3>
      <span>{`${cards.length} cards`}</span>
      <p>{description}</p>
      <Link to={`/deck/${deckId}`}>
        <button type="button" className="btn btn-secondary">
          View
        </button>
      </Link>
      <Link to={`/deck/${deckId}/study`}>
        <button type="button" className="btn btn-secondary">
          Study
        </button>
      </Link>
      <DeleteButton deckId={deckId}/>
    </li>
  )
}
