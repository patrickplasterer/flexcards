import { Workspace } from "@/components/ui/workspace";
import { getUser, getDecks, getCards } from "@/lib/data";
import { Toolbar } from "@/components/ui/toolbar";
import { CardList } from "@/components/ui/editor/card-list";
import { CardEditor } from "@/components/ui/editor/card-editor";
import { SubtlePanel } from "@/components/ui/subtle-panel";
import { redirect } from "next/navigation";

export default async function Page({ searchParams }) {
    let isCardListDisabled = false;
    let isCardEditorDisabled = false;

    let deckId = searchParams?.deck;
    if(!deckId) {isCardListDisabled = true};

    let card = searchParams?.card;
    if(!card) {isCardEditorDisabled = true};
    
    const user = await getUser();
    const decks = await getDecks(user.id);
    let deck = decks.find(({ id }) => id == deckId)
    deck = deck ? deck : decks[0].id
    const cards = await getCards(deck.id);
    card = cards.find(({ id }) => id == card)
    card = card ? card : cards[0]

    return (
        <Workspace>
              <SubtlePanel>
                <Toolbar decks={decks} deck={deck} userId={user.id} workspace="editor"/>
              </SubtlePanel>
              <SubtlePanel>
                <CardList cards={cards} isDisabled={isCardListDisabled}/>
              </SubtlePanel>
              <CardEditor activeCard={card} isDisabled={isCardEditorDisabled}/>
        </Workspace>
    );

  };