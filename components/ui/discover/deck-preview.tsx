"use client"

import { StarIcon} from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import * as React from 'react'
import { Deck } from "@/db/schema";

export function DeckPreview({ deck }: {deck: Deck}) {
    
    const searchParams = useSearchParams();
    const activeDeck = searchParams.get("deck");
    const router = useRouter();
    function handleClick() {
        router.push(`?deck=${deck.id}`);
        router.refresh();
      }

    return (
        <div onClick={handleClick} className={cn("flex flex-col h-30 rounded-xl border-2 w-full py-2 px-3 hover:bg-accent hover:text-accent-foreground", { "bg-accent text-accent-foreground": Number(activeDeck) == deck.id })}>
            <h1 className="font-bold text-sm">{deck.name}</h1>
            <div className="flex mt-1 mb-1">
                <StarIcon fill="white" className="h-2.5 w-2.5"/>
                <StarIcon fill="white" className="h-2.5 w-2.5"/>
                <StarIcon fill="white" className="h-2.5 w-2.5"/>
                <StarIcon fill="white" className="h-2.5 w-2.5"/>
                <StarIcon className="h-2.5 w-2.5"/>
            </div>
            <p className="mt-1 text-xs overflow-hidden line-clamp-2">{deck.description}</p>
        </div>
    )
}