'use client';

import { Button } from "@/components/ui/button"
import { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckIcon, XIcon, ArrowLeftToLineIcon, ArrowRightToLineIcon, EyeOffIcon, EyeIcon } from "lucide-react";
import clsx from "clsx";


export function Flashcard({ cards }: {cards: Array<object>}) {
    const [isTitle, setIsTitle] = useState(true);
    const [card, setCard] = useState(0);
    const [history, setHistory] = useState([0]);
    const [backButton, setBackButton] = useState(false);
    const [isInvisible, setIsInvisible] = useState(false);

    function handleClick() {
        isTitle? setIsTitle(false) : setIsTitle(true);
    };

    function handleInvisible(e) {
        e.stopPropagation();
        isInvisible? setIsInvisible(false) : setIsInvisible(true);
    };

    function nextCard(e) {
        e.stopPropagation();
        let max = cards.length - 1;
        let offset = Math.floor(Math.random() * max) + 1;
        let newCard: number = card + offset;
        if (newCard > max) {newCard = newCard - cards.length}
        setCard(newCard);
        setIsTitle(true);
        setHistory([...history, newCard]);
        setBackButton(true);
    };

    function lastCard(e) {
        e.stopPropagation();
        setIsTitle(true);
        if (history.length < 2) {return null}
        let currentCard = history.length - 1
        setCard(history[currentCard - 1])
        let newHistory = history.toSpliced(-1, 1)
        setHistory(newHistory);
        if (newHistory.length < 2) {setBackButton(false)}
    }

    return (
        <div className="flex relative flex-col min-h-[30vh] flex-grow items-center justify-between text-3xl rounded-xl" onClick={handleClick}>
            <div className="absolute top-0 right-1 opacity-40 hover:opacity-100" onClick={handleInvisible}>
                {isInvisible ? <EyeIcon className="opacity-40 hover:opacity-100"/> : <EyeOffIcon/>}
                </div>
            <div className="flex flex-row flex-grow items-center justify-between w-full overflow-hidden">
                <Button variant={"ghost"} size={"lg"} className={clsx('disabled:opacity-0', {'opacity-0 hover:opacity-100': isInvisible})} onClick={lastCard} disabled={!backButton}><ArrowLeft className="h-10 w-10"/></Button>
                <div className="flex flex-row flex-grow items-center justify-center">
                    <div className="p-4 items-center overflow-auto select-none">
                        {isTitle? cards[card].front : cards[card].back}
                    </div>
                </div>
                <Button variant={"ghost"} size={"lg"} className={isInvisible ? 'opacity-0 hover:opacity-100' : ''} onClick={nextCard}><ArrowRight className="h-10 w-10"/></Button>
            </div>
            <div className="flex flex-row justify-center h-[10vh]">
                    <Button variant={"ghost"} size={"lg"} className={isInvisible ? 'opacity-0 hover:opacity-100' : ''} onClick={nextCard}><XIcon className="h-10 w-10"/></Button>
                    <Button variant={"ghost"} size={"lg"} className={isInvisible ? 'opacity-0 hover:opacity-100' : ''} onClick={nextCard}><CheckIcon className="h-10 w-10"/></Button>
            </div>
        </div>
    )
}