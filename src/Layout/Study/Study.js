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
