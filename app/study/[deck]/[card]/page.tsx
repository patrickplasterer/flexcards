import { Workspace } from "@/components/ui/workspace";
import { CollapsingPanel } from "@/components/ui/collapsing-panel";
import { Flashcard } from "@/components/ui/flashcard";
import { getUser, getDecks, getCards } from "@/lib/data";
import { Toolbar } from "@/components/ui/toolbar";



export default async function Page({ searchParams }) {
    const { deck, card } = searchParams;
    // const user = await getUser();
    // const decks = await getDecks(user.id);
    // const cards = await getCards(deck ? deck : decks[0].id)
    

    return (
        <Workspace>
          {/* <CollapsingPanel>
            <Toolbar decks={decks} workspace="study"/>
          </CollapsingPanel>
          <Flashcard cards={cards}/> */}
        </Workspace>
    );

  };