import Link from "next/link";
import { Button } from "@/components/ui/button"


export function PopUp() {
    return (
        <div className="flex flex-col p-6 px-10 bg-accent w-[40vw] items-center gap-6 rounded-xl absolute inset-5">
            <h1 className="text-3xl font-bold">Flashcards.io</h1>
            <p className="text-xl">A powerful flashcard app designed with React, Next.js and Tailwind.</p>
            <Button className="mt-3 mb-3 rounded-xl" size='lg'>Get Started</Button>
            <p>Created by Patrick Plasterer</p>
        </div>

    )
}