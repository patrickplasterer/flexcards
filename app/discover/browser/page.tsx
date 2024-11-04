import { Workspace } from "@/components/ui/workspace";
import { Toolbar } from "@/components/ui/toolbar";
import { SubtlePanel } from "@/components/ui/subtle-panel";
import { getPublicDecks } from "@/lib/data";
import { DeckDescriptor } from "@/components/ui/discover/deck-descriptor";
import { PublicDeckList } from "@/components/ui/discover/public-deck-list";
import { DiscoverToolbar } from "@/components/ui/discover-toolbar";
import { redirect } from "next/navigation";
import { getReviews } from "@/lib/data";
import { getUser } from "@/lib/data";


export default async function Page({ searchParams }) {

    let deckId = searchParams.deck;
    const user = await getUser();
    const decks = await getPublicDecks();
    let deck = decks.find(({ id }) => id == deckId)
    if (!deckId) {
        deck = decks[0];
        redirect(`/discover/browser?deck=${deck.id}`);
    };
    const reviews = await getReviews(deck.id);

    return (
        <Workspace>
              {/* <SubtlePanel position='1'>
                <DiscoverToolbar/>
              </SubtlePanel> */}
              <SubtlePanel position='1'>
                <PublicDeckList decks={decks}/>
              </SubtlePanel>
              <DeckDescriptor activeDeck={deck} reviews={reviews} userId={user.id}/>
        </Workspace>
    );

  };