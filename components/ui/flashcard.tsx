'use client';

import { Button } from "@/components/ui/button"
import { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckIcon, XIcon, ArrowLeftToLineIcon, ArrowRightToLineIcon, EyeOffIcon, EyeIcon } from "lucide-react";
import clsx from "clsx";

const Cards = [
    {
        key: 1,
        title: "First Card",
        backtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nisl sapien, vehicula facilisis lorem a, tristique ultrices lorem. Integer dignissim justo est, ut vestibulum ligula tempor sed. Integer facilisis condimentum libero, eu aliquet turpis efficitur quis. Duis quis velit in ipsum tincidunt mollis convallis nec turpis. Vivamus non venenatis augue"
    },
    {
        key: 2,
        title: "Second Card",
        backtext: "In justo tortor, dignissim nec vehicula et, ullamcorper id purus. "
    },
    {
        key: 3,
        title: "Third Card",
        backtext: "Sed nec elementum mi. Maecenas ullamcorper est odio, nec congue leo semper at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris at euismod tellus. Pellentesque in luctus diam. Vivamus eu quam quis dolor luctus posuere sed quis augue. Integer ac eros quis libero dignissim congue. Proin eleifend sit amet mauris et eleifend."
    },

]


export default function Flashcard({ handleHide, isHidden }: {handleHide: React.MouseEventHandler, isHidden: boolean}) {
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
        let max = Cards.length - 1;
        let offset = Math.floor(Math.random() * max) + 1;
        let newCard: number = card + offset;
        if (newCard > max) {newCard = newCard - Cards.length}
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
            <div className="absolute top-0 left-0 opacity-40 hover:opacity-100" onClick={handleHide}>
                {isHidden ? <ArrowRightToLineIcon /> : <ArrowLeftToLineIcon/>}
                </div>
            <div className="absolute top-0 right-1 opacity-40 hover:opacity-100" onClick={handleInvisible}>
                {isInvisible ? <EyeIcon className="opacity-40 hover:opacity-100"/> : <EyeOffIcon/>}
                </div>
            <div className="flex flex-row flex-grow items-center justify-between w-full overflow-hidden">
                <Button variant={"ghost"} size={"lg"} className={clsx('disabled:opacity-0', {'opacity-0 hover:opacity-100': isInvisible})} onClick={lastCard} disabled={!backButton}><ArrowLeft className="h-10 w-10"/></Button>
                <div className="flex flex-row flex-grow justify-center">
                    <div className="p-4 items-center overflow-auto">
                        {isTitle? Cards[card].title : Cards[card].backtext}
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