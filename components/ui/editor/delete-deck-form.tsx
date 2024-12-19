
import { Deck } from "@/db/schema";
import { Button } from "../button"
import { deleteDeck } from "@/lib/actions";
import { openCloseDataState } from "@/lib/utils";
 
export function DeleteDeckForm({deck, userId, id}: {deck: Deck, userId: string, id: string}) {

  function handleDelete() {
    deleteDeck(userId, deck);
    openCloseDataState(id);
}

  return (

      <div className="flex flex-col items-center justify-center" aria-describedby="delete deck warning">
        <div className='mt-4 text-lg font-semibold mb-2'>Are you sure you want to delete this deck?</div>
          <div className="mb-4">This action cannot be undone.</div>
          <Button variant='default' size='lg' onClick={handleDelete}>Delete</Button>
      </div>
  )
}
