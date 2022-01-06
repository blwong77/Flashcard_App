/**
 * Displays a breadcrumb element for navigation
 *
 * Displays a h2 tag reading "Study: {name of deck}"
 * Displays in an h4 tag "Card {current card} of {deck.cards.length}"
 * Displays front side of card by default
 * Displays a flip button and a next button
 *
 */
import React, { useEffect } from "react";
import { readDeck } from "../../utils/api";
import Crumb from "../Common/Crumb";
import StudyCardDeck from "./StudyCardDeck";
import { useParams } from "react-router-dom";

export default function Study({ currentDeck, setCurrentDeck }) {
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
            <Crumb destination={`/decks/${deckId}`} name={currentDeck.name} />
            <Crumb name={"Study"} isActive={true} />
          </ol>
        </nav>
        <h2>Study: {currentDeck.name}</h2>
        <StudyCardDeck deck={currentDeck} />
      </>
    );
  }
  return <p>Loading Study Mode...</p>;
}
