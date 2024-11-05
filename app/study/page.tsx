import { Workspace } from "@/components/ui/workspace";
import { CollapsingPanel } from "@/components/ui/collapsing-panel";
import { FlashcardWrapper } from "@/components/ui/flashcard-wrapper";
import { getUser, getDecks } from "@/lib/data";
import { Toolbar } from "@/components/ui/toolbar";
import * as React from 'react'


export default async function Page({ searchParams }: {searchParams: { [key: string]: string | undefined }}) {
  
  
  const deckId = searchParams?.deck;
  const cardId = searchParams?.card;


  const user = await getUser();
  const decks = await getDecks(user.id)
    

    return (
        <Workspace>
          <CollapsingPanel>
            <Toolbar decks={decks} deckId={deckId} workspace="study" userId={user.id}/>
          </CollapsingPanel>
          {deckId ? <FlashcardWrapper deckId={deckId} userId={user.id} cardId={cardId}/> : <div className="flex flex-col w-full items-center justify-center">Select a deck to continue</div>}
        </Workspace>
    );

  };