"use client"

import { StarIcon, StarHalfIcon } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

export function DeckPreview({ deck }: {deck: object}) {
    
    const searchParams = useSearchParams();
    const activeDeck = searchParams.get("deck");
    const router = useRouter();
    function handleClick() {
        router.push(`?deck=${deck.id}`);
        router.refresh();
      }

    return (
        <div onClick={handleClick} className={cn("flex flex-col h-30 rounded-xl border-2 w-full py-2 px-3 hover:bg-accent hover:text-accent-foreground", { "bg-accent text-accent-foreground": activeDeck == deck.id })}>
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