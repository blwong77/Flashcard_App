import React, { useEffect} from "react";
import { useParams } from "react-router-dom";
import Crumb from "../Common/Crumb";
import { readDeck } from "../../utils/api";

export default function EditDeck({currentDeck, setCurrentDeck}) {
  const {deckId} = useParams();
  useEffect(() => {
    const aborter = new AbortController();
    readDeck(deckId, aborter.signal).then(setCurrentDeck);
  }, [deckId, setCurrentDeck]);

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <Crumb destination={"/"} name={"Home"} />
        <Crumb destination={`/decks/${deckId}`} name={currentDeck.name} />
        <Crumb name={"Study"} isActive={true} />
      </ol>
    </nav>
  );
}
