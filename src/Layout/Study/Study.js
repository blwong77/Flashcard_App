/**
 * Displays a breadcrumb element for navigation
 *
 * Displays a h2 tag reading "Study: {title of deck}"
 * Displays in an h4 tag "Card {current card} of {deck.cards.length}"
 * Displays front side of card by default
 * Displays a flip button and a next button
 *
 */

import { Link, useParams } from "react-router-dom";

export default function Study({decks}) {
  const { deckId } = useParams();
  console.log("this is deck", deckId)

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to={`/decks/${deckId}`}></Link>
        </li>
      </ol>
    </nav>
  );
}
