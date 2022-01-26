/**
 * Takes in an id and calls deletedDeck to remove the deck with the matching id
 */
import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { deleteCard, deleteDeck } from "../../utils/api/index"

export default function DeleteButton({cardId = null, deckId = null}){
    const history = useHistory();
    const match = useRouteMatch();

    const handleDelete = () => {
        const aborter = new AbortController();

        if( cardId && window.confirm("Delete Card?\n\n You will not be able to recover it.")){
            deleteCard(cardId, aborter.signal);
            history.go(0);
        }
        if( deckId && window.confirm("Delete Deck? \n\n This is unrecoverable.")){
            deleteDeck(deckId, aborter.signal);
            match.path === "/" ? history.go(0) : history.push("/")
        }
    }
    return <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
}