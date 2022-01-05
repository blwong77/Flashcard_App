import React, { useEffect, useState } from "react";
import { listDecks } from "../../utils/api";
import DeckListItem from "./DeckListItem";

export default function DeckList() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const aborter = new AbortController();
    async function listingDecks() {
      const deckArr = await listDecks(aborter.signal);
      setDecks(deckArr);
    }
    listingDecks();
    return () => {
      aborter.abort();
    };
  }, []);

  const listOfDecks = decks.map(({ name, description, cards, id }) => (
    <DeckListItem
      key={id}
      name={name}
      description={description}
      cards={cards}
      deckId={id}
    />
  ));

  return <div className="list-group">{listOfDecks}</div>;
}