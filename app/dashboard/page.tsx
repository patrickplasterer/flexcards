import Link from "next/link"
import * as React from 'react'

export default function Page() {
    return (
        <div className="flex flex-col h-dvh w-full p-12 overflow-auto">
            <div className="flex flex-col text-9xl md:text-[8rem] font-black leading-none mb-8 mt-6">Let&apos;s learn something.</div>
            <div className="flex flex-col text-6xl md:text-8xl leading-none">
                <div className="mb-6 leading-snug">
                    <Link href='/study' className="inline-flex p-1 flex-col items-center justify-center underline underline-offset-[1.5rem] hover:bg-highlighter hover:text-black hover:bg-amber-600">Study your decks</Link>, 
                    <span className="text-nowrap">
                        <Link href='/editor' className="inline-flex p-1 flex-col items-center justify-center underline underline-offset-[1.5rem] hover:bg-highlighter hover:text-black hover:bg-amber-600">edit them</Link>,
                    </span><span> or </span>
                    <Link href='/discover/browser' className="inline-flex p-1 flex-col items-center justify-center underline underline-offset-[1.5rem] hover:bg-highlighter hover:text-black hover:bg-amber-600">discover</Link>.</div>
            </div>
            {/* <div className="flex gap-2">
                <div className="flex flex-col text-2xl items-center justify-center rounded-xl bg-blue-500 hover:opacity-90 p-6">HTML</div>
                <div className="flex flex-col text-2xl items-center justify-center rounded-xl bg-blue-500 hover:opacity-90 p-6">CSS</div>
                <div className="flex flex-col text-2xl items-center justify-center rounded-xl bg-blue-500 hover:opacity-90 p-6">JavaScript</div>
                <div className="flex flex-col text-2xl items-center justify-center rounded-xl bg-blue-500 hover:opacity-90 p-6">React</div>
                <div className="flex flex-col text-2xl items-center justify-center rounded-xl bg-blue-500 hover:opacity-90 p-6">Next.js</div>
                <div className="flex flex-col text-2xl items-center justify-center rounded-xl bg-blue-500 hover:opacity-90 p-6">TypeScript</div>
                <div className="flex flex-col text-2xl items-center justify-center rounded-xl bg-blue-500 hover:opacity-90 p-6">SQL</div>
                <div className="flex flex-col text-2xl items-center justify-center rounded-xl bg-blue-500 hover:opacity-90 p-6">Jest</div>
                <div className="flex flex-col text-2xl items-center justify-center rounded-xl bg-blue-500 hover:opacity-90 p-6">PostgreSQL</div>
            </div> */}
        </div>
    )
}