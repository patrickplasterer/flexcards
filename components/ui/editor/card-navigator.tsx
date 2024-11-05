import * as React from 'react';
import { CardListButtons } from './card-list-buttons';
import { CardList } from './card-list';


export function CardNavigator({ deckId }: {deckId: string | undefined}) {

    return (
        <div className="flex flex-col w-[20vw] flex-grow overflow-hidden">
        <div className="flex h-[3vh] min-h-10 flex-none items-center justify-center">
            <CardListButtons/>
        </div>
        <div className="bg-border h-[1px]"></div>
        <div className="flex flex-col p-2 overflow-hidden">
            <div className="flex flex-col">
                {/* <div className="flex w-full border-2 rounded-[0.5rem] p-1">
                    Search
                </div> */}
            </div>
            {deckId ? <CardList deckId={deckId}/> : <div className="flex flex-col pt-2 w-full text-sm items-center">Select a deck to continue</div>}
        </div>
    </div>
    )
}