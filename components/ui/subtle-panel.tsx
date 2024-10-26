"use client"

import clsx from "clsx"
import { ArrowLeftToLineIcon, ArrowRightToLineIcon, GripVerticalIcon } from "lucide-react"
import { useState } from "react"

export function SubtlePanel({ children }) {
    
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
            <div className="absolute top-0 right-[-28px] opacity-40 hover:opacity-100 z-10" onClick={handleClick}>
                {isHidden ? <ArrowRightToLineIcon /> : <ArrowLeftToLineIcon/>}
            </div>
        </div>
    )
}