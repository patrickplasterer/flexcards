import { Workspace } from "@/components/ui/workspace";
import { getUser, getDecks, getCards } from "@/lib/data";
import { Toolbar } from "@/components/ui/toolbar";
import { CardList } from "@/components/ui/card-list";
import { CardEditor } from "@/components/ui/card-editor";
import { SubtlePanel } from "@/components/ui/subtle-panel";
import { redirect } from "next/navigation";

export default async function Page({ searchParams }) {
    let deck = searchParams?.deck;
    let card = searchParams?.card;
    const user = await getUser();
    const decks = await getDecks(user.id);
    deck = deck ? deck : decks[0].id
    const cards = await getCards(deck);
    card = card ? cards.find(({ id }) => id == card) : cards[0]

    return (
        <Workspace>
              <SubtlePanel>
                <Toolbar decks={decks} workspace="editor"/>
              </SubtlePanel>
              <SubtlePanel>
                <CardList cards={cards}/>
              </SubtlePanel>
              <CardEditor activeCard={card}/>
        </Workspace>
    );

  };