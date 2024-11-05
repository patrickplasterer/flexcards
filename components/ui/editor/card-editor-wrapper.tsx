import * as React from 'react';
import { CardEditorButtons } from './card-editor-buttons';
import { CardEditor } from './card-editor';
import { getCardById } from '@/lib/data';


export async function CardEditorWrapper({ cardId }: {cardId: string | undefined}) {

    const cards = await getCardById(Number(cardId));
    const card = cards[0];

    return (
        <div className="flex flex-col flex-grow basis-1/2">
            <CardEditorButtons card={card}/>
            <div className="bg-border h-[1px]"></div>
            {card ? <CardEditor card={card}/> : <div className="flex flex-col w-full flex-grow items-center justify-center">Select a card to edit it here.</div>}
        </div>
    )
};