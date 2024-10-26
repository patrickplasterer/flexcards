"use client"

import { GripHorizontalIcon } from "lucide-react"
import { useSearchParams } from "next/navigation";
import { updateCard } from "@/lib/actions";
import { TextField } from "./text-field";







export function CardEditor({ activeCard }) {

    return (
        <div className="flex flex-col flex-grow basis-1/2">
            <div className="flex p-2 items-center justify-end">
                <div className="flex p-2 rounded-xl hover:bg-accent hover:text-accent-foreground">
                    Save
                </div>
            </div>
            <div id='front' className="flex flex-col items-center justify-center p-4 basis-1/2">
                <TextField value={activeCard.front}/>   
            </div>
            <div className="flex justify-center items-center bg-border h-[1px]"><div className='flex z-10 rounded-lg opacity-50 p-4 hover:opacity-100 cursor-row-resize'><GripHorizontalIcon className='w-4 h-4' /></div></div>
            <div id='back' className="flex flex-col items-center justify-center p-4 basis-1/2">
                {activeCard.back}
            </div>
        </div>
    )
}