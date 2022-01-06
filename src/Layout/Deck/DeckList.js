import React from "react";
import DeckListItem from "./DeckListItem";

export default function DeckList({ decks }) {
  return (
    <div className="list-group">
      {decks.map(({ name, description, cards, id }) => (
        <DeckListItem
          key={id}
          name={name}
          description={description}
          cards={cards}
          deckId={id}
        />
      ))}
    </div>
  );
}
