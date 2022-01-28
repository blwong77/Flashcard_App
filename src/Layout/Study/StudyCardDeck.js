import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

export default function StudyCardDeck({ deck }) {
  const history = useHistory();
  const { cards } = deck;
  const [flipped, setFlipped] = useState(false);
  const [index, setIndex] = useState(0);

  const card = cards[index];

  const handleNext = () => {
    if (index !== cards.length - 1) {
      setIndex(index + 1);
      setFlipped(false);
    } else if (
      window.confirm(
        "Restart cards? \n\n Click 'cancel' to return to the home page"
      )
    ) {
      setIndex(0);
      setFlipped(false);
    } else {
      history.push("/");
    }
  };

  if (cards.length > 2) {
    return (
      <div className="card" style={{ width: "auto" }}>
        <div className="card-body">
          <h5 className="card-title">
            Card {index + 1} of {cards.length}
          </h5>
          <p className="card-text">{!flipped ? card.front : card.back}</p>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setFlipped(!flipped)}
          >
            Flip
          </button>
          {flipped && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleNext}
            >
              Next
            </button>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <>
        <h3>Not enough cards.</h3>
        <p>
          You need at least 3 cards to study. There are {cards.length} cards in
          this deck.
        </p>
        <Link to={`/decks/${deck.id}/cards/new`}>
          <button type="btn" className="btn btn-primary">
            +Add Cards
          </button>
        </Link>
      </>
    );
  }
}

/**
 * flipped button toggles a boolean state
 * use a button to call next if on the back side
 * next button increments index state and resets flipped state
 */
