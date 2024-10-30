import { Workspace } from "@/components/ui/workspace";
import { Toolbar } from "@/components/ui/toolbar";
import { SubtlePanel } from "@/components/ui/subtle-panel";
import { getPublicDecks } from "@/lib/data";
import { DeckDescriptor } from "@/components/ui/discover/deck-descriptor";
import { PublicDeckList } from "@/components/ui/discover/public-deck-list";
import { DiscoverToolbar } from "@/components/ui/discover-toolbar";
import { redirect } from "next/navigation";


export default async function Page({ searchParams }) {

    let deckId = searchParams.deck;
    const decks = await getPublicDecks();
    let deck = decks.find(({ id }) => id == deckId)
    if (!deckId) {
        deck = decks[0];
        redirect(`/discover/browser?deck=${deck.id}`);
    };


    return (
        <Workspace>
              <SubtlePanel>
                <DiscoverToolbar/>
              </SubtlePanel>
              <SubtlePanel>
                <PublicDeckList decks={decks}/>
              </SubtlePanel>
              <DeckDescriptor activeDeck={deck}/>
        </Workspace>
    );

  };