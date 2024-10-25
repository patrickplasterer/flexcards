"use client"

import clsx from "clsx"
import { ArrowLeftToLineIcon, ArrowRightToLineIcon } from "lucide-react"
import { useState } from "react"

export function Panel({ children }) {
    const [isHidden, setIsHidden] = useState(false)

    function handleClick(e) {
        e.stopPropagation();
        setIsHidden(!isHidden);
    }

    return (
        <div className={clsx('flex relative', {'w-0': isHidden === true})}>
            <div className="absolute top-0 right-[-28px] opacity-40 hover:opacity-100 z-10" onClick={handleClick}>
                {isHidden ? <ArrowRightToLineIcon /> : <ArrowLeftToLineIcon/>}
            </div>
            {children}
        </div>
    )
}