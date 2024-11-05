"use client"

import { ArrowLeftToLineIcon, ArrowRightToLineIcon, GripVerticalIcon } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import * as React from 'react'

export function CollapsingPanel({ children }: {children: React.ReactNode}) {
    
    const [isHidden, setIsHidden] = useState(false)

    function handleClick(e: React.MouseEvent<HTMLDivElement>) {
        e.stopPropagation();
        setIsHidden(!isHidden);
    }

    return (
        <div className="flex relative">
            <div className={cn('flex flex-grow', {'w-0 overflow-hidden': isHidden === true})}>
                {children}
                <div className="flex flex-col justify-center items-center bg-border w-[1px]"><div className='flex z-10 rounded-lg opacity-50 p-4 hover:opacity-100 cursor-col-resize'><GripVerticalIcon className='w-4 h-4'/></div></div>
            </div>
            <div className="absolute top-[2px] right-[-28px] opacity-40 hover:opacity-100 z-10" onClick={handleClick}>
                {isHidden ? <ArrowRightToLineIcon /> : <ArrowLeftToLineIcon/>}
            </div>
        </div>
    )
}