'use client';

import { Button } from "@/components/ui/button"
import { useState } from 'react';


const Cards = [
    {
        key: 1,
        title: "First Card",
        backtext: "This is the back text."
    },
    {
        key: 2,
        title: "Second Card",
        backtext: "This is the back text."
    },
    {
        key: 3,
        title: "Third Card",
        backtext: "This is the back text."
    },

]


export default function Flashcard() {
    const [isTitle, setIsTitle] = useState(true);
    const [card, setCard] = useState(0);
    const [history, setHistory] = useState([0]);
    const [backButton, setBackButton] = useState(false);

    function handleClick() {
        isTitle? setIsTitle(false) : setIsTitle(true);
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
        if (history.length < 2) {return null}
        let currentCard = history.length - 1
        setCard(history[currentCard - 1])
        let newHistory = history.toSpliced(-1, 1)
        setHistory(newHistory);
        if (newHistory.length < 2) {setBackButton(false)}
    }

    return (
        <div className="flex gap-4 bg-red-600 min-h-[30vh] items-center justify-between text-3xl p-6 hover:ring-4 hover:ring-lime-500 " onClick={handleClick}>
            <Button variant={"outline"} size={"lg"} onClick={lastCard} disabled={!backButton}>Back</Button>
            <div className= "p-6">
                {isTitle? Cards[card].title : Cards[card].backtext}
            </div>
            <Button variant={"outline"} size={"lg"} onClick={nextCard}>Next</Button>
        </div>
    )
}