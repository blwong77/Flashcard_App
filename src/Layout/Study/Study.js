/**
 * Displays a breadcrumb element for navigation
 *
 * Displays a h2 tag reading "Study: {name of deck}"
 * Displays in an h4 tag "Card {current card} of {deck.cards.length}"
 * Displays front side of card by default
 * Displays a flip button and a next button
 *
 */
import Crumb from "../Common/Crumb";
import StudyCardDeck from "./StudyCardDeck";
import { useParams } from "react-router-dom";

export default function Study({decks}) {
  const { deckId } = useParams();

  if(decks.length > 0){
    const indexOfDeck = deckId-1
    const {name} = decks[indexOfDeck];
  
    return (
      <>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <Crumb destination={"/"} name={"Home"} />
            <Crumb destination={`/decks/${deckId}`} name={name} />
            <Crumb name={"Study"} isActive={true} />
          </ol>
        </nav>
        <h2>Study: {name}</h2>
        <StudyCardDeck deck={decks[indexOfDeck]} />
      </>
    );
  }
  return <p>Loading...</p>
}