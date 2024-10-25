import { Workspace } from "@/components/ui/workspace";
import { Panel } from "@/components/ui/panel";
import { Flashcard } from "@/components/ui/flashcard";
import { getUser, getDecks, getCards } from "@/lib/data";
import { Toolbar } from "@/components/ui/toolbar";



export default async function Page({ searchParams }) {
    let deck = searchParams?.deck;
    const user = await getUser();
    const decks = await getDecks(user.id);
    const cards = await getCards(deck ? deck : decks[0].id)
    

    return (
        <Workspace>
          <Panel>
            <Toolbar decks={decks}/>
          </Panel>
          <Flashcard cards={cards}/>
        </Workspace>
    );

  };