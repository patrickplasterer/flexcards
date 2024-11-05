import { Workspace } from "@/components/ui/workspace";
import { CollapsingPanel } from "@/components/ui/collapsing-panel";
import { Flashcard } from "@/components/ui/flashcard";
import { getUser, getDecks, getCards } from "@/lib/data";
import { Toolbar } from "@/components/ui/toolbar";
import { redirect } from "next/navigation";
import * as React from 'react'


export default async function Page({ searchParams }: {searchParams: { [key: string]: string | string[] | undefined }}) {
  
  let isFlashcardDisabled = false;
  const deckId = searchParams?.deck;
  if(!deckId) {isFlashcardDisabled = true};


  const cardId = searchParams?.card;

  const user = await getUser();
  const decks = await getDecks(user.id);
  let deck = decks.find(({ id }) => id == Number(deckId))
  deck = deck ? deck : decks[0]
  const cards = await getCards(deck.id);
  let card = cards.find(({ id }) => id == Number(cardId))
  card = card ? card : cards[0]
  if (!deckId) redirect(`/study?deck=${deck.id}&card=${card.id}`);
    

    return (
        <Workspace>
          <CollapsingPanel>
            <Toolbar decks={decks} deck={deck} workspace="study" userId={user.id}/>
          </CollapsingPanel>
          <Flashcard cards={cards} userId={user.id} card={card} isDisabled={isFlashcardDisabled}/>
        </Workspace>
    );

  };