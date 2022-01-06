/**
 * Takes in an id and calls deletedDeck to remove the deck with the matching id
 */
import { useHistory } from "react-router-dom"
import { deleteDeck } from "../../utils/api/index"

export default function DeleteButton({deckId}){
    const history = useHistory();

    const handleDelete = () => {
        const aborter = new AbortController();

        if(window.confirm("Delete Deck? \n\n This is unrecoverable.")){
            deleteDeck(deckId, aborter.signal);
            history.go(0);
        }
    }

    return <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
}