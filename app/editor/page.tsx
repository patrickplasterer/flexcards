import { Workspace } from "@/components/ui/workspace";
import { getUser, getDecks } from "@/lib/data";
import { Toolbar } from "@/components/ui/toolbar";
import { CardEditor } from "@/components/ui/editor/card-editor";
import { SubtlePanel } from "@/components/ui/subtle-panel";
import * as React from 'react'
import { CardNavigator } from "@/components/ui/editor/card-navigator";
import { CardEditorWrapper } from "@/components/ui/editor/card-editor-wrapper";
import { redirect } from "next/navigation";

export default async function Page({ searchParams }: {searchParams: { [key: string]: string | undefined }}) {


    const deckId = searchParams?.deck;
    const cardId = searchParams?.card;

    const user = await getUser();
    const decks = await getDecks(user.id)


    return (
        <Workspace>
            <SubtlePanel position='1'>
              <Toolbar decks={decks} deckId={deckId} userId={user.id} workspace="editor"/>
            </SubtlePanel>
            <SubtlePanel position='2'>
              <CardNavigator deckId={deckId}/>
            </SubtlePanel>
            <CardEditorWrapper cardId={cardId}/>
        </Workspace>
    );

  };