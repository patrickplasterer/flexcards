"use client"

import clsx from "clsx"
import { ChevronsLeftIcon, ChevronRightIcon, GripVerticalIcon, ChevronLeftIcon } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function SubtlePanel({ children, position }) {
    
    const [isHidden, setIsHidden] = useState(false)

    function handleClick(e) {
        e.stopPropagation();
        setIsHidden(!isHidden);
    }

    return (
        <div className="flex relative">
            <div className={clsx('flex flex-grow', {'w-0 overflow-hidden': isHidden === true})}>
                {children}
                <div className="flex flex-col justify-center items-center bg-border w-[1px]"><div className='flex z-10 rounded-lg opacity-50 p-4 hover:opacity-100 cursor-col-resize'><GripVerticalIcon className='w-4 h-4'/></div></div>
            </div>
            <div className={cn("absolute top-0 right-[-28px] opacity-40 hover:opacity-100 z-10", {'top-[15px]': position === '2'})} onClick={handleClick}>
                {isHidden ? <ChevronRightIcon className="h-6 w-6"/> : <ChevronLeftIcon className="h-6 w-6"/>}
            </div>
        </div>
    )
}