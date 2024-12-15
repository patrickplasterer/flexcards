import { Workspace } from "@/components/ui/workspace";
import { CollapsingPanel } from "@/components/ui/collapsing-panel";
import { FlashcardWrapper } from "@/components/ui/flashcard-wrapper";
import { getUser, getDecks } from "@/lib/data";
import { Toolbar } from "@/components/ui/toolbar";
import { getFollowedDecks } from "@/lib/data";
import { User } from "@clerk/nextjs/server";


export default async function Page({ searchParams }: {searchParams: { [key: string]: string | undefined }}) {
  
  const searchParameters = await searchParams
  const deckId = await searchParameters?.deck;
  const cardId = await searchParameters?.card;


  const user = await getUser() as User;
  const decks = await getDecks(user.id)
  const followedDecks = await getFollowedDecks(user.id)
    

    return (
        <Workspace>
          <CollapsingPanel>
            <Toolbar decks={decks} followedDecks={followedDecks} deckId={deckId} workspace="study" userId={user.id}/>
          </CollapsingPanel>
          {deckId ? <FlashcardWrapper deckId={deckId} userId={user.id} cardId={cardId}/> : <div className="flex flex-col w-full items-center justify-center">Select a deck to continue</div>}
        </Workspace>
    );

  };