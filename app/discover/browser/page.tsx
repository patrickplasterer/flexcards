import { DeckDescriptor } from "@/components/ui/discover/deck-descriptor";
import { PublicDeckList } from "@/components/ui/discover/public-deck-list";
import { SubtlePanel } from "@/components/ui/subtle-panel";
import { Workspace } from "@/components/ui/workspace";
import { getFollowedDecks, getPublicDecks, getReviews, getUser } from "@/lib/data";
import * as React from 'react'


export default async function Page({ searchParams }: {searchParams: { [key: string]: string | string[] | undefined }}) {
    
    const searchParameters = await searchParams
    const deckId = await searchParameters?.deck;
    const user = await getUser();
    const decks = await getPublicDecks();
    const deck = (deckId && decks) ? decks.find(({ id }) => id == Number(deckId)) : undefined
    const reviews = deck ? await getReviews(deck.id) : undefined;
    const followedDecks = await getFollowedDecks(user.id)

    return (
        <Workspace>
              {/* <SubtlePanel position='1'>
                <DiscoverToolbar/>
              </SubtlePanel> */}
              <SubtlePanel position='1'>
                <PublicDeckList decks={decks}/>
              </SubtlePanel>
              { deck ? <DeckDescriptor activeDeck={deck} reviews={reviews} userId={user.id} followedDecks={followedDecks}/> : <div className="flex w-full items-center justify-center">Select a deck to continue.</div>}
        </Workspace>
    );

  };