import React from "react";
import { Link } from "react-router-dom";
import DeleteButton from "../Common/DeleteButton";

export default function Card({ card, deckId }) {
  return (
    <>
      <li className="list-group-item">
        <p>{card.front}</p>
        <p>{card.back}</p>
        <Link to={`/decks/${deckId}/edit`}>
          <button type="btn" className="btn btn-secondary">
            Edit
          </button>
        </Link>
        <DeleteButton cardId={card.id} />
      </li>
    </>
  );
}
