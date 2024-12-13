import { Workspace } from "@/components/ui/workspace";
import { getUser, getDecks, getFollowedDecks } from "@/lib/data";
import { Toolbar } from "@/components/ui/toolbar";
import { SubtlePanel } from "@/components/ui/subtle-panel";
import * as React from 'react'
import { CardNavigator } from "@/components/ui/editor/card-navigator";
import { CardEditorWrapper } from "@/components/ui/editor/card-editor-wrapper";
import { User } from "@clerk/nextjs/server";

export default async function Page({ searchParams }: {searchParams: { [key: string]: string | undefined }}) {


    const deckId = searchParams?.deck;
    const cardId = searchParams?.card;

    const user = await getUser() as User;
    const decks = await getDecks(user.id)
    const followedDecks = await getFollowedDecks(user.id)


    return (
        <Workspace>
            <SubtlePanel position='1'>
              <Toolbar decks={decks} followedDecks={followedDecks} deckId={deckId} userId={user.id} workspace="editor"/>
            </SubtlePanel>
            <SubtlePanel position='2'>
              <CardNavigator deckId={deckId}/>
            </SubtlePanel>
            <CardEditorWrapper cardId={cardId}/>
        </Workspace>
    );

  };