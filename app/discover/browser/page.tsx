import { DeckDescriptor } from "@/components/ui/discover/deck-descriptor";
import { PublicDeckList } from "@/components/ui/discover/public-deck-list";
import { SubtlePanel } from "@/components/ui/subtle-panel";
import { Workspace } from "@/components/ui/workspace";
import { getPublicDecks, getReviews, getUser } from "@/lib/data";
import { redirect } from "next/navigation";
import * as React from 'react'


export default async function Page({ searchParams }: {searchParams: { [key: string]: string | string[] | undefined }}) {

    const deckId = searchParams?.deck;
    const user = await getUser();
    const decks = await getPublicDecks();
    let deck = decks.find(({ id }) => id == Number(deckId))
    if (!deckId) {
        deck = decks[0];
        redirect(`/discover/browser?deck=${deck.id}`);
    };
    const reviews = await getReviews(deck?.id);

    return (
        <Workspace>
              {/* <SubtlePanel position='1'>
                <DiscoverToolbar/>
              </SubtlePanel> */}
              <SubtlePanel position='1'>
                <PublicDeckList decks={decks}/>
              </SubtlePanel>
              { deck ? <DeckDescriptor activeDeck={deck} reviews={reviews} userId={user.id}/> : 'Select a deck' }
        </Workspace>
    );

  };