'use client';

import { Button } from "@/components/ui/button"
import { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckIcon, XIcon, EyeOffIcon, EyeIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { addHit, addMiss, addFlip } from "@/lib/actions";
import * as React from 'react'
import { Card } from "@/db/types";


export function Flashcard({ cards, userId, card, isDisabled }: {cards: Array<Card>, userId: string, card: Card, isDisabled: boolean}) {
    const [isTitle, setIsTitle] = useState(true);
    const [cardIndex, setCardIndex] = useState(0);
    const [history, setHistory] = useState([0]);
    const [backButton, setBackButton] = useState(false);
    const [isInvisible, setIsInvisible] = useState(false);

    function handleClick() {
        setIsTitle(!isTitle);
    };

    function handleInvisible(e: React.MouseEvent<HTMLDivElement>) {
        e.stopPropagation();
        setIsInvisible(!isInvisible);
    };

    function nextCard() {
        const max = cards.length - 1;
        const offset = Math.floor(Math.random() * max) + 1;
        let newCard: number = cardIndex + offset;
        if (newCard > max) {newCard = newCard - cards.length}
        setCardIndex(newCard);
        setIsTitle(true);
        setHistory([...history, newCard]);
        setBackButton(true);
    };

    function lastCard(e: React.MouseEvent<HTMLButtonElement>) {
        e.stopPropagation();
        setIsTitle(true);
        if (history.length < 2) {return null}
        const currentCard = history.length - 1
        setCardIndex(history[currentCard - 1])
        const newHistory = history.toSpliced(-1, 1)
        setHistory(newHistory);
        if (newHistory.length < 2) {setBackButton(false)}
    }

    function hitCard(e: React.MouseEvent<HTMLButtonElement>) {
        e.stopPropagation();
        const cardId = card.id;
        addHit(userId, cardId);
        addFlip(userId, cardId);
        nextCard();
    }

    function missCard(e: React.MouseEvent<HTMLButtonElement>) {
        e.stopPropagation();
        const cardId = card.id;
        addMiss(userId, cardId);
        nextCard();
    }

    function flipCard(e: React.MouseEvent<HTMLButtonElement>) {
        e.stopPropagation();
        const cardId = card.id;
        addFlip(userId, cardId);
        nextCard();
    }

    return (
        <div className={cn("flex relative flex-col min-h-[30vh] flex-grow items-center justify-between text-3xl rounded-xl", {'pointer-events-none, opacity-60': isDisabled})} onClick={handleClick}>
            <div className="absolute top-1 right-2 opacity-40 hover:opacity-100" onClick={handleInvisible}>
                {isInvisible ? <EyeIcon className="opacity-40 hover:opacity-100"/> : <EyeOffIcon/>}
            </div>
            <div className="flex flex-row flex-grow items-center justify-between w-full overflow-hidden">
                <Button variant={"ghost"} size={"lg"} className={cn('disabled:opacity-0', {'opacity-0 hover:opacity-100': isInvisible})} onClick={lastCard} disabled={!backButton}><ArrowLeft className="h-10 w-10"/></Button>
                <div className="flex flex-row flex-grow items-center justify-center">
                    <div className="p-4 items-center overflow-auto select-none">
                        {cards.length === 0 ? <div className="flex text-center w-56 opacity-40 text-md">This deck has no cards yet. Add cards in the editor.</div> : (isTitle? cards[cardIndex].front : cards[cardIndex].back)}
                    </div>
                </div>
                <Button variant={"ghost"} size={"lg"} className={isInvisible ? 'opacity-0 hover:opacity-100' : ''} onClick={flipCard}><ArrowRight className="h-10 w-10"/></Button>
            </div>
            <div className="flex flex-row justify-center h-[10vh]">
                    <Button variant={"ghost"} size={"lg"} className={isInvisible ? 'opacity-0 hover:opacity-100' : ''} onClick={missCard}><XIcon className="h-10 w-10"/></Button>
                    <Button variant={"ghost"} size={"lg"} className={isInvisible ? 'opacity-0 hover:opacity-100' : ''} onClick={hitCard}><CheckIcon className="h-10 w-10"/></Button>
            </div>
        </div>
    )
}